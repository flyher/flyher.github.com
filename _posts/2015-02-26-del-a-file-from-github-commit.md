---
date: 2015-02-26 10:27:00+00:00
layout: post
title: 时光
thread: 27
categories: 技术
tags: Git
---

从所有的Git提交中删除一个文件

```shell
$ git filter-branch --tree-filter 'rm -f passwords.txt' HEAD
```

from [here](http://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)

