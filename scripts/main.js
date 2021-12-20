const fs = require('fs')
const path = require('path')
const readline = require('readline')
//要遍历的文件夹所在的路径
const filePath = path.resolve('pages/')

//调用文件遍历方法
readDirectory(filePath, false)

/**
 * 文件遍历方法
 * @param dirPath 需要遍历的文件路径
 * @param meta 是否需要创建 `meta` 文件
 */
function readDirectory(dirPath, meta = true) {
  let fileInfos = fs.readdirSync(dirPath)
  // 判断当前是不是已经存在了 `meta` 文件
  const metaPath = path.join(dirPath, 'meta.zh-CN.json')
  // 构造 `json` 数据
  let jsonObject = JSON.parse(fs.readFileSync(metaPath).toString())
  fileInfos.forEach(function(fileInfo) {
    // 获取绝对路径得到 states
    const filePath = path.join(dirPath, fileInfo)
    let states = fs.statSync(filePath)
    if (states.isFile() && (fileInfo.endsWith('.mdx') || fileInfo.endsWith('.md'))) {
      // 去除后缀
      let index = fileInfo.indexOf('.')
      let fileName = fileInfo.substr(0, index)
      // 按行读取文件
      let stream = fs.createReadStream(filePath)
      let reader = readline.createInterface(stream)

      let prefixes = ['# ', 'title: ']
      let lines = []
      reader.on('line', function(line) {
        lines.push(line)
      })
      reader.on('close', function() {
        let find = false
        for (let i = 0; i < lines.length; i++) {
          let line = lines[i]
          for (let j = 0; j < prefixes.length; j++) {
            let pre = prefixes[j]
            if (line.startsWith(pre)) {
              jsonObject[fileName] = line.substr(pre.length, line.length - pre.length)
              if (meta) {
                fs.writeFileSync(metaPath, JSON.stringify(jsonObject, null, 2))
              }
              find = true
              break
            }
          }
          if (find) {
            break
          }
          if (i === lines.length - 1) {
            jsonObject[fileName] = fileName
            if (meta) {
              fs.writeFileSync(metaPath, JSON.stringify(jsonObject, null, 2))
            }
          }
        }
      })

    } else if (states.isDirectory()) {
      jsonObject[fileInfo] = fileInfo
      readDirectory(filePath)
    }
    if (meta) {
      fs.writeFileSync(metaPath, JSON.stringify(jsonObject, null, 2))
    }
  })
}