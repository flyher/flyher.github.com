---
date: 2014-11-30 23:35:00+00:00
layout: post
title: 人人影视奇怪的JS跳转
thread: 23
categories: 技术
tags: JS+JQuery
---

看到网上有人说http://www.rrys123.com/是人人影视的新域名，访问了一下，然后就是每次打开yyets.com都会重定向到这个地址。然后发现，在电脑的上所有浏览器中访问人人影视都会自动跳转到该地址。猜测自己中招了：

查看了请求头信息：

1.页面首先Get请求yyets.com地址，提示502Bad Gateway.

2.然后页面继续请求www.yyets.com地址，提示301 Moved Permanaently.

这一步返回的html中发现了大量的www.rrys123.com。

3.然后就出现调到了www.rrys123.com

并没有在请求头中发现什么异常，于是看了看第2步的js代码，无意中在地址：

http://js.rrsub.net/js/yyets.js?t=20140612

发现了倒数几个正则重定向代码：

```js
......
$.cookie(d,e,{expires:12,path:"/"})}};
$.fn.ctrl_enter=function(a){
  $(this).keypress(function(b){
  if(b.ctrlKey&&(b.which==13||b.which==10)){
    if(typeof a=="function"){
       a.call(this)
    }else{
       $(this).parents("form").submit()
    }
  }
});
return this};
var host_regx=/(\.yyets\.com)|(\.rrys\.tv)|(\.rrys123\.com)|(\.rrsub.com)$/i;
if(window.location.host.search(host_regx)<1&&window.location.host!="yyets.com"){
  $("title").text("");
  alert("\u4EBA\u4EBA\u5F71\u8996\u4E2D\u570B\u5730\u5340\u7DB2\u7AD9\u6B63\u5F0F\u95DC\u9589\uFF01\u8ACB\u4E0D\u8981\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u507D\u9020\u4EBA\u4EBA\u5F71\u8996\u7DB2\u7AD9\u3002\u6211\u5011\u7684\u552F\u4E00\u7DB2\u5740\u662F\uFF1Awww.yyets.com\uFF0C\u611F\u8C22\u4F60\u7684\u652F\u6301\uFF01");
window.location.href="http://www.baidu.com"
};
```
页面可能会被重定向到：

```html
yyets.com
rrys.tv
rrys123.com
rrsub.com
```

这是件很奇怪的事情，不知道剩下的几个地址，是不是第三方刻意制造的地址。

人人影视在国内站上提示到：

```html
人人并没有启用其它域名，并且没有任何app，所有其它的地址都是仿冒的。
```

在贴吧，各大公开讨论的场所，官方都避免www.rrys123.com页面的问题，于是ping了一下该地址：

```shell
正在 Ping www.rrys123.com [116.251.210.221] 具有 32 字节的数据:
来自 116.251.210.221 的回复: 字节=32 时间=64ms TTL=48
来自 116.251.210.221 的回复: 字节=32 时间=92ms TTL=48
来自 116.251.210.221 的回复: 字节=32 时间=64ms TTL=48
来自 116.251.210.221 的回复: 字节=32 时间=64ms TTL=48
```

用dig ping 出的结果中：

```shell
116.251.208.81
116.251.210.221
116.251.210.225
116.251.210.245
116.251.210.44
116.251.210.52
116.251.210.58
116.251.210.98
116.251.211.103
118.130.42.252
210.92.18.2
27.221.43.48
27.255.82.19
```

包括116.251.210.221，捏了一把汗。

同时，人人影视贴吧有关 rrys123.com 帖子也被及时清理，可见此地址为人人影视的最新地址。

![yyets-strange-redirect-js](../assets/img/2014113001.jpg)



