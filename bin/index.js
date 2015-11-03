#!/usr/bin/env node
var program = require('commander');
var create = require('../src/create');

program
	.allowUnknownOption()
	.version('1.0.1')
	.option('init', 'Create Start')
	.parse(process.argv)

//接收init参数,开始创建项目
if (program.init){
	create.init();
}
