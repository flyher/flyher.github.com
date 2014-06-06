$(document).ready(function () {
//    $(".div_app").hover(function () {
//        $("#tips").css("display", "");
//    });
//    $(".div_app").mouseout(function () { 
//        $("#tips").css("display", "");        
    //    });
    gettime();
});
$(function () {
 
    $().timelinr({
        autoPlay: 'true',
        autoPlayDirection: 'forward',
        startAt: 4
    })
});
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
	initapp("app1");
	initapp("app2");
	initapp("app3");
	initapp("app4");
	initapp("app5");
	initapp("app6");
	initapp("app7");	
	initapp("app20");	
}
function gettime() {
    var date = new Date();
    var time ="页面生成时间："+date.getFullYear().toString() + "-" +(parseInt(date.getMonth()) + 1).toString() + "-" + date.getDate().toString() + " " + date.getHours().toString() + ":" + date.getMinutes("00").toString();
    $("#div_time").html(time);
}