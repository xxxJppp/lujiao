(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21ac93a6"],{"013f":function(e,t,n){var r=n("4ce5"),o=n("224c"),i=n("008a"),a=n("eafa"),c=n("5dd2");e.exports=function(e,t){var n=1==e,s=2==e,l=3==e,u=4==e,f=6==e,p=5==e||f,d=t||c;return function(t,c,g){for(var b,y,h=i(t),m=o(h),v=r(c,g,3),w=a(m.length),O=0,j=n?d(t,w):s?d(t,0):void 0;w>O;O++)if((p||O in m)&&(b=m[O],y=v(b,O,h),e))if(n)j[O]=y;else if(y)switch(e){case 3:return!0;case 5:return b;case 6:return O;case 2:j.push(b)}else if(u)return!1;return f?-1:l||u?u:j}}},"09e3":function(e,t,n){},"163d":function(e,t,n){"use strict";var r=n("e7ad"),o=n("e042"),i=n("75c4"),a=n("1e5b"),c=n("94b3"),s=n("238a"),l=n("2ea2").f,u=n("dcb7").f,f=n("064e").f,p=n("777a").trim,d="Number",g=r[d],b=g,y=g.prototype,h=i(n("e005")(y))==d,m="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=m?t.trim():p(t,3);var n,r,o,i=t.charCodeAt(0);if(43===i||45===i){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var a,s=t.slice(2),l=0,u=s.length;l<u;l++)if(a=s.charCodeAt(l),a<48||a>o)return NaN;return parseInt(s,r)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof g&&(h?s((function(){y.valueOf.call(n)})):i(n)!=d)?a(new b(v(t)),n,g):v(t)};for(var w,O=n("149f")?l(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;O.length>j;j++)o(b,w=O[j])&&!o(g,w)&&f(g,w,u(b,w));g.prototype=y,y.constructor=g,n("bf16")(r,d,g)}},"1e5b":function(e,t,n){var r=n("fb68"),o=n("859b").set;e.exports=function(e,t,n){var i,a=t.constructor;return a!==n&&"function"==typeof a&&(i=a.prototype)!==n.prototype&&r(i)&&o&&o(e,i),e}},2346:function(e,t,n){var r=n("75c4");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"3d86":function(e,t,n){},4758:function(e,t){"function"===typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},"49a5":function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},o=/%[sdj%]/g;t.format=function(e){if(!j(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,i=r.length,a=String(e).replace(o,(function(e){if("%%"===e)return"%";if(n>=i)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return e}})),s=r[n];n<i;s=r[++n])v(s)||!S(s)?a+=" "+s:a+=" "+c(s);return a},t.deprecate=function(n,r){if("undefined"!==typeof e&&!0===e.noDeprecation)return n;if("undefined"===typeof e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;function i(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}return i};var i,a={};function c(e,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),m(n)?r.showHidden=n:n&&t._extend(r,n),P(r.showHidden)&&(r.showHidden=!1),P(r.depth)&&(r.depth=2),P(r.colors)&&(r.colors=!1),P(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=s),f(r,e,r.depth)}function s(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function l(e,t){return e}function u(e){var t={};return e.forEach((function(e,n){t[e]=!0})),t}function f(e,n,r){if(e.customInspect&&n&&A(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,e);return j(o)||(o=f(e,o,r)),o}var i=p(e,n);if(i)return i;var a=Object.keys(n),c=u(a);if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),E(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return d(n);if(0===a.length){if(A(n)){var s=n.name?": "+n.name:"";return e.stylize("[Function"+s+"]","special")}if(_(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(k(n))return e.stylize(Date.prototype.toString.call(n),"date");if(E(n))return d(n)}var l,m="",v=!1,w=["{","}"];if(h(n)&&(v=!0,w=["[","]"]),A(n)){var O=n.name?": "+n.name:"";m=" [Function"+O+"]"}return _(n)&&(m=" "+RegExp.prototype.toString.call(n)),k(n)&&(m=" "+Date.prototype.toUTCString.call(n)),E(n)&&(m=" "+d(n)),0!==a.length||v&&0!=n.length?r<0?_(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=v?g(e,n,r,c,a):a.map((function(t){return b(e,n,r,c,t,v)})),e.seen.pop(),y(l,m,w)):w[0]+m+w[1]}function p(e,t){if(P(t))return e.stylize("undefined","undefined");if(j(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return O(t)?e.stylize(""+t,"number"):m(t)?e.stylize(""+t,"boolean"):v(t)?e.stylize("null","null"):void 0}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,n,r,o){for(var i=[],a=0,c=t.length;a<c;++a)$(t,String(a))?i.push(b(e,t,n,r,String(a),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(b(e,t,n,r,o,!0))})),i}function b(e,t,n,r,o,i){var a,c,s;if(s=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]},s.get?c=s.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):s.set&&(c=e.stylize("[Setter]","special")),$(r,o)||(a="["+o+"]"),c||(e.seen.indexOf(s.value)<0?(c=v(n)?f(e,s.value,null):f(e,s.value,n-1),c.indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n"))):c=e.stylize("[Circular]","special")),P(a)){if(i&&o.match(/^\d+$/))return c;a=JSON.stringify(""+o),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function y(e,t,n){var r=e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function h(e){return Array.isArray(e)}function m(e){return"boolean"===typeof e}function v(e){return null===e}function w(e){return null==e}function O(e){return"number"===typeof e}function j(e){return"string"===typeof e}function x(e){return"symbol"===typeof e}function P(e){return void 0===e}function _(e){return S(e)&&"[object RegExp]"===D(e)}function S(e){return"object"===typeof e&&null!==e}function k(e){return S(e)&&"[object Date]"===D(e)}function E(e){return S(e)&&("[object Error]"===D(e)||e instanceof Error)}function A(e){return"function"===typeof e}function z(e){return null===e||"boolean"===typeof e||"number"===typeof e||"string"===typeof e||"symbol"===typeof e||"undefined"===typeof e}function D(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(P(i)&&(i=Object({VUE_APP_BASE_API:"http://39.99.177.97:8097/backend",NODE_ENV:"production",BASE_URL:""}).NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=e.pid;a[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else a[n]=function(){};return a[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=h,t.isBoolean=m,t.isNull=v,t.isNullOrUndefined=w,t.isNumber=O,t.isString=j,t.isSymbol=x,t.isUndefined=P,t.isRegExp=_,t.isObject=S,t.isDate=k,t.isError=E,t.isFunction=A,t.isPrimitive=z,t.isBuffer=n("dc62");var R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function N(){var e=new Date,t=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":");return[e.getDate(),R[e.getMonth()],t].join(" ")}function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",N(),t.format.apply(t,arguments))},t.inherits=n("4758"),t._extend=function(e,t){if(!t||!S(t))return e;var n=Object.keys(t),r=n.length;while(r--)e[n[r]]=t[n[r]];return e};var I="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function T(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}function V(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!==typeof o)throw new TypeError("The last argument must be of type Function");var i=this,a=function(){return o.apply(i,arguments)};t.apply(this,n).then((function(t){e.nextTick(a,null,t)}),(function(t){e.nextTick(T,t,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}t.promisify=function(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');if(I&&e[I]){var t=e[I];if("function"!==typeof t)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,I,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(e,r){e?n(e):t(r)}));try{e.apply(this,o)}catch(a){n(a)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),I&&Object.defineProperty(t,I,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=I,t.callbackify=V}).call(this,n("eef6"))},5330:function(e,t,n){"use strict";var r=n("09e3"),o=n.n(r);o.a},"5dd2":function(e,t,n){var r=n("81dc");e.exports=function(e,t){return new(r(e))(t)}},"777a":function(e,t,n){var r=n("e46b"),o=n("f6b4"),i=n("238a"),a=n("9769"),c="["+a+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(e,t,n){var o={},c=i((function(){return!!a[e]()||s[e]()!=s})),l=o[e]=c?t(p):a[e];n&&(o[n]=l),r(r.P+r.F*c,"String",o)},p=f.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},"81dc":function(e,t,n){var r=n("fb68"),o=n("2346"),i=n("cb3d")("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&(t=t[i],null===t&&(t=void 0))),void 0===t?Array:t}},"859b":function(e,t,n){var r=n("fb68"),o=n("69b3"),i=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n("4ce5")(Function.call,n("dcb7").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},9769:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},bbbc:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var r=n("b775"),o=n("fed1"),i=n.n(o);function a(e){return Object(r["a"])({url:"/proxyCA/renewalRate",method:"post",data:i.a.stringify(e)})}function c(e){return Object(r["a"])({url:"/proxyCA/pageList",method:"post",data:e})}function s(){return Object(r["a"])({url:"/proxyCA",method:"get"})}function l(e){return Object(r["a"])({url:"/proxyCA/".concat(e),method:"delete"})}function u(e){return Object(r["a"])({url:"/proxyCA/channelAuthorization",method:"post",data:e})}},dc62:function(e,t){e.exports=function(e){return e&&"object"===typeof e&&"function"===typeof e.copy&&"function"===typeof e.fill&&"function"===typeof e.readUInt8}},e49d:function(e,t,n){"use strict";var r=n("3d86"),o=n.n(r);o.a},e697:function(e,t,n){"use strict";var r=n("e46b"),o=n("013f")(5),i="find",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("0e8b")(i)},fd81:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"orders-container layout-column"},[n("div",{staticClass:"wjp-tools"},[n("el-button",{attrs:{type:"primary"},on:{click:e.addAgent}},[e._v("添加代理")])],1),n("div",{staticClass:"wjp-content flex layout-column"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wjp-table",staticStyle:{width:"100%"},attrs:{height:450,data:e.tableData,height:"250"}},[n("el-table-column",{attrs:{prop:"account",label:"账号"}}),n("el-table-column",{attrs:{prop:"phone",label:"手机"}}),n("el-table-column",{attrs:{prop:"createTime",label:"开通时间"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.edit(t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.delUser(t.row)}}},[e._v("删除")])]}}])})],1),n("div",{staticClass:"page layout-row align-center right"},[n("span",[e._v("每页显示")]),n("el-pagination",{staticClass:"statistics",attrs:{background:"","prev-text":"上一页","next-text":"下一页","current-page":e.currentPage,"page-size":e.pageSize,layout:" prev, pager, next,total",total:e.totalPage},on:{"size-change":e.sizeChange,"current-change":e.getTableData,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1),n("el-dialog",{attrs:{title:"添加代理",visible:e.agentVisible,width:"30%","label-width":"80px"},on:{"update:visible":function(t){e.agentVisible=t}}},[n("el-form",{ref:"form",staticClass:"dialog-form",attrs:{model:e.form,rules:e.rules}},[n("div",{staticClass:"layout-row__between"},[n("el-form-item",{attrs:{label:"账号",prop:"account"}},[n("el-input",{model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),n("el-form-item",{attrs:{label:"密码",prop:"userPassword"}},[n("el-input",{model:{value:e.form.userPassword,callback:function(t){e.$set(e.form,"userPassword",t)},expression:"form.userPassword"}})],1)],1),n("div",{staticClass:"layout-row__between"},[n("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[n("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.agentVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.register}},[e._v("确 定")])],1)],1),n("el-drawer",{attrs:{title:"已开通通道",size:"50%",visible:e.drawerVisible,direction:"rtl","before-close":e.drawerClose},on:{"update:visible":function(t){e.drawerVisible=t}}},[n("div",{staticClass:"wjp-tools layout-row__between"},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.cedit}},[e._v("添加通道")])],1),n("div",{staticClass:"layout-row buttons align-center"},[n("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"最小利率"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getAllchannel(t)}},model:{value:e.minRate,callback:function(t){e.minRate=t},expression:"minRate"}}),n("div",[e._v("- ")]),n("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"最大利率"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getAllchannel(t)}},model:{value:e.maxRate,callback:function(t){e.maxRate=t},expression:"maxRate"}}),n("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:e.getAllchannel}},[e._v("搜 索")])],1)]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wjp-table",staticStyle:{width:"100%"},attrs:{data:e.drawerData,height:"550"}},[n("el-table-column",{attrs:{prop:"proxyAccount",label:"代理名称"}}),n("el-table-column",{attrs:{label:"通道名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("p",[e._v(e._s(e.dicFilter(t.row.payWayDictId)))])]}}])}),n("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),n("el-table-column",{attrs:{label:"通道利率"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.show?n("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"利率"},on:{blur:function(n){return e.changeRate(t.row)}},model:{value:t.row.channelRate,callback:function(n){e.$set(t.row,"channelRate",n)},expression:"scope.row.channelRate"}}):n("span",{on:{click:function(n){return n.stopPropagation(),e.$set(t.row,"show",!0)}}},[e._v(e._s(t.row.channelRate))])]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.delChannel(t.row)}}},[e._v("删除")])]}}])})],1),n("div",{staticClass:"page layout-row align-center right"},[n("span",[e._v("每页显示")]),n("el-pagination",{staticClass:"statistics",attrs:{background:"","prev-text":"上一页","next-text":"下一页","current-page":e.dcurrentPage,"page-size":e.dpageSize,layout:" prev, pager, next,total",total:e.dtotalPage},on:{"size-change":e.dsizeChange,"current-change":e.getAllchannel,"update:currentPage":function(t){e.dcurrentPage=t},"update:current-page":function(t){e.dcurrentPage=t}}})],1)],1),n("add-channel",{attrs:{id:e.chooseProxy.id,visible:e.channelVisible},on:{finish:e.getAllchannel,"update:visible":function(t){e.channelVisible=t}}})],1)},o=[],i=(n("5ab2"),n("6d57"),n("e10e"),n("e697"),n("9d37")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.form.id?"修改通道":"添加通道",visible:e.visible,width:"30%"},on:{"update:visible":function(t){e.visible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[n("div",{staticClass:"layout-row__between"},[n("el-form-item",{attrs:{label:"通道",prop:"payWayDictId"}},[n("el-select",{attrs:{placeholder:"通道",clearable:""},model:{value:e.form.payWayDictId,callback:function(t){e.$set(e.form,"payWayDictId",t)},expression:"form.payWayDictId"}},e._l(e.payWay,(function(e,t){return n("el-option",{key:t,attrs:{label:e.dictValueDisplayName,value:e.id}})})),1)],1),n("el-form-item",{attrs:{label:"利率",prop:"channelRate"}},[n("el-input",{model:{value:e.form.channelRate,callback:function(t){e.$set(e.form,"channelRate",t)},expression:"form.channelRate"}})],1)],1)]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.cancel}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.addChannel}},[e._v("确 定")])],1)],1)},c=[],s=(n("163d"),n("bbbc")),l=n("52c1");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={props:{id:{default:function(){return 0},type:Number},visible:{default:function(){return!1},type:Boolean},form:{default:function(){return{}},type:Object}},computed:f({},Object(l["c"])(["settings"]),{payWay:function(){return this.settings.dict?this.settings.dict.PayWay.dicts:[]}}),data:function(){return{rules:{payWayDictId:[{required:!0,message:"请选择通道",trigger:"blur"}],channelRate:[{required:!0,message:"请填写利率",trigger:"blur"}]}}},mounted:function(){},methods:{addChannel:function(){var e=this;Object(s["a"])(f({},this.form,{proxyId:this.id})).then((function(t){e.$message.success("添加通道成功！")})).catch((function(t){e.$message.error("添加通道失败！")})).finally((function(t){e.cancel()}))},cancel:function(){this.$emit("finish"),this.$emit("update:visible",!1)}}},d=p,g=(n("5330"),n("5511")),b=Object(g["a"])(d,a,c,!1,null,"fdbf5f1c",null),y=b.exports,h=(n("391c"),n("61f7")),m=n("c24f");n("49a5");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={components:{addChannel:y},data:function(){var e=this,t=function(t,n,r){""===n?r(new Error("请输入密码")):Object(h["b"])(e.form.userPassword)?r():r(new Error("密码包含 数字,英文,字符中的两种以上，长度6-20"))},n=function(t,n,r){""===n?r(new Error("请输入手机号")):Object(h["c"])(e.form.phone)?r():r(new Error("请输入正确的手机号"))};return{loading:!1,agentVisible:!1,form:{account:"",userPassword:"",phone:""},rules:{account:[{required:!0,message:"请填写账号",trigger:"blur"}],userPassword:[{required:!0,validator:t,trigger:"blur"}],phone:[{required:!0,validator:n,trigger:"blur"}]},drawerVisible:!1,channelVisible:!1,minRate:"",maxRate:"",chooseProxy:{},tableData:[],totalPage:0,currentPage:1,pageSize:10,drawerData:[],dtotalPage:0,dcurrentPage:1,dpageSize:10}},computed:w({},Object(l["b"])(["userinfo"]),{},Object(l["c"])(["settings"]),{payWay:function(){return this.settings.dict?this.settings.dict.PayWay.dicts:[]}}),mounted:function(){this.getTableData()},methods:{drawerClose:function(){this.drawerVisible=!1},changeRate:function(e){var t=this;this.$set(e,"show",!1),e.oldchannelRate!==e.channelRate&&(this.loading=!0,Object(s["b"])({id:e.id,rate:e.channelRate}).then((function(e){t.$message.success("修改利率成功！")})).catch((function(e){t.$message.error("修改利率失败！")})).finally((function(e){t.loading=!1,t.getAllchannel()})))},getTableData:function(){var e=this;this.loading=!0,Object(m["f"])({pageNo:this.currentPage,pageSize:this.pageSize,param:{roleId:3}}).then((function(t){if(t.success){var n=t.data,r=n.totalRecords,o=n.pageNo,i=n.pageSize,a=n.content;e.totalPage=r,e.pageSize=i,e.currentPage=o,e.tableData=a}else e.$message.error("获取表格数据失败！")})).catch((function(t){e.$message.error("获取表格数据失败！")})).finally((function(t){e.loading=!1}))},edit:function(e){this.chooseProxy=e,this.drawerVisible=!0,this.getAllchannel()},cedit:function(){this.channelVisible=!0},getAllchannel:function(){var e=this;Object(s["d"])({pageNo:this.currentPage,pageSize:this.pageSize,param:{proxyAccount:this.chooseProxy.account,minRate:this.minRate,maxRate:this.maxRate}}).then((function(t){var n=t.data,r=n.totalRecords,o=n.pageNo,i=n.pageSize,a=n.content;e.dtotalPage=r,e.dpageSize=i,e.dcurrentPage=o,a.map((function(e){e.show=!1,e.oldchannelRate=e.channelRate})),e.drawerData=a}))},addAgent:function(){this.agentVisible=!0,this.$refs.form.resetFields()},register:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(m["j"])(w({parentAccount:e.userinfo.id,roleIds:[3]},e.form)).then((function(t){e.$message.success("添加代理成功")})).catch((function(t){e.$message.error("\b添加代理失败！")})).finally((function(t){e.getTableData(),e.agentVisible=!1}))}))},delUser:function(e){var t=this;this.$confirm("确定删除代理 ".concat(e.account,"?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(m["b"])(e.id).then((function(e){t.$message.success("删除成功！")})).catch((function(e){t.$message.error("删除失败！")})).finally((function(e){t.getTableData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},delChannel:function(e){var t=this,n=this.dicFilter(e.payWayDictId);this.$confirm("确定删除通道 ".concat(n,"?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["c"])(e.id).then((function(e){t.$message.success("删除成功！")})).catch((function(e){t.$message.error("删除失败！")})).finally((function(e){t.getAllchannel()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},dicFilter:function(e){return this.payWay.find((function(t){return t.id==e})).dictValueDisplayName},sizeChange:function(e){this.pageSize=e,this.getTableData()},dsizeChange:function(e){this.dpageSize=e,this.getAllchannel()},sortChange:function(e){this.tld_asc=e.order,this.getTableData()}}},j=O,x=(n("e49d"),Object(g["a"])(j,r,o,!1,null,"47dca1d4",null));t["default"]=x.exports}}]);