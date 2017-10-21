'use strict';

let create = require('./create'),
	path = __dirname + '/../build',
	dist = process.cwd() + '/'

/**
 * [运行 create 命令]
 * @return {[type]} [description]
 */
exports.create = () => {
	create.init(path, dist)
	console.log("项目目录创建完毕")
	// ['build',      '\n.\n├── build         # 项目发布包目录'],
	// ['public',     '├── public         # 公用资源目录'],
	// ['src',        '└── src            # 开发目录'],
	// ['src/images', '    ├── images     # 图片资源目录'],
	// ['src/style',  '    └── style      # 样式文件资源目录\n\n项目目录创建完毕']
}