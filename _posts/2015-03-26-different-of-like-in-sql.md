---
date: 2015-03-26 05:38:00+00:00
layout: post
title: like查询在数据库中的不同
thread: 28
categories: 技术
tags: Sql
---

将某个MSSql的like语句调整到MySql上，

```sql
Select UserName,Email from UserInfo where UserName like '%'+@Keywords+'%' or Email like '%'+@Keywords+'%'
```

查询语句一直报错，尝试更改为：

```sql
Select UserName,Email from UserInfo where UserName like '%@Keywords%' or Email like '%@Keywords%'
```

结果发现不报错了，但是参数KeyWords没有被替换成值，查了一下资料，居然发现MySql的和Oracle/MSSql的一些不同：
“mssql是用+号拼接，oracle是用||拼接，mysql就是concat(var1,var2,.....)拼接”
于是改为：

```sql
Select UserName,Email from UserInfo where UserName like concat('%',@Keywords,'%') or Email like concat('%',@Keywords,'%')
```