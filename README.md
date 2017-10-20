# creatshare-project-quick-init

[![](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/creatshare-project-quick-init) [![](https://img.shields.io/npm/l/express.svg)](https://github.com/creatshare-demos/creatshare-project-quick-init/blob/master/LICENSE)

CreatShare 互联网实验室前端项目初始化工具

## 新版本正在更新

CreatShare 前端组正在对此项目进行更新，当前进度如下：

- [ ] public 目录生成时不会生成其下的文件
- [ ] cs 命令构建出的项目要能运行最小化 Web App 应用
- [ ] cs 命令参数用来生成新的项目目录而非在当前目录下生成相关文件

## 安装

```
➜  npm install -g creatshare-project-quick-init
```

或

```
➜  yarn global add creatshare-project-quick-init
```

## 运行

```
➜  cs create <project-name> # 使用 cs 脚手架快速创建一个最小化 Web App 项目
```

说明如下

* 执行 ```cs creatshare <APPNAME>``` 脚手架命令之后，Web App 项目结构已经生成。
* 进入 ```<APPNAME>``` 目录进行 ```npm install``` 或 ```yarn``` 来安装项目所需依赖。
* 依赖安装之后，输入 ```npm start``` 或 ```yarn start``` 创建一个本地 server, 并自动打开浏览器，实时预览。

```
➜  cs -V # --version  # 查看 cs 版本号
➜  cs -e # --enjoy    # 尽情的享受 cs 脚手架吧
➜  cs -h # --help     # 打印 cs 帮助手册
```

## 结构

该项目结构如下

```
.
├── LICENSE         # 开源协议
├── README.md       # 项目介绍
├── bin             # cs 命令主目录
│   └── index.js    # cs 命令引导文件
├── build           # cs create 命令参考的模板
├── package.json    # 项目配置
├── src             # cs 命令依赖的源代码
│   ├── create.js   # cs create 命令源码
│   └── cs.js       # cs 命令源码入口文件
└── yarn.lock       # yarn 包管理器依赖说明
```

```cs``` 命令复制 build 文件夹的内容，生成的项目结构如下

```
.
├── .eslint.js           # JavaScript 代码规范
├── .gitignore           # Git 忽略特殊文件
├── README.md            # 项目介绍
├── build                # 项目源码打包目录
├── dist                 # 正式环境发布目录
├── index.js             # 项目入口文件
├── package.json         # 项目配置文件
├── public               # 公用资源目录
│   ├── favicon.ico      # 网页图标
│   ├── index.html       # 项目主页
│   └── manifest.json    # 网络应用清单
└── src                  # 开发目录
    ├── images           # 图片资源目录
    └── style            # 样式文件资源目录
```

## 备注(暂存问题)

- [ ] 目录由于是异步生成，偶尔会出现与异步相关的 bug

# 开源协议

[MIT LICENSE](./LICENSE)

# CreatShare 互联网实验室

![CreatShare-logo-powerby.png](./CreatShare-logo-powerby.png)