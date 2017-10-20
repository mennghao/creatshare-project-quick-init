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
exports.init = () => {
	console.log('开始创建项目目录');
	promise.then(createDir('src',        '├── src         # 开发目录\n'))
		   .then(createDir('src/style',  '│   └── style   # 样式文件资源目录\n'))
		   .then(createDir('src/images', '├── images      # 图片资源目录\n'))
		   .then(createDir('dist',       '├── dist        # 正式环境发布目录\n'))
		   .then(createDir('public',     '├── public      # 公用资源目录\n'))
		   .then(createDir('spec',       '├── spec        # 测试目录\n项目目录创建完毕'))
}