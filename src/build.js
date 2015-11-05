'use strict';

let fs = require('fs');

/**
 * [初始化静态资源]
 * @param  {[type]} path [初始化资源路径]
 * @param  {[type]} dist [description]
 * @return {[type]}      [description]
 */
exports.init = function(path, dist){
	fs.readdir(path, function(err, files){
		if (err) { throw err; }
		//遍历目录中的文件
		files.forEach(function(file){
			let src = path + '/' + file,
				build = dist + '/' + file,
				readable, writable;
			
			fs.stat(src, function(err, st){
				if (err) { throw err; }

				if (st.isFile()){
					readable = fs.createReadStream(src);
                    writable = fs.createWriteStream(build);   
                    readable.pipe(writable);
				}
			})
		})
	})
}	
