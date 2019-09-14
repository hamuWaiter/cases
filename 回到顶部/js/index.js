var theTop = document.getElementById("Top"),
	totop = document.getElementById("totop"),
	body = document.getElementById("body"),
	topHeight = theTop.offsetHeight;
console.log(topHeight);
// 注册事件
// 1.1 滚动距离大于10px转为固定定位
window.onscroll = function() {
	var distanceTop = document.documentElement.scrollTop;
	if(distanceTop >= 20) {
		theTop.className = "top fixed";
		body.style.marginTop = topHeight+"px";
		totop.style.display = "block";
	}else{
		theTop.className = "top";
		body.style.marginTop = "0px";
		totop.style.display = "none";
	}
}

// 1.2 点击回到顶部按钮实现回到顶部动画

totop.onclick = function() {
	// 不可多次点击
	if(this.timer != null){
		return;
	}
	// 目标位置与步进
	// 开启定时器
	this.timer = setInterval(()=>{
		var target = 0,
			step = 30,
			current = document.documentElement.scrollTop;
			
			if(current > target) {
				step = -Math.abs(step);
			}
			
		if(Math.abs(current-target) < Math.abs(step)) {
			clearInterval(this.timer);
			this.timer = null;
			document.documentElement.scrollTop = target;
			return;
		}
		current += step;
		document.documentElement.scrollTop = current;
		
	},10);
	
}