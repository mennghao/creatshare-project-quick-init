'use strict';

let mkdir = require('./mkdir'),
	build = require('./build'),
	path = __dirname + '/../build',
	dist = process.cwd() + '/';

exports.init = () => {
	mkdir.init();
	build.init(path, dist);
}