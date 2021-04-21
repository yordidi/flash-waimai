(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(a,t,s){a.exports=s.p+"assets/img/admin.63a9b2f1.gif"},161:function(a,t,s){a.exports=s.p+"assets/img/mobile.31b556fd.gif"},185:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("ul",[e("li",[a._v("一个简单的外卖系统，包括手机端，后台管理，api")]),a._v(" "),e("li",[a._v("基于spring boot和vue的前后端分离的外卖系统")]),a._v(" "),e("li",[a._v("包含手机端，后台管理功能")]),a._v(" "),e("li",[a._v("本项目主要供交流学习，不建议商用。")])]),a._v(" "),e("h2",{attrs:{id:"技术选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[a._v("#")]),a._v(" 技术选型")]),a._v(" "),e("ul",[e("li",[a._v("核心框架：Spring Boot")]),a._v(" "),e("li",[a._v("数据库层：Spring data jpa/Spring data mongodb")]),a._v(" "),e("li",[a._v("数据库连接池：Druid")]),a._v(" "),e("li",[a._v("缓存：Ehcache")]),a._v(" "),e("li",[a._v("前端：Vue.js")]),a._v(" "),e("li",[a._v("数据库：mysql5.5以上,Mongodb4.0(不要使用最新版4.2)")])]),a._v(" "),e("h2",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[a._v("#")]),a._v(" 模块")]),a._v(" "),e("ul",[e("li",[a._v("flash-waimai-mobile 手机端站点")]),a._v(" "),e("li",[a._v("flash-waimai-manage后台管理系统")]),a._v(" "),e("li",[a._v("flash-waimai-api java接口服务")]),a._v(" "),e("li",[a._v("flash-waimai-core 底层核心模块")]),a._v(" "),e("li",[a._v("flash-waimai-generate 代码生成模块")])]),a._v(" "),e("h2",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),e("ul",[e("li",[a._v("数据存储采用了mysql和mongodb，其中基础管理配置功能数据使用mysql，业务数据使用mongodb存储。")]),a._v(" "),e("li",[a._v("创建mysql数据库")])]),a._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATABASE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("IF")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXISTS")]),a._v(" waimai "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DEFAULT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CHARSET")]),a._v(" utf8 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COLLATE")]),a._v(" utf8_general_ci"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("USER")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'waimai'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),a._v(" IDENTIFIED "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'waimai123'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GRANT")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ALL")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" waimai"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'waimai'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@'%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    flush "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("privileges")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("ul",[e("li",[a._v("mysql数据库创建好了之后，启动flash-waimai-api服务，会自动初始化数据，无需开发人员自己手动初始化数据")]),a._v(" "),e("li",[a._v("安装mongodb并创建数据库:flash-waimai\n使用mongorestore命令  导入mongodb数据,由于测试数据量较大，打包放在了百度云盘：链接：https://pan.baidu.com/s/1mfO7yckFL7lMb_O0BPsviw   提取码：apgd 下载后将文件解压到d:\\elm，如下命令导入数据：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mongorestore.exe -d flash-waimai d:\\\\elm\n")])])]),e("ul",[e("li",[e("p",[a._v("下载项目测试数据的图片（商家和食品图片）： 链接：https://pan.baidu.com/s/15uiA8hUCwdZv6Bycn1y_yg 提取码：cvas ，将图片存放到t_sys_cfg表中system.file.upload.path配置的目录下")])]),a._v(" "),e("li",[e("p",[a._v("启动管理平台:")]),a._v(" "),e("ul",[e("li",[a._v("进入flash-waimai-manage目录：")]),a._v(" "),e("li",[a._v("运行 npm install --registry=https://registry.npm.taobao.org")]),a._v(" "),e("li",[a._v("运行npm run dev")]),a._v(" "),e("li",[a._v("启动成功后访问 http://localhost:9528 ,登录，用户名密码:admin/admin")])])]),a._v(" "),e("li",[e("p",[a._v("启动手机端:")]),a._v(" "),e("ul",[e("li",[a._v("进入flash-waimai-mobile目录：")]),a._v(" "),e("li",[a._v("运行 npm install --registry=https://registry.npm.taobao.org")]),a._v(" "),e("li",[a._v("运行npm run local")]),a._v(" "),e("li",[a._v("启动成功后访问 http://localhost:8000")])])])]),a._v(" "),e("h2",{attrs:{id:"运行效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行效果图"}},[a._v("#")]),a._v(" 运行效果图")]),a._v(" "),e("ul",[e("li",[a._v("后台管理\n"),e("img",{attrs:{src:s(160),alt:"admin"}})]),a._v(" "),e("li",[a._v("手机端"),e("br"),a._v(" "),e("img",{attrs:{src:s(161),alt:"mobile"}})])]),a._v(" "),e("h2",{attrs:{id:"在线演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在线演示"}},[a._v("#")]),a._v(" 在线演示")]),a._v(" "),e("ul",[e("li",[a._v("查看演示系统请不要随意删除数据")]),a._v(" "),e("li",[a._v("后台管理："),e("a",{attrs:{href:"http://waimai-admin.microapp.store",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://waimai-admin.microapp.store"),e("OutboundLink")],1),a._v(" [服务器资源不足，暂停演示]")]),a._v(" "),e("li",[a._v("手机端:"),e("a",{attrs:{href:"http://waimai-mobile.microapp.store",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://waimai-mobile.microapp.store"),e("OutboundLink")],1),a._v(" [服务器资源不足，暂停演示]")]),a._v(" "),e("li")]),a._v(" "),e("h2",{attrs:{id:"开发进度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发进度"}},[a._v("#")]),a._v(" 开发进度")]),a._v(" "),e("ul",[e("li",[a._v("flash-waimai-manage [初步完成]")]),a._v(" "),e("li",[a._v("flash-waimai-mobile[完善中]")])]),a._v(" "),e("h2",{attrs:{id:"鸣谢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[a._v("#")]),a._v(" 鸣谢")]),a._v(" "),e("ul",[e("li",[a._v("感谢"),e("a",{attrs:{href:"https://github.com/bailicangdu",target:"_blank",rel:"noopener noreferrer"}},[a._v("bailicangdu"),e("OutboundLink")],1),a._v(","),e("a",{attrs:{href:"https://github.com/enilu",target:"_blank",rel:"noopener noreferrer"}},[a._v("enilu"),e("OutboundLink")],1),a._v(",本项目参考参考借鉴了"),e("a",{attrs:{href:"https://github.com/bailicangdu/vue2-elm",target:"_blank",rel:"noopener noreferrer"}},[a._v("vue2-elm"),e("OutboundLink")],1),a._v("，"),e("a",{attrs:{href:"https://github.com/enilu/web-flash",target:"_blank",rel:"noopener noreferrer"}},[a._v("web-flash"),e("OutboundLink")],1),a._v("，"),e("a",{attrs:{href:"https://github.com/bailicangdu/vue2-manage",target:"_blank",rel:"noopener noreferrer"}},[a._v("vue2-manage"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("开发过程遇到问题也可以多翻翻上述项目的issue，详细我，你遇到的问题，总有人比你更早遇到")])]),a._v(" "),e("h2",{attrs:{id:"交流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交流"}},[a._v("#")]),a._v(" 交流")]),a._v(" "),e("ul",[e("li",[a._v("qq群： 936439613；qq群仅为方便网友互相交流，作者基本不会在群里回复，如果需要跟作者提问题，可以通过项目主页提issue；qq群禁止发广告，发者立删")])]),a._v(" "),e("h1",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[a._v("#")]),a._v(" License")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/microapp-store/flash-waimai/blob/master/COPYING",target:"_blank",rel:"noopener noreferrer"}},[a._v("GPL"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);