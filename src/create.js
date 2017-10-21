let fs = require('fs')
// 不生成的文件
const miscFiles = ['.DS_Store']

const myDir = [
	['build',      '\n.\n├── build         # 项目发布包目录'],
	['public',     '├── public         # 公用资源目录'],
	['src',        '└── src            # 开发目录'],
	['src/images', '    ├── images     # 图片资源目录'],
	['src/style',  '    └── style      # 样式文件资源目录\n\n项目目录创建完毕']
]

const createDir = () => {
	myDir.forEach(function (v) {
		const name = v[0]
		const msg = v[1]
		fs.exists(name, (exists) => {
			if (exists) return
			// 目录不存在
			fs.mkdir(name, '0755')
			console.log(msg)
		})
	})
}

/**
 * [初始化静态资源]
 * @param  {[type]} path [初始化资源路径]
 * @param  {[type]} dist [description]
 * @return {[type]}      [description]
 */
exports.init = (path, dist) => {
	createDir()
	// path: build 目录
	// dist: 当前目录
	fs.readdir(path, (err, files) => {
		if (err) { throw err; }
		// 过滤不生成的文件
		miscFiles.forEach(function (v) {
			if (!files.includes(v)) return
			files = files.filter(function (k) {
			  return k != v
			})
	    })
		//遍历目录中的文件
		files.forEach((file) => {
			let src = path + '/' + file,
				build = dist + '/' + file,
				readable, writable;
			// 判断正在处理的 build 文件夹下每个到底是文件，还是目录
			fs.stat(src, (err, st) => {
				if (err) { throw err }

				if (st.isFile()) {
					readable = fs.createReadStream(src)
                    writable = fs.createWriteStream(build);  
                    readable.pipe(writable)
				}
			})
		})
	})
}
