'use strict';

let create = require('./create'),
	path = __dirname + '/../build',
	dist = process.cwd() + '/';

/**
 * [运行 create 命令]
 * @return {[type]} [description]
 */
exports.create = () => {
	create.run(path, dist);
}