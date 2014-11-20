---
date: 2014-11-11 22:41:00+00:00
layout: post
title: 原来路由设置这么好玩
thread: 21
categories: 技术
tags: .NET
---

    之前用.NET MVC，唯一爽的就是自己写方法和视图，自由角度比较大，而且部署之后在服务器上的虚拟路径甚至可以动态决定。好处：单看网站，无法找出网站的目录情况；坏处：谷歌爬虫收录起来就惨了。
    
	最近要做Outh2服务端，突然发现，路由原来能够直接更改网站部署后的虚拟路径格式，这样，Api版本控制起来就爽了。

    在Global.asax添加路由控制：

```C#
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default", // 路由名称
                "{controller}/{action}/{id}", // 带有参数的 URL
                new { controller = "Home", action = "Index", id = UrlParameter.Optional } // 参数默认值
            );

        }
```

检查名字的 API的访问路径就为：
```html
http://xxx.com/user/checkname
```
更新到第二个版本的时候，只需要将路由更改了：
```C#
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default", // 路由名称
                "v2/{controller}/{action}/{id}", // 带有参数的 URL
                new { controller = "Home", action = "Index", id = UrlParameter.Optional } // 参数默认值
            );

        }
```
API路径就变成了：
```html
http://xxx.com/v2/user/checkname
```
对于并存多个版本的API太爽了。

![route-in-net-mvc](../assets/img/2014112001.jpg)
