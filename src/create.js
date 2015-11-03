var mkdir = require('./mkdir');
var build = require('./build');
var path = __dirname + '/../build';
var dist = process.cwd() + '/';

mkdir.init();
build.init(path, dist);
