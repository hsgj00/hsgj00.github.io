// JavaScript Document
//换三角方向
$(".t3").mouseenter(function(){
	$("#san").css("background-position","-311px -832px")
	})
$(".t3").mouseleave(function(){
	$("#san").css("background-position","-276px -832px")
	})
$("#rg1").mouseenter(function(){
	$("#san").css("background-position","-311px -832px")
	})
$("#rg1").mouseleave(function(){
	$("#san").css("background-position","-276px -832px")
	})
			
//窗帘
 $("#lian,#clo").slideDown(1000);
$("#clo").click(function(){
	$("#lian").slideUp(1000);
	$("#clo").css("display","none")
	})
// 头部input 框	
$("#text2").click(function(){
	$("#text1").css({"background-color":"white","color":"gray"})
	$("#text2").css({"background-color":"orange","color":"white"})
	$("#iup").val("")
	})	
$("#text1").click(function(){
	$("#text2").css({"background-color":"white","color":"gray"})
	$("#text1").css({"background-color":"orange","color":"white"})
	$("#iup").val("不限量套餐")
	})	
$("#iup").click(function(){
	$("#iup").val("")
	})
$("#iup").blur(function(){
	$("#iup").val("不限量套餐")
	})	
	
	// 江西
$(".beijing").click(function(){
		var a = $(this).html();
		$("#choo").html(a);
		})	
$("#cho").mouseenter(function(){
	$("#chox").css("display","block")
		})	
$("#cho").mouseleave(function(){
	$("#chox").css("display","none")
		})	
$("#chox").mouseenter(function(){
	$("#chox").css("display","block")
		})	
$("#chox").mouseleave(function(){
	$("#chox").css("display","none")
	})	

$(".b").mouseenter(function(){
	$(".nav_2img").css("display","block")
	})	
// 轮播1
/*var i = 0;  // 定义一个变量
var tt = setInterval("showdown()",10)  //  调用周期定时器
function showdown(){
	i++;
	$("#rlb").scrollTop(i)
	if(i>76){
		clearInterval(tt);
		setTimeout("star()",3000)
		}
	}
function star(){
	tt = setInterval("showup()",10)
	}
function showup(){
	i--;
	$("#rlb").scrollTop(i)
	if(i<0){
		clearInterval(tt);
		setTimeout("star2()",3000)
		}
	}	
function star2(){
	tt = setInterval("showdown()",10)
	}*/
//鼠标移入
function show(){
		$("#rlb_1").animate({
			top:"-76px"	
		},500).delay(2500).animate({
			top:"0px"	
		},500).delay(2500);
	}
	show();
	var timer = setInterval(show,6000);
	//鼠标移入停止
	$("#rlb_1").bind("mouseenter",function(){
		clearInterval(timer);
		//清空对象上尚未执行的所有队列
		$("#rlb_1").clearQueue();
		
		
	});
	//鼠标移出启动
	$("#rlb_1").bind("mouseleave",function(){
		
		timer = setInterval(show,6000)
	});
	

// 轮播2
	
	var j = 0
	var dd= setInterval("showDown()",100)
function showDown(){
	j++;
	$("#wen").scrollTop(j);
	if(j==40){
		clearInterval(dd);
		setTimeout("fn()",5000)
		}else if(j==80){
			j=0;
			clearInterval(dd);
			setTimeout("fn()",5000);
			}
	}	
function fn(){
	dd = setInterval("showDown()",100)
	}


// 轮播3

	/*
	1.图片自动切换（定时器），当切换到最后一张的时候 回到第一张  切换的同时，下方对应的按钮背景变为白色
	2.鼠标移入图片停止切换，移出图片继续切换；
	3.点按钮时图片切换到相对应的图片
	*/
// 声明一个数组保存图片路径
var imgs = ["2/lun1.jpg","2/lun2.jpg","2/lun3.jpg","2/lun4.jpg","2/lun5.jpg","2/lun6.jpg"]	
	
$("#pic").attr("src",imgs[0])	            
var ll = setInterval("changeimg()",2000)
var k = 1
function changeimg(){
	if(k>=imgs.length){
		k=0
		}
	$("#pic").attr("src",imgs[k]);
	$("#ban li").css("background-color","");  // 清除所有的点的背景颜色
	$("#ban li").eq(k).css("background-color","white")//  点随图片变化
	k++;
	}
$("#ban").mouseenter(function(){
	clearInterval(ll); 
	})
$("#ban").mouseleave(function(){
	ll = setInterval("changeimg()",2000);
	})
$("#ban li").click(function(){
	clearInterval(ll);
	var index = $(this).attr("liu");
	$("#pic").attr("src",imgs[index]);
	$("#ban li").css("background-color","");
	$(this).css("background-color","white")
	})
// 全部产品及服务
$("#big_l1").mouseenter(function(){
	$("#big_l1a").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-5px -95px")	
	})
$("#big_l1").mouseleave(function(){
	$("#big_l1a").css("display","none")
	$(this).css("background-position","-5px -40px")
	})
$("#big_l1a").mouseenter(function(){
	$("#big_l1a").css("display","block")
	})
$("#big_l1a").mouseleave(function(){
	$("#big_l1a").css("display","none")
	})
	
$("#big_l2").mouseenter(function(){
	$("#big_a2").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-5px -100px")
	})
$("#big_l2").mouseleave(function(){
	$("#big_a2").css("display","none");
	$(this).css("background-position","-5px -150px")
	})	
$("#big_a2").mouseenter(function(){
	$("#big_a2").css("display","block")
	})	
$("#big_a2").mouseleave(function(){
	$("#big_a2").css("display","none")
	})	
	
$("#big_l3").mouseenter(function(){
	$(".big_b3").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-1px -212px")
	})
$("#big_l3").mouseleave(function(){
	$(".big_b3").css("display","none")
	$(this).css("background-position","-1px -262px")
	})
$(".big_b3").mouseenter(function(){
	$(".big_b3").css("display","block")
	})		
$(".big_b3").mouseleave(function(){
	$(".big_b3").css("display","none")
	})	
	
$("#big_l4").mouseenter(function(){
	$("#big_c4").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-1px -322px")
	})
$("#big_l4").mouseleave(function(){
	$("#big_c4").css("display","none")
	$(this).css("background-position","-1px -372px")
	})
$("#big_c4").mouseenter(function(){
	$("#big_c4").css("display","block")
	})	
$("#big_c4").mouseleave(function(){
	$("#big_c4").css("display","none")
	})	
	
$("#big_l5").mouseenter(function(){
	$("#big_d5").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-1px -433px")
	})	
$("#big_l5").mouseleave(function(){
	$("#big_d5").css("display","none")
	$(this).css("background-position","-1px -483px")
	})	
$("#big_d5").mouseenter(function(){
	$("#big_d5").css("display","block")
	})	
$("#big_d5").mouseleave(function(){
	$("#big_d5").css("display","none")
	})	
	
$("#big_l6").mouseenter(function(){
	$("#big_e6").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-1px -543px")
	})		
$("#big_l6").mouseleave(function(){
	$("#big_e6").css("display","none");
	$(this).css("background-position","-1px -593px");
	})		
$("#big_e6").mouseenter(function(){
	$("#big_e6").css("display","block")
	})  
$("#big_e6").mouseleave(function(){
	$("#big_e6").css("display","none")
$("#big_f7").mouseenter(function(){
	}) 
	
$("#big_l7").mouseenter(function(){
	$("#big_f7").css({"display":"block","box-shadow":"5px 5px 5px gray"});
	$(this).css("background-position","-1px -655px")
	})		
$("#big_l7").mouseleave(function(){
	$("#big_f7").css("display","none");
	$(this).css("background-position","-1px -705px")
	})		
	$("#big_f7").css("display","block")
	})	 
$("#big_f7").mouseleave(function(){
	$("#big_f7").css("display","none")
	})	 
	
// 欢享服务 超值购
$("#rtr").mouseenter(function(){
	$("#rtl_2").css("color","gray")
	$("#rtl_1").css("background-position","-230px -254px")
	$("#rtr_1").css("background-position","-230px -324px")
	$("#rtr_2").css("color","orange")
	$("#rM").css("display","none")
	$("#rX").css("display","block")
	})	
$("#rtl").mouseenter(function(){
	$("#rtl_2").css("color","orange")
	$("#rtl_1").css("background-position","-230px -216px")
	$("#rtr_1").css("background-position","-230px -288px")
	$("#rtr_2").css("color","gray")
	$("#rM").css("display","block")
	$("#rX").css("display","none")
	})	
 
// 手机 流量 宽带 固话  切换字体颜色
 $("#r_ulb").click(function(){
	$(this).css("color","orange");
	$("#r_ula").css("color","gray");
	$("#r_ulc").css("color","gray");
	$("#r_uld").css("color","gray");
	 })
 $("#r_ula").click(function(){
	$(this).css("color","orange");
	$("#r_ulb").css("color","gray");
	$("#r_ulc").css("color","gray");
	$("#r_uld").css("color","gray");
	 })
 $("#r_ulc").click(function(){
	$(this).css("color","orange");
	$("#r_ula").css("color","gray");
	$("#r_ulb").css("color","gray");
	$("#r_uld").css("color","gray");
	 })
 $("#r_uld").click(function(){
	$(this).css("color","orange");
	$("#r_ula").css("color","gray");
	$("#r_ulc").css("color","gray");
	$("#r_ulb").css("color","gray");
	 })
	 
	 
	var flag = true;
	var  h = 0; 
$("#rmz").click(function(){
	if(flag){
		h+=230;
		$("#rM,#rX").scrollLeft(h);
		flag=false;
    }
	else{
		h=0;
		$("#rM,#rX").scrollLeft(h);
		flag=true;
	}	
})	
$("#rmy").click(function(){
	if(flag){
		h+=230;
		$("#rM,#rX").scrollLeft(h);
		flag=false;
    }
	else{
		h=0;
		$("#rM,#rX").scrollLeft(h);
		flag=true;
	}	
})	
//  公告星级服务 
var m = 0 ;
var pp = setInterval("lun()",70)	
function lun(){
	m++;
	if(m==450){
		m=0
		}
	$("#ggr").scrollLeft(m);
	
	}
//公告字体图标变色
$("#gg").mouseenter(function(){
	$("#ggimg").css("background-position","-223px -630px")
	$("#ggtext").css({"color":"orange","cursor":"pointer"})
	})	
$("#gg").mouseleave(function(){
	$("#ggimg").css("background-position","-283px -630px")
	$("#ggtext").css("color","gray")
	})	
$("#ggr").mouseenter(function(){
	clearInterval(pp);
	})	
$("#ggr").mouseleave(function(){
	pp= setInterval("lun()",70);
	})	
	// 轮播last
var n = 0;
var qq = setInterval("fun()",1)	
	function fun(){
		n+=2;
		$("#mlunz").scrollLeft(n);
		//  返回第一张
		if(n==3018){
			n=0;
		}
		// 到第一张  停2s
		if(n%1006==0){
			clearInterval(qq);
			qq = setTimeout("sta()",8000)
		}	
	}
	function sta(){
		clearInterval(qq);
		qq = setInterval("fun()",1)
		}
		// 图片向右的函数
	function fun2(){
		n-=2;
		$("#mlunz").scrollLeft(n);
		if(n%1006==0){
			clearInterval(qq);
			qq = setTimeout("sta()",8000)
		}
		if(n<0){
			n=3018;
			}			
	}
	// 点击向左
	function goLeft(){
		clearInterval(qq);
		qq = setInterval("fun2()",1)
	}
	
	function goRight(){
		clearInterval(qq);
		qq = setInterval("fun()",1)
	}
/*$(".mlunt_1img").mouseenter(function(){
	$(this).css("box-shadow","10px 10px 5px gray")
	})	
$(".mlunt_1img").mouseleave(function(){
	$(this).css("box-shadow","")
	})*/	
	
// 尾部点击事件
$("#bottom3_t2").click(function(){
	$("#bottom3_t2").css({"font-weight":"bold","color":"gray"})
	$("#bottom3_t1").css({"font-weight":"","color":"gray"})
	})	
$("#bottom3_t1").click(function(){
	$("#bottom3_t1").css({"font-weight":"bold","color":"gray"})
	$("#bottom3_t2").css({"font-weight":"","color":"gray"})
	})	

$("#xq").click(function(){
	$("#bottom3_x").css("display","block");
	$("#xq").css("display","none")
	$("#xq2").css("display","block")
	})	
$("#xq2").click(function(){
	$("#bottom3_x").css("display","none");
	$("#xq").css("display","block")
	$("#xq2").css("display","none")
	})	
	
	
	
	
	
	//  固定广告
$("#x").click(function(){
	$("#ds").css("display","none")
	})
//充话费
$(".money").click(function(){
	var a = $(this).html();
	$(".inp_a2").val(a);
	})
//慢慢下来
$("#jine").mouseenter(function(){
	if(!$("#wodediv").is(":animated"))
	$("#wodediv").slideDown(500);
	})
$("#jine").mouseleave(function(){
	$("#wodediv").delay(100).slideUp(500);
	})
$("#wodediv").mouseleave(function(){
	$("#wodediv").css("display","none");
	})
$("#wodediv").mouseenter(function(){
	$("#wodediv").clearQueue();
	$("#wodediv").css("display","block");
	})


/*$(".money").mouseenter(function(){
	$("#wodediv").css("display","")
	})*/