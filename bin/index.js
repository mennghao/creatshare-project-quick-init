#!/usr/bin/env node
var program = require('commander');

program
	.allowUnknownOption()
	.version('1.0.0')
	.option('init', 'Create Start')
	.parse(process.argv)

//接收init参数，开始创建项目
if (program.init){
	console.log(1)
}
