/*! For license information please see main.7097ad22.js.LICENSE.txt */
(()=>{"use strict";var e={43:(e,t,r)=>{e.exports=r(288)},288:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function b(){}function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=x.prototype;var v=y.prototype=new b;v.constructor=y,m(v,x.prototype),v.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},j=Object.prototype.hasOwnProperty;function C(e,t,n,i,a,o){return n=o.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:o}}function _(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var A=/\/+/g;function S(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function O(){}function E(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c,l,d=!1;if(null===e)d=!0;else switch(s){case"bigint":case"string":case"number":d=!0;break;case"object":switch(e.$$typeof){case r:case n:d=!0;break;case u:return E((d=e._init)(e._payload),t,i,a,o)}}if(d)return o=o(e),d=""===a?"."+S(e,0):a,w(o)?(i="",null!=d&&(i=d.replace(A,"$&/")+"/"),E(o,t,i,"",function(e){return e})):null!=o&&(_(o)&&(c=o,l=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(A,"$&/")+"/")+d,o=C(c.type,l,void 0,0,0,c.props)),t.push(o)),1;d=0;var f,h=""===a?".":a+":";if(w(e))for(var m=0;m<e.length;m++)d+=E(a=e[m],t,i,s=h+S(a,m),o);else if("function"===typeof(m=null===(f=e)||"object"!==typeof f?null:"function"===typeof(f=p&&f[p]||f["@@iterator"])?f:null))for(e=m.call(e),m=0;!(a=e.next()).done;)d+=E(a=a.value,t,i,s=h+S(a,m++),o);else if("object"===s){if("function"===typeof e.then)return E(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(O,O):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return d}function N(e,t,r){if(null==e)return e;var n=[],i=0;return E(e,n,"","",function(e){return t.call(r,e,i++)}),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function I(){}t.Children={map:N,forEach:function(e,t,r){N(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=x,t.Fragment=i,t.Profiler=o,t.PureComponent=y,t.StrictMode=a,t.Suspense=d,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var n=m({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!j.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(n[a]=t[a]);var a=arguments.length-2;if(1===a)n.children=r;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];n.children=o}return C(e.type,i,void 0,0,0,n)},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,r){var n,i={},a=null;if(null!=t)for(n in void 0!==t.key&&(a=""+t.key),t)j.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(i[n]=t[n]);var o=arguments.length-2;if(1===o)i.children=r;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===i[n]&&(i[n]=o[n]);return C(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,r={};k.T=r;try{var n=e(),i=k.S;null!==i&&i(r,n),"object"===typeof n&&null!==n&&"function"===typeof n.then&&n.then(I,T)}catch(a){T(a)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,r){return k.H.useActionState(e,t,r)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,r){var n=k.H;if("function"===typeof r)throw Error("useEffect CRUD overload is not enabled in this build of React.");return n.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,r){return k.H.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,r){return k.H.useReducer(e,t,r)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,r){return k.H.useSyncExternalStore(e,t,r)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.1"},579:(e,t,r)=>{e.exports=r(799)},672:(e,t,r)=>{var n=r(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=c.T,r=o.p;try{if(c.T=null,o.p=2,e)return e()}finally{c.T=t,o.p=r,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var r=t.as,n=l(r,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:a}):"script"===r&&o.d.X(e,{crossOrigin:n,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=l(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var r=t.as,n=l(r,t.crossOrigin);o.d.L(e,r,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var r=l(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return c.H.useFormState(e,t,r)},t.useFormStatus=function(){return c.H.useHostTransitionStatus()},t.version="19.1.1"},799:(e,t)=>{var r=Symbol.for("react.transitional.element");function n(e,t,n){var i=null;if(void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in n={},t)"key"!==a&&(n[a]=t[a]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:i,ref:void 0!==t?t:null,props:n}}Symbol.for("react.fragment"),t.jsx=n,t.jsxs=n},950:(e,t,r)=>{!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=r(672)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.p="/";var n=r(43),i=r(950);var a=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)===0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var a=105===e.charCodeAt(1)&&64===e.charCodeAt(0);i.insertRule(e,a?0:i.cssRules.length)}catch(o){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}();const o=function(e){function t(e,n,c,l,u){for(var p,h,m,g,v,k=0,j=0,C=0,_=0,A=0,T=0,z=m=p=0,H=0,D=0,P=0,M=0,L=c.length,U=L-1,G="",B="",F="",W="";H<L;){if(h=c.charCodeAt(H),H===U&&0!==j+_+C+k&&(0!==j&&(h=47===j?10:47),_=C=k=0,L++,U++),0===j+_+C+k){if(H===U&&(0<D&&(G=G.replace(f,"")),0<G.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:G+=c.charAt(H)}h=59}switch(h){case 123:for(p=(G=G.trim()).charCodeAt(0),m=1,M=++H;H<L;){switch(h=c.charCodeAt(H)){case 123:m++;break;case 125:m--;break;case 47:switch(h=c.charCodeAt(H+1)){case 42:case 47:e:{for(z=H+1;z<U;++z)switch(c.charCodeAt(z)){case 47:if(42===h&&42===c.charCodeAt(z-1)&&H+2!==z){H=z+1;break e}break;case 10:if(47===h){H=z+1;break e}}H=z}}break;case 91:h++;case 40:h++;case 34:case 39:for(;H++<U&&c.charCodeAt(H)!==h;);}if(0===m)break;H++}if(m=c.substring(M,H),0===p&&(p=(G=G.replace(d,"").trim()).charCodeAt(0)),64===p){switch(0<D&&(G=G.replace(f,"")),h=G.charCodeAt(1)){case 100:case 109:case 115:case 45:D=n;break;default:D=R}if(M=(m=t(n,D,m,h,u+1)).length,0<I&&(v=s(3,m,D=r(R,G,P),n,O,S,M,h,u,l),G=D.join(""),void 0!==v&&0===(M=(m=v.trim()).length)&&(h=0,m="")),0<M)switch(h){case 115:G=G.replace(w,o);case 100:case 109:case 45:m=G+"{"+m+"}";break;case 107:m=(G=G.replace(x,"$1 $2"))+"{"+m+"}",m=1===N||2===N&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=G+m,112===l&&(B+=m,m="")}else m=""}else m=t(n,r(n,G,P),m,l,u+1);F+=m,m=P=D=z=p=0,G="",h=c.charCodeAt(++H);break;case 125:case 59:if(1<(M=(G=(0<D?G.replace(f,""):G).trim()).length))switch(0===z&&(p=G.charCodeAt(0),45===p||96<p&&123>p)&&(M=(G=G.replace(" ",":")).length),0<I&&void 0!==(v=s(1,G,n,e,O,S,B.length,l,u,l))&&0===(M=(G=v.trim()).length)&&(G="\0\0"),p=G.charCodeAt(0),h=G.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){W+=G+c.charAt(H);break}default:58!==G.charCodeAt(M-1)&&(B+=i(G,p,h,G.charCodeAt(2)))}P=D=z=p=0,G="",h=c.charCodeAt(++H)}}switch(h){case 13:case 10:47===j?j=0:0===1+p&&107!==l&&0<G.length&&(D=1,G+="\0"),0<I*$&&s(0,G,n,e,O,S,B.length,l,u,l),S=1,O++;break;case 59:case 125:if(0===j+_+C+k){S++;break}default:switch(S++,g=c.charAt(H),h){case 9:case 32:if(0===_+k+j)switch(A){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===_+j+k&&(D=P=1,g="\f"+g);break;case 108:if(0===_+j+k+E&&0<z)switch(H-z){case 2:112===A&&58===c.charCodeAt(H-3)&&(E=A);case 8:111===T&&(E=T)}break;case 58:0===_+j+k&&(z=H);break;case 44:0===j+C+_+k&&(D=1,g+="\r");break;case 34:case 39:0===j&&(_=_===h?0:0===_?h:_);break;case 91:0===_+j+C&&k++;break;case 93:0===_+j+C&&k--;break;case 41:0===_+j+k&&C--;break;case 40:if(0===_+j+k){if(0===p)if(2*A+3*T===533);else p=1;C++}break;case 64:0===j+C+_+k+z+m&&(m=1);break;case 42:case 47:if(!(0<_+k+C))switch(j){case 0:switch(2*h+3*c.charCodeAt(H+1)){case 235:j=47;break;case 220:M=H,j=42}break;case 42:47===h&&42===A&&M+2!==H&&(33===c.charCodeAt(M+2)&&(B+=c.substring(M,H+1)),g="",j=0)}}0===j&&(G+=g)}T=A,A=h,H++}if(0<(M=B.length)){if(D=n,0<I&&(void 0!==(v=s(2,B,D,e,O,S,M,l,u,l))&&0===(B=v).length))return W+B+F;if(B=D.join(",")+"{"+B+"}",0!==N*E){switch(2!==N||a(B,2)||(E=0),E){case 111:B=B.replace(y,":-moz-$1")+B;break;case 112:B=B.replace(b,"::-webkit-input-$1")+B.replace(b,"::-moz-$1")+B.replace(b,":-ms-input-$1")+B}E=0}}return W+B+F}function r(e,t,r){var i=t.trim().split(m);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===N||2===N&&a(c,1)?"-webkit-"+c+c:c}if(0===N||2===N&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(A,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return p.test(o)?o.replace(u,":-webkit-")+o.replace(u,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(v,"tb");break;case 232:c=o.replace(v,"tb-rl");break;case 220:c=o.replace(v,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(j,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(j,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===_.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),z(2!==t?n:n.replace(C,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,o,s,c,d){for(var f,u=0,p=t;u<I;++u)switch(f=T[u].call(l,e,p,r,n,i,a,o,s,c,d)){case void 0:case!1:case!0:case null:break;default:p=f}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(z=null,e?"function"!==typeof e?N=1:(N=2,z=e):N=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<I){var i=s(-1,r,n,n,O,S,0,0,0,0);void 0!==i&&"string"===typeof i&&(r=i)}var a=t(R,n,r,0,0);return 0<I&&(void 0!==(i=s(-2,a,n,n,O,S,a.length,0,0,0))&&(a=i)),E=0,S=O=1,a}var d=/^\0+/g,f=/[\0\r\f]/g,u=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,b=/::(place)/g,y=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,j=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,_=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,S=1,O=1,E=0,N=1,R=[],T=[],I=0,z=null,$=0;return l.use=function e(t){switch(t){case void 0:case null:I=T.length=0;break;default:if("function"===typeof t)T[I++]=t;else if("object"===typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else $=0|!!t}return e},l.set=c,void 0!==e&&c(e),l};var s="/*|*/",c=s+"}";function l(e){e&&d.current.insert(e+"}")}var d={current:null},f=function(e,t,r,n,i,a,o,f,u,p){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return d.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===f)return t+s;break;case 3:switch(f){case 102:case 112:return d.current.insert(r[0]+t),"";default:return t+(0===p?s:"")}case-2:t.split(c).forEach(l)}};const u=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n=new o(t);var i,s={};i=e.container||document.head;var c,l=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(l,function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach(function(e){s[e]=!0}),e.parentNode!==i&&i.appendChild(e)}),n.use(e.stylisPlugins)(f),c=function(e,t,r,i){var a=t.name;d.current=r,n(e,t.styles),i&&(u.inserted[a]=!0)};var u={key:r,sheet:new a({key:r,container:i,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:s,registered:{},insert:c};return u};const p=function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)};const h={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var m=/[A-Z]|^ms/g,g=/_EMO_([^_]+?)_([^]*?)_EMO_/g,x=function(e){return 45===e.charCodeAt(1)},b=function(e){return null!=e&&"boolean"!==typeof e},y=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}(function(e){return x(e)?e:e.replace(m,"-$&").toLowerCase()}),v=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(g,function(e,t,r){return k={name:t,styles:r,next:k},t})}return 1===h[e]||x(e)||"number"!==typeof t||0===t?t:t+"px"};function w(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return k={name:r.name,styles:r.styles,next:k},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)k={name:i.name,styles:i.styles,next:k},i=i.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=w(e,t,r[i],!1);else for(var a in r){var o=r[a];if("object"!==typeof o)null!=t&&void 0!==t[o]?n+=a+"{"+t[o]+"}":b(o)&&(n+=y(a)+":"+v(a,o)+";");else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=w(e,t,o,!1);switch(a){case"animation":case"animationName":n+=y(a)+":"+s+";";break;default:n+=a+"{"+s+"}"}}else for(var c=0;c<o.length;c++)b(o[c])&&(n+=y(a)+":"+v(a,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=k,o=r(e);return k=a,w(e,t,o,n)}}if(null==t)return r;var s=t[r];return void 0===s||n?r:s}var k,j=/label:\s*([^\s;\n{]+)\s*;/g;var C=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,i="";k=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,i+=w(r,t,a,!1)):i+=a[0];for(var o=1;o<e.length;o++)i+=w(r,t,e[o],46===i.charCodeAt(i.length-1)),n&&(i+=a[o]);j.lastIndex=0;for(var s,c="";null!==(s=j.exec(i));)c+="-"+s[1];return{name:p(i)+c,styles:i,next:k}},_=(Object.prototype.hasOwnProperty,(0,n.createContext)("undefined"!==typeof HTMLElement?u():null)),A=(0,n.createContext)({}),S=(_.Provider,function(e){var t=function(t,r){return(0,n.createElement)(_.Consumer,null,function(n){return e(t,n,r)})};return(0,n.forwardRef)(t)});const O=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return C(t)};var E=function e(t){for(var r=t.length,n=0,i="";n<r;n++){var a=t[n];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))o=e(a);else for(var s in o="",a)a[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=a}o&&(i&&(i+=" "),i+=o)}}return i};var N=function(){return null},R=(S(function(e,t){return(0,n.createElement)(A.Consumer,null,function(r){var i=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=C(r,t.registered);return function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var i=t;do{e.insert("."+n,i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,i,!1),t.key+"-"+i.name},a={css:i,cx:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(e,t,r){var n=[],i=function(e,t,r){var n="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "}),n}(e,n,r);return n.length<2?r:i+t(n)}(t.registered,i,E(r))},theme:r},o=e.children(a);var s=(0,n.createElement)(N,null);return(0,n.createElement)(n.Fragment,null,s,o)})}),r(579));const T=O`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(181, 8, 8, 0.38) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,I=()=>(0,R.jsx)("div",{css:T,className:"overlay"}),z=O`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`,$=e=>{let{children:t}=e;return(0,R.jsx)("div",{css:z,className:"container",children:t})},H=r.p+"static/media/metamorphicLogo.7ecbd1c2b89ac13b3b68.png",D=()=>(0,R.jsx)("img",{className:"logo",src:H,alt:"logo",height:"120",style:{borderRadius:"2.5rem"}}),P=O`
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0 22px;
    position: relative;
    transition: color 700ms ease-in-out;
    &::after {
      position: absolute;
      content: "";
      background: #ff1414;
      width: 100%;
      height: 3px;
      bottom: -33px;
      left: 0;
      opacity: 0;
      transition: opacity 700ms ease-in-out;
    }
    &:hover {
      color: #ff1414;
      &::after {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1225px) {
    padding: 80px 40px;
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    min-height: 96vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    background: #060706;
    transition: left 600ms ease-in-out, opacity 600ms ease-in-out;
    &.hidden {
      left: -500px;
      opacity: 0;
    }
    a {
      margin: 0 0 20px 0;
      font-size: 25px;
      text-align: left;
      user-select: none;
      &:hover {
        color: #fff;
        &::after {
          opacity: 0;
        }
      }
    }
  }
`,M=e=>{let{openMenu:t}=e;return(0,R.jsxs)("div",{css:P,className:t?"menu":"hidden",children:[(0,R.jsx)("a",{href:"#home",children:"home"}),(0,R.jsx)("a",{href:"#about",children:"about"}),(0,R.jsx)("a",{href:"#gallery",children:"gallery"}),(0,R.jsx)("a",{href:"#pages",children:"pages"}),(0,R.jsx)("a",{href:"#blog",children:"blog"}),(0,R.jsx)("a",{href:"#contact",children:"contact"})]})},L=O`
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  padding: 15px 44px;
  background: #ff1414;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  transition: all 500ms ease-in-out;
`,U=e=>{let{text:t}=e;return(0,R.jsx)("a",{href:"#/",css:L,className:"btn",children:t})},G=O`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 40px 0;
  .container {
    max-width: 78%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      cursor: pointer;
    }
    #burgerMenu {
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 1225px) {
    .container {
      max-width: 90%;
      .btn {
        display: none;
      }
      #burgerMenu {
        display: block;
      }
    }
  }
`,B=()=>{const[e,t]=(0,n.useState)(!1);return(0,R.jsx)("nav",{css:G,children:(0,R.jsxs)($,{children:[(0,R.jsx)(D,{}),(0,R.jsx)(M,{openMenu:e}),(0,R.jsx)("i",{onClick:()=>t(!e),id:"burgerMenu",className:e?"fas fa-times fa-lg":"fas fa-align-right fa-lg"})]})})},F=()=>(0,R.jsxs)("div",{className:"mainInfo",children:[(0,R.jsx)("h2",{children:"Your metamorphosis starts here"}),(0,R.jsx)("p",{children:"Change your life one rep at a time."})]}),W=()=>(0,R.jsxs)("section",{className:"main",id:"home",children:[(0,R.jsx)(I,{}),(0,R.jsx)(B,{}),(0,R.jsx)($,{children:(0,R.jsx)(F,{})})]}),V=O`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.7;
`,q=()=>(0,R.jsx)("div",{css:V,className:"imgOverlay"}),Y=O`
  z-index: 3;
  color: #fff;
  position: relative;
  width: 100%;
  max-width: 380px;
  text-align: center;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
  }
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.6;
    margin: 18px 0 26px 0;
  }
  .btn {
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`,K=e=>{let{title:t,description:r}=e;return(0,R.jsxs)("div",{css:Y,className:"cardInfo",children:[(0,R.jsx)("h2",{children:t}),(0,R.jsx)("p",{children:r})]})},X=O`
  width: 100%;
  max-width: 50%;
  padding: 200px 0;
  position: relative;
  background-size: 100% 100%;
  &:hover {
    background-size: 105% 105%;
  }
  @media(max-width: 1000px) {
    max-width: 100%;
  }
`,Z=e=>{let{title:t,description:r}=e;return(0,R.jsxs)("div",{css:X,className:"card",children:[(0,R.jsx)(q,{}),(0,R.jsx)(K,{title:t,description:r})]})},J=O`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
    .card {
      background: url('${r.p+"static/media/forGirl.540b671c15bac461bbb3.jpg"}') no-repeat center/cover;
      background-size: 100% 100%;
      transition: all 300ms ease-in-out;
      &:hover {
        background-size: 105% 105%;
      }
      &:last-of-type {
        background: url('${r.p+"static/media/healthyMeals.706badd9128708d256e2.jpg"}') no-repeat center/cover;
        background-size: 100% 100%;
        &:hover{
            background-size: 105% 105%;
        }
      }
    }
  }
  @media(max-width: 1000px){
    .container{
      flex-direction: column;
      align-items: center;
    }
  }
`,Q=()=>(0,R.jsx)("section",{css:J,className:"joinUs",id:"blog",children:(0,R.jsxs)($,{children:[(0,R.jsx)(Z,{title:"Personalized programs",description:"Professional guidance to help you achieve your fitness goals with tailored workouts for women of all ages."}),(0,R.jsx)(Z,{title:"Nutritional guidance",description:"Expert advice on nutrition plans designed to complement your fitness routine and promote overall well-being."})]})}),ee=O`
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  h2 {
    font-size: 40px;
    line-height: 1;
    color: #fff;
  }
  p {
    font-size: 16px;
    color: #aab1b7;
    line-height: 1.5;
    margin: 10px 0 0 0;
  }
`,te=e=>{let{title:t,desc:r}=e;return(0,R.jsxs)("div",{css:ee,className:"title",children:[(0,R.jsx)("h2",{children:t}),(0,R.jsx)("p",{children:r})]})},re=O`
  width: 100%;
  max-width: 25%;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  h3 {
    font-size: 24px;
    line-height: 1;
    margin: 24px 0 0 0;
  }
  p {
    margin: 12px 0 0 0;
    line-height: 1.6;
    color: #aab1b7;
  }
  @media(max-width: 579px){
    max-width: 100%;
    margin-bottom: 50px;
    p{
      font-size: 14px;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    max-width: 47%;
    margin-bottom: 50px;
  }
`,ne=e=>{let{cardImg:t,cardTitle:r,cardDescription:n}=e;return(0,R.jsxs)("div",{css:re,className:"featuresCard",children:[(0,R.jsx)("img",{src:t,alt:"icon"}),(0,R.jsx)("h3",{children:r}),(0,R.jsx)("p",{children:n})]})};const ie=[{cardImg:r.p+"static/media/iconOne.92e37e419c1c4fe2c02635cb1c8b5eb0.svg",cardTitle:"Build strength",cardDescription:"The strength you build in the gym will begin to reflect in everyday life!"},{cardImg:r.p+"static/media/iconTwo.c4a826b219fbf8c40f4d7eedaef03523.svg",cardTitle:"Build discipline",cardDescription:"Discipline is the bridge between goals and accomplishment."},{cardImg:r.p+"static/media/iconThree.b8c301f9dbf15d93615b9a7fe8dbbc2c.svg",cardTitle:"Build confidence",cardDescription:"Confidence comes not from always being right but from not fearing to be wrong."},{cardImg:r.p+"static/media/iconFour.ca886c08daa16af9cc857608717ce6fb.svg",cardTitle:"Build a new you",cardDescription:"You'll be amazed at how much transformation 1 year can bring! All it takes is that first step!"}],ae=O`
  width: 100%;
  padding: 170px 0;
  background: #000;
  .container {
    display: flex;
    padding: 80px 0 0 0;
  }
  @media (max-width: 579px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 640px;
    }
  }
`,oe=()=>(0,R.jsxs)("section",{css:ae,className:"features",id:"about",children:[(0,R.jsx)(te,{title:"With me, you will..."}),(0,R.jsx)($,{children:ie.map((e,t)=>(0,R.jsx)(ne,{cardImg:e.cardImg,cardTitle:e.cardTitle,cardDescription:e.cardDescription},t))})]}),se=(O`
  width: 100%;
  max-width: 560px;
  color: #fff;
  h3 {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.3;
  }
  h2 {
    font-size: 80px;
    font-weight: 500;
    line-height: 1;
    color: #ff1414;
    margin: 20px 0 24px 0;
  }
  p {
    line-height: 1.7;
  }
  .btn {
    margin: 40px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
  @media (max-width: 800px) {
    p {
      font-size: 16px;
      br {
        display: none;
      }
    }
  }
`,O`
  width: 100%;
  padding: 200px 0;
  background: url('${r.p+"static/media/offerBg.11613aa4761de2c52d8a.png"}') no-repeat center/cover;
  .container {
    display: flex;
    justify-content: flex-end;
  }
  @media(max-width: 800px) {
    .container{
      justify-content: center;
      max-width: 90%;
    }
  }
`,O`
  padding-bottom: 30px;
  border-bottom: 1px solid #313131;
  h3 {
    font-size: 28px;
    color: #fff;
    line-height: 1;
  }
  h5 {
    color: #ff1414;
    font-size: 26px;
    margin: 14px 0 0 0;
    line-height: 1;
  }
`,O`
  padding-top: 30px;
  p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 26px;
    &:nth-child(3),
    &:nth-child(4) {
      color: #7a838b;
    }
  }
  .btn {
    margin: 20px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`,O`
  width: 100%;
  max-width: 32%;
  padding: 40px 0;
  background: #1a1a1a;
  border: 1px solid transparent;
  text-align: center;
  cursor: pointer;
  transition: border 600ms ease-in-out;
  &:hover {
    border: 1px solid #ff1414;
  }
  @media (max-width: 799px) {
    max-width: 520px;
    margin-bottom: 26px;
  }
  @media(min-width: 800px) and (max-width: 1189px) {
    max-width: 48%;
    margin-bottom: 26px;
  }
`,O`
  width: 100%;
  padding: 140px 0;
  background: #000;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 650px) {
    .title {
      padding: 0 40px;
    }
  }
  @media (max-width: 799px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 800px) and (max-width: 1189px) {
    .container {
      max-width: 90%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1190px) {
    .container {
      max-width: 90%;
    }
  }
`,O`
  width: 100%;
  max-width: 35%;
  height: 480px;
  position: relative;
  cursor: pointer;
  &:hover {
    .overlay {
      opacity: 1;
      transition: opacity 700ms ease-in-out;
    }
  }
  .overlay {
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`,r.p,r.p,r.p,r.p,r.p,r.p,O`
  .container {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    .galleryImg {
      &:nth-child(3),
      &:nth-child(4) {
        width: 100%;
        max-width: 30%;
      }
    }
  }
  @media (max-width: 769px) {
    .container {
      .galleryImg {
        max-width: 100%;
        &:nth-child(3),
        &:nth-child(4) {
          max-width: 100%;
        }
      }
    }
  }
  @media (min-width: 770px) and (max-width: 1000px) {
    .container {
      .galleryImg {
        max-width: 50%;
        &:nth-child(3),
        &:nth-child(4) {
          max-width: 50%;
        }
      }
    }
  }
`,r.p+"static/media/secondBackground.810ab67ed297d9f8f51f.jpg"),ce=()=>(0,R.jsxs)("div",{className:"socialIcons",children:[(0,R.jsx)("div",{className:"icon",children:(0,R.jsx)("i",{className:"fab fa-facebook-f"})}),(0,R.jsx)("div",{className:"icon",children:(0,R.jsx)("i",{className:"fab fa-twitter"})}),(0,R.jsx)("div",{className:"icon",children:(0,R.jsx)("i",{className:"fab fa-instagram"})})]}),le=()=>(0,R.jsx)("div",{className:"cardOverlay",children:(0,R.jsx)(ce,{})}),de=e=>{let{trainerName:t,trainerGender:r,trainerImg:n}=e;return(0,R.jsxs)("div",{className:"trainerCard",children:[(0,R.jsxs)("div",{className:"trainerImg",children:[(0,R.jsx)(le,{}),(0,R.jsx)("img",{src:n,alt:"trainer"})]}),(0,R.jsx)("h2",{children:t}),(0,R.jsx)("p",{children:r})]})},fe=r.p+"static/media/aboutMe.7112894c47cc914a01b0.jpg",ue=()=>(0,R.jsxs)("section",{className:"trainers",id:"pages",style:{background:`url(${se}) no-repeat center/cover`},children:[(0,R.jsx)(q,{}),(0,R.jsxs)($,{children:[(0,R.jsx)(te,{title:"About Me",desc:"A small hand full of years ago, I was in a place where a number of you may be in right now. I had found myself points away from being pre-diabetic and was nearly 200Lb at my heaviest. Barely into my mid-twenties, I knew I had to make a change. I had my whole life ahead of me! One day I stepped into the gym, no idea where to begin and quickly fell in love. My metamorphosis began in 2021. Shortly after, I knew with every fiber of my being I was meant to help others with their own! Let's get to work!"}),(0,R.jsx)(de,{trainerName:"Haylea Brown",trainerGender:"Personal Trainer",trainerImg:fe})]})]}),pe=(O`
  width: 100%;
  padding: 240px 0;
  text-align: center;
  background: url('${r.p+"static/media/bigOfferBg.073a432b43e9afdad558.webp"}') no-repeat center/cover;
  color: #fff;
  h2{
    font-size: 50px;
    font-weight: 900;
  }
  .btn{
    margin: 30px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`,O`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 140px 0;
  display: flex;
  justify-content: space-between;
  .footerCard {
    width: 100%;
    max-width: 24%;
    color: #aab1b7;
    &:nth-child(2),
    &:nth-child(3) {
      max-width: 28%;
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 18px;
      }
    }
    &:nth-child(3) {
      p {
        margin: 24px 0 0 0;
      }
    }
    h2 {
      font-size: 24px;
      margin-bottom: 40px;
      color: #ff1414;
    }
    p {
      line-height: 1.5;
      margin-bottom: 8px;
    }
    a {
      text-decoration: none;
      display: inline-block;
      color: #aab1b7;
      margin-bottom: 8px;
      transition: color 600ms ease-in-out;
      &:hover {
        color: #ff1414;
      }
    }
    .footerSocials {
      width: 100%;
      padding: 40px 0 0 0;
      display: flex;
      align-items: center;
      i {
        margin-right: 30px;
        cursor: pointer;
        transition: color 600ms ease-in-out;
        &:hover {
          color: #ff1414;
        }
      }
    }
    .inputWrap {
      display: flex;
      position: relative;
      input {
        padding: 16px 0 16px 16px;
        width: 100%;
        border-radius: 50px;
        border: none;
        outline: none;
      }
      .btn {
        padding: 10px 20px;
        border-radius: 50px;
        position: absolute;
        top: 50%;
        right: 6px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      max-width: 450px;
      margin-bottom: 40px;
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 450px;
      }
    }
  }
  @media (min-width: 641px) and (max-width: 915px) {
    flex-wrap: wrap;
    .footerCard {
      max-width: 45%;
      &:first-of-type {
        margin-bottom: 40px;
      }
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 45%;
      }
    }
  }
  @media (max-width: 916px) {
    .footerCard {
      p {
        font-size: 14px;
      }
      &:first-of-type {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 1200px) {
    max-width: 90%;
  }
`),he=()=>(0,R.jsxs)("div",{className:"wrap",css:pe,children:[(0,R.jsxs)("div",{className:"footerCard",children:[(0,R.jsx)("h2",{children:"Personal training by Halyea"}),(0,R.jsxs)("p",{children:["Text or call: ",(0,R.jsx)("a",{href:"#/",children:"(214) 407-4724"})]}),(0,R.jsx)("a",{href:"#/",children:"getfitwithhaylea@gmail.com"}),(0,R.jsx)("div",{className:"footerSocials",children:(0,R.jsx)("a",{href:"https://www.instagram.com/haylea.brown/",children:"Find me on Instagram"})})]}),(0,R.jsxs)("div",{className:"footerCard",children:[(0,R.jsx)("h2",{children:"Useful Links"}),(0,R.jsx)("a",{href:"#/",children:"About"}),(0,R.jsx)("a",{href:"#/",children:"Gallery"}),(0,R.jsx)("a",{href:"#/",children:"Contact"})]}),(0,R.jsxs)("div",{className:"footerCard",children:[(0,R.jsx)("h2",{children:"Subscribe"}),(0,R.jsxs)("div",{className:"inputWrap",children:[(0,R.jsx)("input",{type:"email",placeholder:"Enter your mail"}),(0,R.jsx)(U,{text:"Subscribe"})]})]})]}),me=()=>(0,R.jsxs)("footer",{id:"contact",className:"footer",children:[(0,R.jsx)(he,{}),(0,R.jsx)($,{children:(0,R.jsxs)("p",{className:"footer-text",children:["Copyright ",(new Date).getFullYear(),", All rights reserved to Halyea Brown"]})})]}),ge=(r.p,r.p,r.p,()=>(0,R.jsxs)("div",{className:"App",children:[(0,R.jsx)(W,{}),(0,R.jsx)(Q,{}),(0,R.jsx)(oe,{}),(0,R.jsx)(ue,{}),(0,R.jsx)(me,{})]}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.render((0,R.jsx)(n.StrictMode,{children:(0,R.jsx)(ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})})();
//# sourceMappingURL=main.7097ad22.js.map