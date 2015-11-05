'use strict';

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
exports.init = function(){
	console.log('开始创建项目目录');
	promise.then(createDir('src', 'src   //开发目录\n|'))
		   .then(createDir('src/less', '|--less    //less文件资源目录\n|'))
		   .then(createDir('src/js', '|--js      //js  文件资源目录\n|   |'))
		   .then(createDir('src/js/lib', '|   |--lib    //所需的库或框架文件存放目录\n|'))
		   .then(createDir('src/images','|--images  //图片资源目录\n|'))
		   .then(createDir('src/dist', '|--dist    //测试发布目录\n|'))
		   .then(createDir('dist', 'dist  //正式环境发布目录\n|'))
		   .then(createDir('test', 'test  //测试目录\n|'))
		   .then(createDir('test/e2e', '|--e2e     //e2e测试目录\n|'))
		   .then(createDir('test/unit', '|--unit    //单元测试目录\n项目目录创建完毕'))
}