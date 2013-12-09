// EVENTUALLY
// by Jeremias Menichelli (http://github.com/jeremenichelli)
if(document.documentElement.addEventListener){
	var addEvent = function(str, ev, fn){
		var objs = document.querySelectorAll(str);
		var objsLength = objs.length;
		for (var i = 0; i < objsLength; i++) {
			objs[i].addEventListener(ev, fn, false)
		};
	}
	var removeEvent = function(str, ev, fn){
		var objs = document.querySelectorAll(str);
		var objsLength = objs.length;
		for (var i = 0; i < objsLength; i++) {
			objs[i].removeEventListener(ev, fn, false)
		};
	}
} else if(document.documentElement.attachEvent){
	var addEvent = function(str, ev, fn){
		var objs = document.querySelectorAll(str);
		var objsLength = objs.length;
		for (var i = 0; i < objsLength; i++) {
			objs[i].attachEvent('on'+ev, fn)
		};
	}
	var removeEvent = function(str, ev, fn){
		var objs = document.querySelectorAll(str);
		var objsLength = objs.length;
		for (var i = 0; i < objsLength; i++) {
			objs[i].detachEvent('on'+ev, fn)
		};
	}
}