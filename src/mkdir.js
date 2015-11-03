var fs = require('fs');

/*
 * 创建项目目录
 * @param [name] { String } 目录路径或名称
 * @param [name] { Function } 创建之后执行的回调
 */
var createDir = function(name, msg, fn){
	fs.exists(name, function( exists ){
        //目录已存在
        if(exists){
            if (fn) fn();
        } else {
    		fs.mkdir(name, 0777, function(err){
				if (err) {
					console.log(err);
				} else {
					console.log(msg);

					if (fn) fn();
				}
			})

	    }
    });
}

//创建项目目录
exports.init = function(){
	console.log('开始创建项目目录')
	createDir('src', 'src   //开发目录\n|', function(){
		createDir('src/less', '|--less    //less文件资源目录\n|', function(){
			createDir('src/js', '|--js      //js  文件资源目录\n|', function(){
				createDir('src/images','|--images  //图片资源目录\n|', function(){
					createDir('src/dist', '|--dist    //测试发布目录\n|', function(){
						createDir('dist', 'dist  //正式环境发布目录\n|', function(){
							createDir('test', 'test  //测试目录\n|', function(){
								createDir('test/e2e', '|--e2e     //e2e测试目录\n|', function(){
									createDir('test/unit', '|--unit    //单元测试目录', function(){
										console.log('项目目录创建完毕');
									})
								})
							})
						})
					})
				})
			})
		})
	})
}
