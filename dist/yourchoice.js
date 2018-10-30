!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Yourchoice=t():e.Yourchoice=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,o,c,u,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var a=new Error('Uncaught, unspecified "error" event. ('+t+")");throw a.context=t,a}if(s(n=this._events[e]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),n.apply(this,c)}else if(i(n))for(c=Array.prototype.slice.call(arguments,1),o=(l=n.slice()).length,u=0;u<o;u++)l[u].apply(this,c);return!0},n.prototype.addListener=function(e,t){var o;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}return i.listener=t,this.on(e,i),this},n.prototype.removeListener=function(e,t){var n,s,o,c;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,s=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(c=o;c-- >0;)if(n[c]===t||n[c].listener&&n[c].listener===t){s=c;break}if(s<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),s=function(e,t){return t(e)},o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce(s,e)}};function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.length;return function(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var u=n.concat(s);return u.length<r?e(t,u):t.apply(void 0,c(u))}},l=function(e){return Array.from(e)},a=function(e,t){return t.includes(e)},f=function(e,t){return e.filter(function(e){return t.includes(e)})},h=function e(t,n){if(Array.isArray(t)){return t.reduce(function(t,n){return e(n,t)},n)}return n.filter(function(e){return e!==t})};function d(){return{items:[],selected:[],changed:{selected:[],deselected:[]},anchor:null}}var v=u(function(e,t){var n,r,i=function(e){var t=[],n=!0,r=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value;t.push(c)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e);return{items:i,selected:f(t.selected,i),changed:{selected:[],deselected:(n=t.selected,r=i,n.filter(function(e){return!r.includes(e)}))},anchor:a(t.anchor,i)?t.anchor:null}}),m=u(function(e,t){var n=f(e,t.items);return{items:t.items,selected:n,changed:{selected:h(t.selected,n),deselected:h(n,t.selected)},anchor:t.anchor}});function p(e){return l(e.items)}function y(e){return l(e.selected)}function _(e){return l(e.changed.selected)}function g(e){return l(e.changed.deselected)}function b(e){return null!==e.anchor&&void 0!==e.anchor?e.anchor:e.selected.length>0?function(e){var t=null,n=function(t){return-1!==e.selected.indexOf(t)},r=!0,i=!1,s=void 0;try{for(var o,c=e.items[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var u=o.value;n(u)&&(t=u)}}catch(e){i=!0,s=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw s}}return t}(e):e.items[0]}var w=u(function(e,t){return a(e,t.items)?{items:t.items,selected:[e],changed:{selected:h(t.selected,[e]),deselected:h([e],t.selected)},anchor:e}:t}),x=u(function(e,t){if(!a(e,t.items))return t;if(!a(e,t.selected))return{items:t.items,selected:t.selected.concat([e]),changed:{selected:[e],deselected:[]},anchor:e};var n=e===t.anchor?null:t.anchor;return{items:t.items,selected:h([e],t.selected),changed:{selected:[],deselected:[e]},anchor:n}}),L=u(function(e,t){return{items:t.items,selected:h(e,t.selected),changed:{selected:[],deselected:f(e,t.selected)},anchor:null}}),S=u(function(e){return{items:e.items,selected:[],changed:{selected:[],deselected:e.selected},anchor:null}});var O=u(function(e,t){if(!a(e,t.items))return t;var n=b(t,t.items),r=function(e,t,n){for(var r=function(e){return-1!==t.indexOf(e)},i=[],s=n.indexOf(e),o=s;o>=0&&r(n[o]);o-=1)i.push(n[o]);for(var c=s;c<n.length&&r(n[c]);c+=1)i.push(n[c]);return i}(n,t.selected,t.items),i=function(e,t,n){if(e===t)return[e];var r=n.indexOf(e),i=n.indexOf(t);if(r>i){var s=r;r=i,i=s}return n.slice(r,i+1)}(n,e,t.items),s=o(function(e){return h(r,e)},function(e){return t=e,c(new Set(i.concat(t)));var t})(t.selected);return{items:t.items,selected:s,changed:{selected:h(t.selected,s),deselected:h(s,t.selected)},anchor:t.anchor}});function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=C(this,I(t).call(this)),console.warn("DEPRECATION warning: The imperative interface of yourchoice is deprecated and will be removed in yourchoice 3.0.0"),n.iterable=e,n.state={items:[],selected:[],changed:{selected:[],deselected:[]},anchor:null},n._updateSelectedItems(),n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,i.a),n=t,(r=[{key:"toggle",value:function(e){this.state=o(v(this.iterable),x(e))(this.state),this._updateSelectedItems(),this._notifyChangedItems(),this._emitChangeEvent()}},{key:"replace",value:function(e){this.state=o(v(this.iterable),w(e))(this.state),this._updateSelectedItems(),this._notifyChangedItems(),this._emitChangeEvent()}},{key:"remove",value:function(e){this.state=o(v(this.iterable),L(e))(this.state),this._updateSelectedItems(),this._notifyChangedItems(),this._emitChangeEvent()}},{key:"removeAll",value:function(){this.state=o(v(this.iterable),S())(this.state),this._updateSelectedItems(),this._notifyChangedItems(),this._emitChangeEvent()}},{key:"rangeTo",value:function(e){this.state=o(v(this.iterable),O(e))(this.state),this._updateSelectedItems(),this._notifyChangedItems(),this._emitChangeEvent()}},{key:"_updateSelectedItems",value:function(){this.selectedItems=y(this.state)}},{key:"_notifyChangedItems",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=_(this.state)[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.select()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}var s=!0,o=!1,c=void 0;try{for(var u,l=g(this.state)[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){u.value.deselect()}}catch(e){o=!0,c=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw c}}}},{key:"_emitChangeEvent",value:function(){(_(this.state).length>0||g(this.state).length>0)&&this.emit("change",this.selectedItems.slice())}}])&&j(n.prototype,r),s&&j(n,s),t}();n.d(t,"init",function(){return d}),n.d(t,"setItems",function(){return v}),n.d(t,"setSelection",function(){return m}),n.d(t,"replace",function(){return w}),n.d(t,"toggle",function(){return x}),n.d(t,"remove",function(){return L}),n.d(t,"removeAll",function(){return S}),n.d(t,"rangeTo",function(){return O}),n.d(t,"getItems",function(){return p}),n.d(t,"getSelection",function(){return y}),n.d(t,"getChangedSelection",function(){return _}),n.d(t,"getChangedDeselection",function(){return g});t.default=k}])});