---
date: 2015-04-19 12:13:00+00:00
layout: post
title: MSSQL无日志处理的一种方式
thread: 29
categories: 技术
tags: Sql
---

全量备份数据库的两个文件的时候，突然发现Log文件一直在复制到720M的时候立即就报磁盘错误，以为是系统问题，遂切换到其它系统，甚至PE，居然依然这个错误，猜测Log可能被损坏。
这是一个很伤感的故事，数据库存了不少重要的资料。

1.生成数据脚本文件，发现单个文件居然1G多，拆分成单表sql脚本文件，依然比较大，MSSql Manage直接报内存不够，看来那么多数据，总不能一个个恢复吧。

2.尝试网站查找解决方案，“无日志文件恢复MSSQL数据”，发现千篇一律的一个文章：

譬如这篇：[传送门](http://blog.csdn.net/xiulamimi/article/details/8217055)

作者提供的方式，无非是这几行代码解决：
```sql
alter database dbName set emergency
alter database dbName set single_user
dbcc checkdb('dbName',REPAIR_ALLOW_DATA_LOSS)
dbcc checkdb('dbName',REPAIR_REBUILD)
alter database dbName set multi_user
```
尝试一番，确实可以打开数据库操作了，但是发现分离数据库再次附加，就会报同样的错误，治标不治本。
没办法，只好搜索“Attach mdf file without ldf file in MSSQL”，发现此文章：[传送门](http://blog.sqlauthority.com/2010/04/26/sql-server-attach-mdf-file-without-ldf-file-in-database/)

一老外给出了方案，

```sql
USE [master]
GO
-- Method 1: I use this method
EXEC sp_attach_single_file_db @dbname='TestDb',
@physname=N'C:\Program Files\Microsoft SQL Server\MSSQL10.MSSQLSERVER\MSSQL\DATA\TestDb.mdf'
GO
-- Method 2:
CREATE DATABASE TestDb ON
(FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL10.MSSQLSERVER\MSSQL\DATA\TestDb.mdf')
FOR ATTACH_REBUILD_LOG
GO
```

Method2果然解决了问题。
