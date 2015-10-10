---
date: 2015-10-10 16:06:00+00:00
layout: post
title: React-Native for android的坑
thread: 35
categories: 技术
tags: React-Native
---

发布不久，尝试了一下，发现坑不少，姑且记录一下向导：



1.安装[nodejs](https://nodejs.org/en/)


2.安装[git](http://www.git-scm.com/download/)


3.clone react-native的项目:

```shell
git clone -b master https://github.com/facebook/react-native.git
```

如果被q就直接下master吧。


4.切换到react-native-cli目录中，安装react-native-cli

```shell
npm install -g
```


5.初始化AwesomeProject，貌似一个事例项目:

```shell
react-native init AwesomeProject
```

这里会下载项目和一些插件，需要耐心等待。


6.切换到react-native-cli\AwesomeProject\node_modules\react-native\packager\ 目录下，执行:

```
node packager.js
//或者在 react-native-cli\AwesomeProject 目录下执行 react-native start
```

发现报错，这个[gist](https://gist.github.com/mqli/e1e6576e9838d885a43a)可以帮你解决这些问题，如果你无法打开，下面是原文转载:


========
Few Line of Hack Code Make React-Native Run on Windows

While React-Native just add support of Android,yet officeally they just only support on OSX.

After a few hours of debugging, I find a simple way of let React-Native run on Windows.

Make sure all requirements were all setup following this:

Then initilize the project following this:

The react-native run-android should deploy the app into you phone or AVD

While using 'react-native start' to run the dev server you may get some error couse it runs a bash file, goto /node_modules/react-native/local-cli/run-package.js,and change it to

```javascript
'use strict';

var path = require('path');
var child_process = require('child_process');

module.exports = function(newWindow) {
  if (newWindow) {
    child_process.spawnSync('open', [
      path.resolve(__dirname, '..', 'packager', 'launchPackager.command')
    ]);
  } else {
    child_process.spawn('node', [
        path.resolve(__dirname, '..', 'packager', 'packager.js'),
        '--projectRoots',
        process.cwd(),
      ], {stdio: 'inherit'});
  }
};
```

Skip the bash and run the nodejs script instead.

Then the problem shows, fix it, already make a pull request https://github.com/facebook/react-native/issues/2787

Finally get A blank Activity,try adb logcat fetch the error log find out that, while the app load js from

ip:8081/index.android.bundle?platform=android Then get moudle load error.

Because some the moudle path be resolve as "path\\path\\package",and while the were define where "path\path\package".

Goto project\node_modules\react-native\packager\react-packager\src\DependencyResolver\index.js

```javascript
function defineModuleCode({moduleName, code, deps}) {
  deps = deps.replace(/\\\\/g,'\\');
  return [
    `__d(`,
    `'${moduleName}',`,
    `${deps},`,
    'function(global, require, module, exports) {',
    `  ${code}`,
    '\n});',
  ].join('');
}
```

Since the moudle system were a litte bit complicate, this may not be the best solution, and neet more test before a pull request,but I think it will get you play around.


============


两个问题修改之后这时再次执行 


```shell
node packager.js
```


就应该正常了。


图片


浏览

http://localhost:8081/index.android.bundle?platform=android

如果可以访问表示服务器端已经可以了，浏览器中访问时，刚才的命令行会显示进度。

打开http://localhost:8081/debugger-ui，可以下载浏览器调试插件。


7.下载[url=http://developer.android.com/sdk/index.html]android studio[/url] ,自带模拟器。
安装之。


8.打开Android Studio=>File=>New=>Import Project...

```shell
react-native-cli\AwesomeProject\android
```


9.调试，编译（注意手机要开启调试模式），这时会打开选择编译的程序是真机还是模拟器，如果已经插入真机，但是无法看到，应该是需要安装机器的驱动。


10.选择真机，apk文件会被安装到手机。


11.使用react-native编译.

在react-native-cli\AwesomeProject目录下，Git Bash执行

```shell
react-native run-android
```

确保6步骤中的js server未关闭，

```shell
JS Server already running.
Building and installing the app on the device(cd android && gradlew.bat install Debug)...
......
......
BUILD SUCCESSFUL
......
```

直到可以看到apk被安装到手机。

打开apk，红屏，错误界面。fuck....

这个[gist](https://gist.github.com/davidgilbertson/9bee68548037fe00f2a8)可以说明我目前遇到的情况，

这个问题已经被提到react-native的[issue](https://github.com/facebook/react-native/issues/2787#issuecomment-147048240)等待修正。


