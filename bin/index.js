#!/usr/bin/env node
'use strict';

let program = require('commander'),
	create = require('../src/create');

program
	.allowUnknownOption()
	.version('1.1.2')
	.option('init', 'Create Start')
	.parse(process.argv)

//接收init参数,开始创建项目
if (program.init){
	create.init();
}
