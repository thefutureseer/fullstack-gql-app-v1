(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{66:function(t,e,r){},75:function(t,e,r){t.exports=r(93)},80:function(t,e,r){},93:function(t,e,r){"use strict";r.r(e);var n,o,a,i,c,l=r(0),u=r.n(l),s=r(55),h=r.n(s),f=(r(80),r(66),r(3)),p=r(11),m=r(38),d=r(12),v=r(6),y=r(34),g=r(104),b=Object(g.a)(n||(n=Object(y.a)(["\n  mutation \n    createPost($_id:ID!, $author:String!, $title:String, $prom:Boolean) {\n     createPost(books: {_id:$_id, author:$author, title:$title, prom:$prom}) {\n      _id\n      author\n      title\n      prom\n     }\n    }\n"]))),E=Object(g.a)(o||(o=Object(y.a)(["\n  mutation\n   deleteOnePost($_id: ID!) {\n     deleteOnePost(_id: $_id) {\n       _id\n     }\n   }\n"]))),w=Object(g.a)(a||(a=Object(y.a)(["\n  mutation\n    updateOnePost($_id: ID!, $author: String!) {\n      updateOnePost(books: {_id: $_id, author: $author}) {\n        _id\n        author\n      }\n    }"]))),x=r(99),O=r(106),L=Object(g.a)(i||(i=Object(y.a)(["\n  query {\n      getAllBooks {\n        _id\n        title\n        author\n        prom\n      }\n    }\n"]))),_=(Object(g.a)(c||(c=Object(y.a)(["\n  query \n    getOne($_id: ID ) {\n      getOne(_id: $_id) {\n      _id\n    }}\n"]))),r(107)),j=r(71),k=r.n(j),N=function(t){var e=t.type,r=void 0===e?"button":e,n=t.buttonText,o=t.onClick,a=t.loading,i=t.className,c=void 0===i?"":i;return u.a.createElement("div",{className:"mt-6"},u.a.createElement("button",{type:r,onClick:o,disabled:a,className:k()([c],"delete-btn text-sm font-medium leading-5 text-black transition duration-150 ease-in-out  border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none",{"bg-bb-purple":!a,"bg-bb-gray-700":a,"cursor-wait":a})},a?"Loading...":n))},S=r(56),P=r.n(S);function C(){C=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var s={};function h(){}function f(){}function p(){}var m={};c(m,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==e&&r.call(v,o)&&(m=v);var y=p.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(l.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}P.a.setAppElement("#root");var G={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",background:"black",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function T(t){var e,r=u.a.useState(!1),n=Object(v.a)(r,2),o=n[0],a=n[1],i=u.a.useState({author:"",_id:t.id}),c=Object(v.a)(i,2),l=c[0],s=c[1];function h(){a(!1)}var f=Object(x.a)(w),y=Object(v.a)(f,1)[0],g=function(){var t=Object(d.a)(C().mark(function t(e){var r,n,o;return C().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target,n=r.name,o=r.value,t.next=3,s(Object(m.a)({},l,Object(p.a)({},n,o)));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement(N,{onClick:function(){a(!0)},buttonText:"Edit"}),u.a.createElement(P.a,{isOpen:o,onAfterOpen:function(){e.style.color="#f00"},onRequestClose:h,style:G,contentLabel:"Example Modal"},u.a.createElement("h2",{ref:function(t){return e=t}},"Hello"),u.a.createElement("button",{onClick:h},"close"),u.a.createElement("div",{className:"secret"},"edit secret"),u.a.createElement("form",null,u.a.createElement("input",{onChange:g,name:"author",value:l.author}),u.a.createElement("button",{onClick:function(){y({variables:Object(m.a)({},l)})}},"the modal"))))}function $(){var t=Object(x.a)(E),e=Object(v.a)(t,1)[0],r=Object(_.a)(L),n=r.loading,o=r.error,a=r.data;return n?u.a.createElement("p",null,"....loading!"):o?u.a.createElement("p",null,o.message):u.a.createElement("div",{className:"container box"},u.a.createElement("p",null," Begin special list here: "),a.getAllBooks.map(function(t){return u.a.createElement("div",{className:"msg-div",key:t._id},u.a.createElement("h1",{className:"prom"},u.a.createElement(T,{className:"prom-div",id:t._id}),u.a.createElement(N,{onClick:function(r){var n;r.preventDefault(),n=t._id,e({variables:{_id:n},update:function(t){var e=t.identify({_id:n,__type:"Book"});t.evict({_id:e}),t.gc()}})},buttonText:"Delete"}),u.a.createElement("div",{className:"prom-div"},u.a.createElement("div",null,u.a.createElement("p",null,"prom"),u.a.createElement("span",null,t.prom.toString()))),u.a.createElement("div",{className:"prom-div"},u.a.createElement("div",null,u.a.createElement("p",null,"Author"),u.a.createElement("span",null,t.author))),u.a.createElement("div",{className:"prom-div"},u.a.createElement("div",null,u.a.createElement("p",null,"Note"),u.a.createElement("span",null,t.title)))))}),u.a.createElement("p",null," End of list "))}function F(){F=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(j){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}t.wrap=l;var s={};function h(){}function f(){}function p(){}var m={};c(m,o,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==e&&r.call(v,o)&&(m=v);var y=p.prototype=h.prototype=Object.create(m);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(l.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function I(){var t=Object(O.a)(),e=Object(l.useState)({_id:t,author:"",title:"",prom:!1}),r=Object(v.a)(e,2),n=r[0],o=r[1],a=Object(x.a)(b),i=Object(v.a)(a,2),c=i[0],s=i[1].error,h=function(){var t=Object(d.a)(F().mark(function t(e){return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();try{c({variables:Object(m.a)({},n)}),window.location.reload()}catch(r){console.error(s)}case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(d.a)(F().mark(function t(e){var r,a,i;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target,a=r.name,i=r.value,console.log(n.prom," setstate prom"),t.next=4,o(Object(m.a)({},n,Object(p.a)({},a,i)));case 4:console.log(n," this is stateProm");case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:h,className:"form container box"},u.a.createElement("div",null,u.a.createElement("label",null,"names"),u.a.createElement("input",{onChange:f,name:"author",value:n.author,className:"form-control",placeholder:"names"})),u.a.createElement("div",null,u.a.createElement("label",null,"note"),u.a.createElement("input",{onChange:f,name:"title",value:n.title,className:"form-control",placeholder:"note"})),u.a.createElement("div",{className:"form-check"},u.a.createElement("label",{className:"form-check-label"},u.a.createElement("input",{type:"checkbox",onChange:function(){return n.prom?n.prom=!1:n.prom=!0},name:"prom",value:n.prom,className:"form-check-input"}),u.a.createElement("p",null,"prom"))),u.a.createElement("div",null,u.a.createElement("label",null,"Sincere message"),u.a.createElement("p",{className:"sin-msg m-2 text-danger"},"We'll never share your secret with anyone else.")),u.a.createElement("div",{className:"form-check"},u.a.createElement("input",{type:"checkbox",className:"form-check-input"}),u.a.createElement("label",{className:"form-check-label"},"Check me out")),u.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")),u.a.createElement($,null))}var A=function(){var t=Object(l.useState)("visible"),e=Object(v.a)(t,2),r=e[0],n=e[1],o=Object(f.l)();return u.a.createElement("div",null,u.a.createElement("button",{className:"log-btn",style:{visibility:r},onClick:function(){console.log(r,"login.."),n("hidden"),o("/form")}},"Login"))};function D(){return u.a.createElement("div",{id:"double-wide"},u.a.createElement("header",null,"List of secrets",u.a.createElement(A,null)),u.a.createElement(f.c,null,u.a.createElement(f.a,{exact:!0,path:"/login",element:A}),u.a.createElement(f.a,{path:"/form",element:u.a.createElement(I,null)})),u.a.createElement("footer",{id:"foot"},"Copy rights Tannehill"))}var B=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,109)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})},q=r(45),Y=r(103),J=r(105),R=r(102),H=new Y.a({uri:"http://localhost:3001/graphql",cache:new J.a});h.a.render(u.a.createElement(q.a,null,u.a.createElement(R.a,{client:H},u.a.createElement(D,null))),document.getElementById("root")),B()}},[[75,1,2]]]);
//# sourceMappingURL=main.1a1cba3e.chunk.js.map