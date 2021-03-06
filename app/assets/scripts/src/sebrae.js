/*!
 * jQuery Easter Egg
 * http://unindented.github.com/jquery-easteregg/
 *
 * Copyright 2012, Daniel Perez Alvarez
 * Licensed under the Apache License, Version 2.0
 */
(function(e){"use strict";var t={options:{sequence:[38,38,40,40,37,39,37,39,66,65]},setup:function(t,n){return e.extend(this.options,n),this.index=0,this.elem=t,e(this.elem).on("keydown.easteregg",e.proxy(this.onKeyDown,this)),this},teardown:function(){return e(this.elem).off(".easteregg"),this},onKeyDown:function(e){var t=this.options,n=t.sequence,i=t.callback;e.which===n[this.index]?(this.index+=1,this.index===n.length&&(this.index=0,null!=i&&i.call(this.elem))):this.index=0}};"function"!=typeof Object.create&&(Object.create=function(e){var t=function(){};return t.prototype=e,new t}),e.pluginize=function(t,n){return e.fn[t]=function(i){return this.each(function(){var s;e(this).data(t)||(s=Object.create(n).setup(this,i),e(this).data(t,s))})},n},e.pluginize("easteregg",t)})(jQuery);

$(function(){$(document).easteregg({callback:function(){$('body').toggleClass('easteregg');}});});
