'use strict';

let mkdir = require('./mkdir'),
	build = require('./build'),
	path = __dirname + '/../build',
	dist = process.cwd() + '/';

exports.create = () => {
	mkdir.init();
	build.init(path, dist);
}

exports.share = () => {
	mkdir.init();
	build.init(path, dist);
}