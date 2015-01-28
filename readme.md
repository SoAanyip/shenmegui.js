shenmegui.js
===================================
给你的网站一个整蛊的机会
----------------------------------- 

----------------------------------- 
### v0.1.0  
### author by So Aanyip

		shenmegui.js是一个用于开玩笑的js插件，让你的网站随机的播放出不同的提示音（如qq嘀嘀声），所以请不要在严肃正经的场合使用，仅供娱乐（愚人节除外）。声音播放使用HTML5的audio元素，不兼容IE8-。低版本浏览器用户无法听见也算是一种玩笑了。

		最简单用法：
		startJoke(['qq','weibo']);


		function startJoke(arr,min,max)
		@param {Array} arr 要应用的消息声音来源，传入string，如['qq']。现在可用的参数：'qq','weibo'.
		@param {Number} min 最短出现一次声音的时间(毫秒),默认1000.
		@param {Number} max 最长出现一次声音的时间(毫秒),默认30000.
	
