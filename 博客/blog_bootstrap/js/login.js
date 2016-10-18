function openNew(){
	//获取页面的高度和宽度
	var sWidth=document.body.scrollWidth;
	var sHeight=document.body.scrollHeight;
	
	//获取页面可视区的高度和宽度
	var wHeight=document.documentElement.clientHeight;
	var oMask=document.createElement("div");
	oMask.id="mask";
	oMask.style.width=sWidth+"px";
	oMask.style.height=sHeight+"px";
	document.body.appendChild(oMask);
	var oLogin=document.createElement("div");
	oLogin.id="login";
	oLogin.innerHTML="<div class='loginCon'><div id='close'>点击关闭</div></div>";
	document.body.appendChild(oLogin);
	
	//获取登录框的宽和高
	var dWidth=oLogin.offsetWidth;
	var dHeight=oLogin.offsetHeight;
	//登陆框定位
	oLogin.style.left=sWidth/2-dWidth/2+"px";
	oLogin.style.top=wHeight/2-dHeight/2+'px';
	
	//点击登录框之外的区域关闭登录框
	var oClose=document.getElementById("close");
	oClose.onclick=oMask.onclick=function(){
		document.body.removeChild(oLogin);
		document.body.removeChild(oMask);
	}
}
window.onload=function(){
	var oBtn=document.getElementById("loginBtn");
	var rBtn=document.getElementById("registerBtn");
	oBtn.onclick=function(){
		openNew();
		return false;
	};
	rBtn.onclick=function(){
		openNew();
		return false;
	}
	
}
