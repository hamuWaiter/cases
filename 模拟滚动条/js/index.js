var scroll = document.querySelector(".scroll"),
				bar = document.querySelector(".bar"),
				content = document.querySelector(".box .container .content"),
				documentHeight = document.body.scrollHeight - window.innerHeight,
				end = 0,
				maxHeight,
				percent = 0;


			console.log(documentHeight);

			scroll.style.height = window.innerHeight + "px"; //设置滚动条高度

			maxHeight = scroll.offsetHeight - bar.offsetHeight; //  最大高度


			bar.onmousedown = function(e) {
				
				
				// 记录鼠标按下位置
				var oldY = e.clientY;
				var newY = null;

				bar.onmousemove = function(e) {
					
					// 将滚动条滚动的距离映射到页面滚动的距离上去
					
					document.documentElement.scrollTop = percent * documentHeight;
					
					newY = end + (e.clientY - oldY)/12;

					percent = newY / maxHeight;


					if (percent >= 1) {
						percent = 1;
					}
					if (percent <= 0) {
						percent = 0;
					}


					if (newY <= 0) {
						newY = 0;
					}
					if (newY >= maxHeight) {
						newY = maxHeight;
					}

					bar.style.top = newY + "px";
				}
				bar.onmouseup = function() {
					// 记录鼠标松开时的坐标

					end = bar.offsetTop;

					bar.onmousemove = null;
					
				}
				document.onmouseup = function() {

					end = bar.offsetTop;

					bar.onmousemove = null;

				}
			}


			document.onscroll = function() {
				
				bar.style.top = percent * maxHeight + "px";

				scrollTop =document.documentElement.scrollTop;

				percent = scrollTop / documentHeight;

				//滚动的同时要记录滚动条距离顶部的距离 
				end = bar.offsetTop;
				

			}