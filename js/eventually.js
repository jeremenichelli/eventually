// EVENTUALLY
// by Jeremias Menichelli (http://github.com/jeremenichelli)
// if(document.documentElement.addEventListener){
// 	var addEvent = function(str, ev, fn){
// 		var objs = document.querySelectorAll(str);
// 		var objsLength = objs.length;
// 		for (var i = 0; i < objsLength; i++) {
// 			objs[i].addEventListener(ev, fn, false)
// 		};
// 	}
// 	var removeEvent = function(str, ev, fn){
// 		var objs = document.querySelectorAll(str);
// 		var objsLength = objs.length;
// 		for (var i = 0; i < objsLength; i++) {
// 			objs[i].removeEventListener(ev, fn, false)
// 		};
// 	}
// } else if(document.documentElement.attachEvent){
// 	var addEvent = function(str, ev, fn){
// 		var objs = document.querySelectorAll(str);
// 		var objsLength = objs.length;
// 		for (var i = 0; i < objsLength; i++) {
// 			objs[i].attachEvent('on'+ev, fn)
// 		};
// 	}
// 	var removeEvent = function(str, ev, fn){
// 		var objs = document.querySelectorAll(str);
// 		var objsLength = objs.length;
// 		for (var i = 0; i < objsLength; i++) {
// 			objs[i].detachEvent('on'+ev, fn)
// 		};
// 	}
// }
(function(){
	'use strict';
	// Object to prototype
	var els = (typeof HTMLElement !== "undefined") ? HTMLElement : Element;

	if(document.documentElement.addEventListener){
		els.prototype.addEvent = function(ev, fn){
			this.addEventListener(ev, fn, false);
		}

		els.prototype.removeEvent = function(ev, fn){
			this.removeEventListener(ev, fn, false);
		}
	} else {
		if(!Event.prototype.preventDefault) {
			Event.prototype.preventDefault = function() {
				this.returnValue = false;
			}
		}

		els.prototype.addEvent = function(ev, fn){
			this.attachEvent("on"+ev, fn);
		}
		
		els.prototype.removeEvent = function(ev, fn){
			this.detachEvent("on"+ev, fn);
		}
	}
})();
