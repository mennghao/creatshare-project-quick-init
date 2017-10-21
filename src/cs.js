let create = require('./create'),
	path = __dirname + '/../dist',
	dist = process.cwd() + '/'

const helpGuide = () => {
	console.log('.')
	console.log('├── CreatShare-logo-powerby.png    # 实验室 Logo')
	console.log('├── LICENSE                        # 开源协议')
	console.log('├── README.md                      # 项目介绍')
	console.log('├── index.js                       # 项目入口')
	console.log('├── package.json                   # 项目配置')
	console.log('├── public                         # 公用资源目录')
	console.log('│   ├── favicon.ico                # 网页小图标')
	console.log('│   ├── index.html                 # 网页入口')
	console.log('│   └── manifest.json              # 网络应用清单')
	console.log('├── src                            # 开发目录')
	console.log('│   ├── app.js                     # 开发入口')
	console.log('│   ├── images                     # 图片资源目录')
	console.log('│   └── style                      # 样式资源目录')
	console.log('└── webpack.config.js              # 打包配置')
	console.log()
	console.log('5 directories, 10 files')
	console.log('\n项目目录创建完毕\n')
	console.log('注意事项：')
	console.log('1. 接下来请使用 npm install、 yarn add 或 cnpm install 命令安装依赖')
	console.log('2. 遇到使用问题可以发送邮件至 icorvoh@gmail.com')
}

/**
 * [运行 create 命令]
 * @return {[type]} [description]
 */
exports.create = (rootDir) => {
	console.log('\n项目目录开始创建\n')
	create.init(path, dist, rootDir)
	helpGuide()
}