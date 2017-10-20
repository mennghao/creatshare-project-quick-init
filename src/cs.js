'use strict';

let mkdir = require('./mkdir'),
    create = require('./create'),
	path = __dirname + '/../build',
	dist = process.cwd() + '/';

exports.create = () => {
	mkdir.init();
	// path: build 目录
	// dist: 当前目录
	create.init(path, dist);
}