/**
 *	shennmegui.js v0.1.0
 *	author by So Aanyip
 *  28th Jan 2015
 */
(function(window){
	"use strict";
	window.startJoke = startJoke;
	/**
	 * 启动方法
	 * @param  {Array} arr  要应用的消息声音来源，传入string，如['qq']。现在可用的参数：'qq','weibo'.
	 * @param  {Number} min 最短出现一次声音的时间(毫秒),默认1000.
	 * @param  {Number} max 最长出现一次声音的时间(毫秒),默认30000.
	 */
	function startJoke(arr,min,max){
		/*验证用户输入*/
		if(!arr || !arr.length) return;
		if(!min || min<1000) min=1000;
		if(!max) max=30000;
		if(min>=max){
			min=1000;
			max=30000;
		}
		/*保存audio对象的数组*/
		var soundArr = [];
		/*检测用户输入的数组*/
		for(var i = 0;i<arr.length;i++){
			if(arr[i].toUpperCase() === 'QQ'){
				jokeQQ(soundArr);
			}else if(arr[i].toUpperCase() === 'WEIBO'){
				jokeWeibo(soundArr);
			}
		}
		loopJoke(soundArr,min,max);
	}
	/**
	 * 添加qq的提示音
	 * @param  {Array} soundArr 保存audio对象的数组
	 */
	function jokeQQ(soundArr){
		soundArr.push(createSound('qqMsg'));
		soundArr.push(createSound('qqSys'));
	}
	/**
	 * 添加新浪微博的提示音
	 * @param  {Array} soundArr 保存audio对象的数组
	 */
	function jokeWeibo(soundArr){
		soundArr.push(createSound('weiboMsg'));
		soundArr.push(createSound('weiboPhone'));
	}
	/**
	 * 创建audio元素
	 * @param  {String} id 声音的id（与声音文件的名字一致）
	 * @return {HTMLElemet}    audio元素
	 */
	function createSound(id){
		var sound = document.createElement('audio');
		sound.id = id;
		sound.src = './sou/'+id+'.mp3';
		document.body.appendChild(sound);
		return sound;
	}
	/**
	 * 进行循环播放恶搞声音
	 * @param  {Array} soundArr 保存audio对象的数组
	 * @param  {Number} min 最短出现一次声音的时间
	 * @param  {Number} max 最长出现一次声音的时间
	 */
	function loopJoke(soundArr,min,max){
		/*随机每次声音出现的间隔时间*/
		var time = (Math.random()*(max-min))+min;
		setTimeout(function(){
			/*随机出现数组中的一项声音*/
			soundArr[Math.floor(Math.random()*soundArr.length)].play();
			/*递归调用*/
			return loopJoke(soundArr,min,max);
		},time);
	}

})(window);