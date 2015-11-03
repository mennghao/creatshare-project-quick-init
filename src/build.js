var fs = require('fs');


exports.init = function(path, dist){
	fs.readdir(path, function(err, files){
		if (err) { throw err; }
		
		files.forEach(function(file){
			var src = path + '/' + file,
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
