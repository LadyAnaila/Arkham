/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-boxshadow-boxsizing-csscolumns-cssgrid_cssgridlegacy-cssremunit-cssvalid-flexbox-fontface-overflowscrolling-setclasses !*/
var _typeof=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e,t,n,r){var o=function(e,t){return(void 0===e?"undefined":_typeof(e))===t},s=function(e,t){return!!~(""+e).indexOf(t)},i=function(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)},a=function(e,t,r,o){var s,a,l,u,d,f="modernizr",c=i("div"),p=((d=n.body)||((d=i(b?"svg":"body")).fake=!0),d);if(parseInt(r,10))for(;r--;)(l=i("div")).id=o?o[r]:f+(r+1),c.appendChild(l);return(s=i("style")).type="text/css",s.id="s"+f,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=t(c,e),p.fake&&p.parentNode?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):c.parentNode.removeChild(c),!!a},l=function(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")},u=function(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(l(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var s=[];o--;)s.push("("+l(e[o])+":"+n+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===function(e,n,r){var o;if("getComputedStyle"in t){o=getComputedStyle.call(t,e,n);var s=t.console;null!==o?r&&(o=o.getPropertyValue(r)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else o=!n&&e.currentStyle&&e.currentStyle[r];return o}(e,null,"position")}))}return r},d=function(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")},f=function(e,t,n,a){function l(){c&&(delete T.style,delete T.modElem)}if(a=!o(a,"undefined")&&a,!o(n,"undefined")){var f=u(e,n);if(!o(f,"undefined"))return f}for(var c,p,m,h,g,y=["modernizr","tspan","samp"];!T.style&&y.length;)c=!0,T.modElem=i(y.shift()),T.style=T.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=T.style[h],s(h,"-")&&(h=d(h)),T.style[h]!==r){if(a||o(n,"undefined"))return l(),"pfx"!==t||h;try{T.style[h]=n}catch(e){}if(T.style[h]!==g)return l(),"pfx"!==t||h}return l(),!1},c=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?f(a,t,r,s):function(e,t,n){var r;for(var s in e)if(e[s]in t)return!1===n?e[s]:(r=t[e[s]],o(r,"function")?c(r,n||t):r);return!1}(a=(e+" "+z.join(i+" ")+i).split(" "),t,n)},m=function(e,t,n){return p(e,r,r,t,n)},h=[],g={_version:"3.12.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){h.push({name:e,fn:t,options:n})},addAsyncTest:function(e){h.push({name:null,fn:e})}},y=function(){};y.prototype=g,y=new y;var v=[],w=n.documentElement,b="svg"===w.nodeName.toLowerCase(),x="Moz O ms Webkit",S=g._config.usePrefixes?x.split(" "):[];g._cssomPrefixes=S;var C={elem:i("modernizr")};y._q.push((function(){delete C.elem}));var T={style:C.elem.style};y._q.unshift((function(){delete T.style}));var z=g._config.usePrefixes?x.toLowerCase().split(" "):[];g._domPrefixes=z,g.testAllProps=p,g.testAllProps=m,y.addTest("backgroundsize",m("backgroundSize","100%",!0)),y.addTest("boxshadow",m("boxShadow","1px 1px",!0)),y.addTest("boxsizing",m("boxSizing","border-box",!0)&&(n.documentMode===r||n.documentMode>7)),function(){y.addTest("csscolumns",(function(){var e=!1,t=m("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e}));for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=m("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||m(n[r])),y.addTest("csscolumns."+e,t)}(),y.addTest("cssgridlegacy",m("grid-columns","10px",!0)),y.addTest("cssgrid",m("grid-template-rows","none",!0)),y.addTest("flexbox",m("flexBasis","1px",!0));var _=g.testStyles=a;!function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}()?_('@font-face {font-family:"font";src:url("https://")}',(function(e,t){var r=n.getElementById("smodernizr"),o=r.sheet||r.styleSheet,s=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(s)&&0===s.indexOf(t.split(" ")[0]);y.addTest("fontface",i)})):y.addTest("fontface",!1),y.addTest("overflowscrolling",m("overflowScrolling","touch",!0)),y.addTest("cssremunit",(function(){var e=i("a").style;try{e.fontSize="3rem"}catch(e){}return/rem/.test(e.fontSize)})),y.addTest("cssvalid",(function(){return _("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",(function(e){var t=i("input");return e.appendChild(t),t.clientWidth>10}))})),function(){var e,t,n,r,s,i;for(var a in h)if(h.hasOwnProperty(a)){if(e=[],(t=h[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?y[i[0]]=r:(y[i[0]]&&(!y[i[0]]||y[i[0]]instanceof Boolean)||(y[i[0]]=new Boolean(y[i[0]])),y[i[0]][i[1]]=r),v.push((r?"":"no-")+i.join("-"))}}(),function(e){var t=w.className,n=y._config.classPrefix||"";if(b&&(t=t.baseVal),y._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}y._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),b?w.className.baseVal=t:w.className=t)}(v),delete g.addTest,delete g.addAsyncTest;for(var k=0;k<y._q.length;k++)y._q[k]();e.Modernizr=y}(window,window,document);
//# sourceMappingURL=index.6b854a57.js.map
