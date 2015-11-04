var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify-css'),
	server = require('gulp-server-livereload'),
	sourcemaps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	htmlreplace = require('gulp-html-replace');

//打包压缩css至测试目录
gulp.task('test-bundle-css', function(){
	return gulp.src('src/less/*.less')
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(less())
		.pipe(concat('style.css'))
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(minify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('src/dist/static/css/'))
})
//打包压缩js至测试目录
gulp.task('test-bundle-js', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('app.js'))
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('src/dist/static/js/'))
})
//转移图片资源至测试目录
gulp.task('test-move-imgs', function(){
	return gulp.src('src/imgs/*')
		.pipe(gulp.dest('src/dist/static/imgs/'))
})
//server
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      	livereload: {
	        enable: true,
	        filter: function(filePath, cb) {
	            cb( !(/node_modules/.test(filePath)) );
	        }
	    },
      	open: true
    }));
})
//测试编译
gulp.task('default', ['test-bundle-css', 'test-bundle-js', 'test-move-imgs', 'webserver'],function(){
	gulp.watch('src/less/*.less', ['test-bundle-css']);
	gulp.watch('src/js/*.js', ['test-bundle-js']);
	gulp.watch('src/imgs/*', ['test-move-imgs']);
})



//打包css至发布目录
gulp.task('dist-bundle-css', function(){
	return gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(concat('style.css'))
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(minify())
		.pipe(gulp.dest('dist/static/css/'))
})
//打包js至发布目录
gulp.task('dist-bundle-js', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('app.js'))
		.pipe(rename({
			suffix : '.min'
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/static/js/'))
})
//转移图片资源至发布目录
gulp.task('dist-move-imgs', function(){
	return gulp.src('src/imgs/*')
		.pipe(gulp.dest('dist/static/imgs/'))
})
//正式环境
gulp.task('dist', ['dist-bundle-css', 'dist-bundle-js', 'dist-move-imgs'], function(){
	
	var time = +new Date();
	
	return gulp.src('./*.html')
		.pipe(htmlreplace({
			'css' : 'static/css/style.min.css?v=' + time,
			'js' : 'static/js/app.min.js?v=' + time
		}))
		.pipe(gulp.dest('dist/'))

})
