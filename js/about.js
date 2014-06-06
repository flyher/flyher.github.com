$(document).ready(function () {
//    $(".div_app").hover(function () {
//        $("#tips").css("display", "");
//    });
//    $(".div_app").mouseout(function () { 
//        $("#tips").css("display", "");        
    //    });
    gettime();
});
/*
$(function () {
    $().timelinr({
        autoPlay: 'true',
        autoPlayDirection: 'forward',
        startAt: 4
    })
});*/
var rDrag = {
	//o:null,
	init:function(o){
		o.onmousedown = this.start;
	},
	start:function(e){
		var o;
		e = rDrag.fixEvent(e);
               e.preventDefault && e.preventDefault();
               rDrag.o = o = this;
		o.x = e.clientX - rDrag.o.offsetLeft;
                o.y = e.clientY - rDrag.o.offsetTop;
		document.onmousemove = rDrag.move;
		document.onmouseup = rDrag.end;
	},
	move:function(e){
		e = rDrag.fixEvent(e);
		var oLeft,oTop;
		oLeft = e.clientX - rDrag.o.x;
		oTop = e.clientY - rDrag.o.y;
		rDrag.o.style.left = oLeft + 'px';
		rDrag.o.style.top = oTop + 'px';
	},
	end:function(e){
		e = rDrag.fixEvent(e);
		rDrag.o = document.onmousemove = document.onmouseup = null;
	},
    fixEvent: function(e){
        if (!e) {
            e = window.event;
            e.target = e.srcElement;
            e.layerX = e.offsetX;
            e.layerY = e.offsetY;
        }
        return e;
    }
}
function initapp(divid){
	var obj=null;
	obj=document.getElementById(divid);
    rDrag.init(obj);	
}

window.onload = function () {
    /*initapp("app1");
    initapp("app2");
    initapp("app3");
    initapp("app4");
    initapp("app5");
    initapp("app6");
    initapp("app7");
    initapp("app20");*/
    /*输出我的信息*/
    var me = {};
    me.name = "董家迪";
    me.phone = "185 2159 2798";
    me.email = "dong3580@163.com";
    me.location = "上海外高桥保税区";
    me.web = "http://www.flyher.net";

    console.error("出现错误要么是用了IE，要么就是JS统计和JS留言板网络问题。");

    console.group("求带走");
    console.log("姓名：" + me.name);
    console.log("电话：" + me.phone);
    console.log("电子邮件：" + me.email);
    console.log("所在地：" + me.location);
    console.log("个人主页：" + me.web);
    console.groupEnd();

    console.group("目前情况");
    console.log("熟悉");
    console.log("类型：C#，ASP.NET，VB.NET，JS，JQuery，Html+Div，Ajax");
    console.log("数据库:Oracle，MS SQL");
    console.log("  ");
    console.log("以前做过或玩过：");
    console.log("类型: ASP，WebService，Python，.NET MVC3，.NET WPF");
    console.log("数据库：MS Access，Sqlite，MySQL");
    console.log("  ");
    console.log("不会：");
    console.log("类型：WCF，PhotoShop");
    console.groupEnd();

    console.group("可接受");
    console.log("(1)学习新的语言;");
    console.log("(2)办公室有老鼠等动物;");
    console.groupEnd();

    console.group("外语能力");
    console.log("过了四级，可以阅读普通的文档，英文交流有障碍。");
    console.groupEnd();

    console.group("不喜欢");
    console.log("(1)太过繁琐复杂的面试流程;");
    console.log("(2)外包公司；");
    console.groupEnd();

    console.group("求职意向");
    console.log("(1)基于.NET的 ERP/网站 等开发;");
    console.log("(2)前端是个不错的选择，不会PS可以收留么;");
    console.groupEnd();

    console.group("薪资要求");
    console.log("(1)不低于目前的有竞争力的薪资，诶，要找妹子没办法;");
    console.log("(2)五险一金;");
    console.groupEnd();

    console.group("其它我的资料");
    console.log("工作经验：http://flyher.github.io/timeline.html");
    console.log("我的博客：http://www.flyher.net(近期一些众所周知的原因，博客可能访问不稳定)");
    console.log("Word简历：中文版 http://flyher.github.io/doc/jlzh-cn.doc");
    console.log("Word简历：英文版(蹩脚) http://flyher.github.io/doc/jlen.doc");
    console.log("Github开源项目:https://github.com/flyher")
    console.groupEnd();

}
function gettime() {
    var date = new Date();
    var time ="页面生成时间："+date.getFullYear().toString() + "-" +(parseInt(date.getMonth()) + 1).toString() + "-" + date.getDate().toString() + " " + date.getHours().toString() + ":" + date.getMinutes("00").toString();
    $("#div_time").html(time);
}