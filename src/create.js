let fs = require('fs')
// 不生成的文件
const miscFiles = ['.DS_Store']

copyDir = (src, dist) => {
  fs.access(dist, function(err){
    if (err) {
      // 目录不存在时创建目录
      fs.mkdirSync(dist);
    }
    _copy(null, src, dist);
  })

  function _copy(err, src, dist) {
    if (err) { throw err }
    fs.readdir(src, function(err, files) {
      if (err){ throw err }
      // 过滤不生成的文件
      miscFiles.forEach(function (v) {
        if (!files.includes(v)) return
        files = files.filter(function (k) {
          return k != v
        })
      })
      // 遍历目录中的文件
      files.forEach(function(path) {
        var _src = src + '/' + path
        var _dist = dist + '/' + path
        fs.stat(_src, function(err, st) {
          if (err) { throw err }
          // 判断是文件还是目录
          if (st.isFile()) {
            fs.writeFileSync(_dist, fs.readFileSync(_src))
          } else if (st.isDirectory()) {
            // 当是目录是，递归复制
            copyDir(_src, _dist)
          }
        })
      })
    })
  }
}

exports.init = copyDir