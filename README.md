# creatshare-project-quick-init
[![](https://img.shields.io/npm/v/creatshare-project-quick-init.svg?style=flat-square)](https://www.npmjs.com/package/creatshare-project-quick-init) [![](https://img.shields.io/npm/dt/creatshare-project-quick-init.svg?style=flat-square)](https://www.npmjs.com/package/creatshare-project-quick-init) [![](https://img.shields.io/github/license/mennghao/creatshare-project-quick-init.svg?style=flat-square)](https://github.com/mennghao/creatshare-project-quick-init/blob/master/LICENSE)

实验室项目初始化工具
## 安装
```
➜  sudo npm install -g creatshare-project-quick-init
```

```
➜  cs init
```
上面的命令可以在当前目录快速创建一个项目的结构

```
➜  cs --version
```
查看版本号
## 说明
项目结构如下

```
dist  //发布目录，用于生产环境
|
src   //开发目录，开发时所需资源
|
|----dist  //测试环境目录
|     |
|     |----css  //编译打包后的css资源
|     |
|     |----js   //打包压缩后的js资源
|     |
|     |----imgs //测试环境图片资源
|
|----less  //开发所需less代码
|
|----js    //开发所需js代码
|    |
|    |----lib //库或框架资源
|
|----imgs  //开发所需图片资源
|
index.html    //开发页面
|
gulpfile.js
|
package.json
|
README.md
```

## 开发环境
执行```cs init```之后，基础项目目录已经生成

```npm install``` 安装项目所需依赖
```npm start```   创建一个本地server, 并自动打开浏览器，实时预览

## 线上部署
```npm install``` 安装项目依赖
```gulp dist``` 部署所有资源至dist目录，dist目录为生产目录

