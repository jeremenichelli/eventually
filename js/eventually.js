// EVENTUALLY
// by Jeremias Menichelli (http://github.com/jeremenichelli)
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
