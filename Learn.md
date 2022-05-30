2021.1.4
简介：一个完整的外卖系统，包括手机端，后台管理，api。基于spring boot和vue的前后端分离的外卖系统，包含完整的手机端，后台管理功能
技术栈：Spring Boot（核心框架） + Spring data jpa/Spring data mongodb（数据库层） + Druid（数据库连接池） + Ehcache（缓存） + Vue.js（前端）+ mysql5.5以上,Mongodb4.0(不要使用最新版4.2)（数据库）
git地址：https://github.com/microapp-store/flash-waimai
模块：
flash-waimai-mobile 手机端站点（Vue）
flash-waimai-manage后台管理系统（Vue）
flash-waimai-api java接口服务
flash-waimai-core 底层核心模块
flash-waimai-generate 代码生成模块

1、flash-waimai-api java接口服务
package cn.enilu.flash.api

1.1）ApiApplication.class 一个启动入口（依赖外部tomcat）
SpringBootServletInitializer 是什么？怎么用？看看这个 --- https://blog.csdn.net/lihaitao910215/article/details/105273586
1.2）utils包含api常量定义、session工具方法
1.3）runner/StartJob.class 定时器 	
Java异常之throws关键字用法介绍 ---  http://www.itheima.com/news/20191007/150507.html 
关联到service.Task.class
添加任务时用到了，java如何添加定时任务？
1.4）CommandLineRunner 口主要用于实现在应用初始化后，去执行一段代码块逻辑，这段初始化代码在整个应用生命周期内只会执行一次。初始化mongodb数据
1.5）interceptor/JwtFilter  jwt过滤
基于JWT的单点登录设计 ----- https://www.jianshu.com/p/6c4e1804653f
依赖顶级域名，如果没有统一的顶级域名，可以通过iframe传递消息。
传统的session保存在服务端，占用了内存。而jwt保存在客户端，释放了服务端的压力
1.6）controller。包括File、 Base、Account

2、flash-waima-core 底层核心模块
2.1）service层、Dao层、Dto层、AOP、Factory、wrapper、utils、security、cache、entity
