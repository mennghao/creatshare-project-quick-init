let fs = require('fs');

/**
 * [创建项目目录]
 * @param  {[type]} name [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
let createDir = (name, msg) => {
	fs.exists(name, (exists) => {
		//目录已存在
		if (!exists) {
			fs.mkdirSync(name, '0755');
			console.log(msg);
		}
	})
}

let promise = new Promise((resolve, reject) => {
	resolve();
});

/**
 * [创建项目目录]
 * @return {[type]} [description]
 */
(doCreate = () => {
	console.log
	promise
		   .then(createDir('dist',       '├── dist        # 正式环境发布目录'))
		   .then(createDir('public',     '├── public      # 公用资源目录'))
		   .then(createDir('spec',       '├── spec        # 测试目录'))
		   .then(createDir('src',        '└── src         # 开发目录'))
		   .then(createDir('src/images', '    ├── images  # 图片资源目录'))
		   .then(createDir('src/style',  '    └── style   # 样式文件资源目录\n\n项目目录创建完毕'))
})()

/**
 * [初始化静态资源]
 * @param  {[type]} path [初始化资源路径]
 * @param  {[type]} dist [description]
 * @return {[type]}      [description]
 */
exports.run = (path, dist) => {
	// path: build 目录
	// dist: 当前目录
	fs.readdir(path, (err, files) => {
		if (err) { throw err; }
		//遍历目录中的文件
		files.forEach((file) => {
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
