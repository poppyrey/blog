//页面加载完毕后触发
window.onload = function(){
	var obtn = document.getElementById("btn");
	//获取可视区高度
	var clientHeight= document.documentElement.clientHeight;
	var timer = null;
	var sTop = true;
	window.onscroll=function(){
		var ostop = document.documentElement.scrollTop || document.body.scrollTop;
		if(ostop>=clientHeight){
			obtn.style.display='block';
		}
		else{
			obtn.style.display='none';
		}
		if(!sTop){
			clearInterval(timer);
		}
		sTop = false;
	}
	obtn.onclick = function(){
		//设置定时器
		timer = setInterval(function(){
			//获取滚动条据顶部距离
			var ostop = document.documentElement.scrollTop || document.body.scrollTop;
		var speed = Math.floor(-ostop/5);//去小数点取整
		document.documentElement.scrollTop = document.body.scrollTop = ostop+speed;
		sTop=true;
		if(ostop ==0){
			clearInterval(timer);
		}
		},30);
		
		
	}
}
