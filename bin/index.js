let program = require('commander'),
	cs = require('../src/cs')

program
	.allowUnknownOption()
	.version('2.0.0')
	.description('The scaffold of CreatShare`s front-end project')
	.option('-e, --enjoy')

program
   .command('create <dir>')
   .description('create a new web app project')
   .action(function(dir) {
	   cs.create()
   })

program.parse(process.argv)