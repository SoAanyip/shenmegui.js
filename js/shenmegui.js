/**
 *	shennmegui.js v0.1.0
 *	author by So Aanyip
 *  28th Jan 2015
 */
(function(window){
	"use strict";
	window.shenmegui = {
		/**
		 * 启动方法
		 * @param  {Array} arr  要应用的消息声音来源，传入string，如['qq']。现在可用的参数：'qq','weibo'.
		 * @param  {Number} min 最短出现一次声音的时间(毫秒),默认1000.
		 * @param  {Number} max 最长出现一次声音的时间(毫秒),默认30000.
		 */
		startJoke : function(arr,min,max){
			/*验证用户输入*/
			if(!arr || !arr.length) return;
			if(!min || min<1000) min=1000;
			if(!max) max=30000;
			if(min>max){
				min=1000;
				max=30000;
			}
			/*保存audio对象的数组*/
			this.soundArr = [];
			/*检测用户输入的数组*/
			for(var i = 0;i<arr.length;i++){
				if(arr[i].toUpperCase() === 'QQ'){
					this._jokeQQ();
				}else if(arr[i].toUpperCase() === 'WEIBO'){
					this._jokeWeibo();
				}
			}
			this._loopJoke(min,max);
		},
		/**
		 * 停止方法
		 */
		stopJoke : function(){
			clearTimeout(this.jokeTimeout);
		},
		/**
		 * 添加自定义声音的方法
		 * @param {String} path 自定义声音的路径(包括文件名)
		 * @param {String} id   自定义声音的id(可选)
		 */
		addJoke : function(path,id){
			if(!path) return;
			var sound = document.createElement('audio');
			if(id) sound.id = id;
			sound.src = path;
			document.body.appendChild(sound);
			this.soundArr.push(sound);
		},
		/**
		 * 添加qq的提示音
		 * @param  {Array} soundArr 保存audio对象的数组
		 */
		_jokeQQ : function(soundArr){
			this.soundArr.push(this._createSound('qqMsg'));
			this.soundArr.push(this._createSound('qqSys'));
		},
		/**
		 * 添加新浪微博的提示音
		 * @param  {Array} soundArr 保存audio对象的数组
		 */
		_jokeWeibo: function(soundArr){
			this.soundArr.push(this._createSound('weiboMsg'));
			this.soundArr.push(this._createSound('weiboPhone'));
		},
		/**
		 * 创建audio元素
		 * @param  {String} id 声音的id（与声音文件的名字一致）
		 * @return {HTMLElemet}    audio元素
		 */
		_createSound : function(id){
			var sound = document.createElement('audio');
			sound.id = id;
			sound.src = './sou/'+id+'.mp3';
			document.body.appendChild(sound);
			return sound;
		},
		/**
		 * 进行循环播放恶搞声音
		 * @param  {Array} soundArr 保存audio对象的数组
		 * @param  {Number} min 最短出现一次声音的时间
		 * @param  {Number} max 最长出现一次声音的时间
		 */
		_loopJoke : function(min,max){
			/*随机每次声音出现的间隔时间*/
			var time = (Math.random()*(max-min))+min;
			var that = this;
			this.jokeTimeout = setTimeout(function(){
				/*随机出现数组中的一项声音*/
				that.soundArr[Math.floor(Math.random()*that.soundArr.length)].play();
				/*递归调用*/
				return that._loopJoke(min,max);
			},time);
		}
	}
})(window);