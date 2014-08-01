---
date: 2014-08-02 02:19:00+00:00
layout: post
title: Sql2008安装出现配置节处理程序时出错
thread: 9
categories: 程序
tags: Sql
---

Sql server 2008忽然连接不上了，死活没办法，蛋碎之际，只好打算重装。

卸载是个很复杂的问题，此处省略一万字。

点击安装总提示：

```
“创建userSettings/Microsoft.SqlServer.Configuration.LanddingPage.Properies.Settings的配置节处理程序时出错：未能加载文件
或程序集“System, Version=4.0.0.0,Culture=neutral,  PublicKeyToken=b77a5a561934e089”或它的某一个依赖项。系统找不到指定的文件。”
```

经过查找还好解决了办法：

1. 由于先装了VS开发环境造成的，需要删除 C:\Users\username\AppData\Local\Microsoft_Corporation\LandingPage.exe_StrongName_ryspccglaxmt4nhllj5z3thycltsvyyx\10.0.0.0\user.config 来解决。

果然开始可以安装Sql server 2008.



