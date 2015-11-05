'use strict';

let mkdir = require('./mkdir'),
	build = require('./build'),
	path = __dirname + '/../build',
	dist = process.cwd() + '/';

exports.init = function(){
	mkdir.init();
	build.init(path, dist);
}