let fs = require('fs');

/**
 * [初始化静态资源]
 * @param  {[type]} path [初始化资源路径]
 * @param  {[type]} dist [description]
 * @return {[type]}      [description]
 */
exports.init = (path, dist) => {
	// path: build 目录
	// dist: 当前目录
	fs.readdir(path, (err, files) => {
		if (err) { throw err; }
		//遍历目录中的文件
		files.forEach((file) => {
			console.log(file)
			let src = path + '/' + file,
				build = dist + '/' + file,
				readable, writable;
			// 判断正在处理的 build 文件夹下每个到底是文件，还是目录
			fs.stat(src, (err, st) => {
				if (err) { throw err; }

				if (st.isFile()){
					readable = fs.createReadStream(src);
                    writable = fs.createWriteStream(build);   
                    readable.pipe(writable);
				}
			})
		})
	})
}
