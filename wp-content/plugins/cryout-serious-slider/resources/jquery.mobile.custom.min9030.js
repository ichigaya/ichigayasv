/*! jQuery Mobile v1.5.0-rc1 | Copyright jQuery Foundation, Inc. | jquery.org/license */

!function(e,t,n){"function"==typeof define&&define.amd?define(["jquery"],function(i){return n(i,e,t),i.mobile}):n(e.jQuery,e,t)}(this,document,function(e,t,n,i){!function(t){"function"==typeof define&&define.amd?define("events/scroll",["jquery"],t):t(e)}(function(e){return e.each(["scrollstart","scrollstop"],function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function t(t,i){var a=t.type;n=i,t.type=n?"scrollstart":"scrollstop",e.event.dispatch.call(o,t),t.type=a}var n,i,o=this,a=e(o),r=e.event.special.scrollstart.handler=function(o){e.event.special.scrollstart.enabled&&(n||t(o,!0),clearTimeout(i),i=setTimeout(function(){t(o,!1)},50))};a.on("touchmove scroll",r)},teardown:function(){e(this).off("touchmove scroll",e.event.special.scrollstart.handler)}},e.each({scrollstop:"scrollstart"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special}),function(t){"function"==typeof define&&define.amd?define("vmouse",["jquery"],t):t(e)}(function(e){function t(e){for(;e&&void 0!==e.originalEvent;)e=e.originalEvent;return e}function o(n,o){var a,r,s,c,u,l,d,h,f,p=n.type;if(n=e.Event(n),n.type=o,a=n.originalEvent,r=k,p.search(/^(mouse|click)/)>-1&&(r=x),a)for(d=r.length;d;)c=r[--d],n[c]=a[c];if(p.search(/mouse(down|up)|click/)>-1&&!n.which&&(n.which=1),-1!==p.search(/^touch/)&&(s=t(a),p=s.touches,u=s.changedTouches,l=p&&p.length?p[0]:u&&u.length?u[0]:i))for(h=0,f=P.length;h<f;h++)c=P[h],n[c]=l[c];return n}function a(t){for(var n,i,o={};t;){n=e.data(t,E);for(i in n)n[i]&&(o[i]=o.hasVirtualBinding=!0);t=t.parentNode}return o}function r(t,n){for(var i;t;){if((i=e.data(t,E))&&(!n||i[n]))return t;t=t.parentNode}return null}function s(){B=!1}function c(){B=!0}function u(){X=0,O.length=0,W=!1,c()}function l(){s()}function d(){S&&(clearTimeout(S),S=0)}function h(){d(),S=setTimeout(function(){S=0,u()},e.vmouse.resetTimerDuration)}function f(t,n,i){var a;return(i&&i[t]||!i&&r(n.target,t))&&(a=o(n,t),e(n.target).trigger(a)),a}function p(t){var n,i=e.data(t.target,j);"click"===t.type&&"touchstart"===e.data(t.target,"lastTouchType")&&setTimeout(function(){"touchstart"===e.data(t.target,"lastTouchType")&&(u(),delete e.data(t.target).lastTouchType,p(t))},e.vmouse.maximumTimeBetweenTouches),W||X&&X===i||(n=f("v"+t.type,t))&&(n.isDefaultPrevented()&&t.preventDefault(),n.isPropagationStopped()&&t.stopPropagation(),n.isImmediatePropagationStopped()&&t.stopImmediatePropagation())}function m(n){var i,o,r,s=t(n).touches;s&&1===s.length&&(i=n.target,o=a(i),e.data(n.target,"lastTouchType",n.type),o.hasVirtualBinding&&(X=R++,e.data(i,j,X),d(),l(),L=!1,r=t(n).touches[0],A=r.pageX,N=r.pageY,f("vmouseover",n,o),f("vmousedown",n,o)))}function v(t){B||(L||f("vmousecancel",t,a(t.target)),e.data(t.target,"lastTouchType",t.type),L=!0,h())}function g(n){if(!B){var i=t(n).touches[0],o=L,r=e.vmouse.moveDistanceThreshold,s=a(n.target);e.data(n.target,"lastTouchType",n.type),L=L||Math.abs(i.pageX-A)>r||Math.abs(i.pageY-N)>r,L&&!o&&f("vmousecancel",n,s),f("vmousemove",n,s),h()}}function b(n){if(!B&&e.data(n.target,"lastTouchType")!==i){c(),delete e.data(n.target).lastTouchType;var o,r,s=a(n.target);f("vmouseup",n,s),L||(o=f("vclick",n,s))&&o.isDefaultPrevented()&&(r=t(n).changedTouches[0],O.push({touchID:X,x:r.clientX,y:r.clientY}),W=!0),f("vmouseout",n,s),L=!1,h()}}function y(t){var n,i=e.data(t,E);if(i)for(n in i)if(i[n])return!0;return!1}function T(){}var w,D,E="virtualMouseBindings",j="virtualTouchID",P="clientX clientY pageX pageY screenX screenY".split(" "),q="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),k="altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),C=e.event.mouseHooks?e.event.mouseHooks.props:[],x=k.concat(C),M={},S=0,A=0,N=0,L=!1,O=[],W=!1,B=!1,H="addEventListener"in n,I=e(n),R=1,X=0;for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500,maximumTimeBetweenTouches:100},D=0;D<q.length;D++)e.event.special[q[D]]=function(t){var n=t.substr(1);return{setup:function(){y(this)||e.data(this,E,{}),e.data(this,E)[t]=!0,M[t]=(M[t]||0)+1,1===M[t]&&I.bind(n,p),e(this).bind(n,T),H&&(M.touchstart=(M.touchstart||0)+1,1===M.touchstart&&I.bind("touchstart",m).bind("touchend",b).bind("touchmove",g).bind("scroll",v))},teardown:function(){--M[t],M[t]||I.unbind(n,p),H&&(--M.touchstart||I.unbind("touchstart",m).unbind("touchmove",g).unbind("touchend",b).unbind("scroll",v));var i=e(this),o=e.data(this,E);o&&(o[t]=!1),i.unbind(n,T),y(this)||i.removeData(E)}}}(q[D]);H&&n.addEventListener("click",function(t){var n,i,o,a,r,s=O.length,c=t.target;if(s)for(n=t.clientX,i=t.clientY,w=e.vmouse.clickDistanceThreshold,o=c;o;){for(a=0;a<s;a++)if(r=O[a],0,o===c&&Math.abs(r.x-n)<w&&Math.abs(r.y-i)<w||e.data(o,j)===r.touchID)return t.preventDefault(),void t.stopPropagation();o=o.parentNode}},!0)}),function(t){"function"==typeof define&&define.amd?define("ns",["jquery"],t):t(e)}(function(e){return e.mobile={version:"@VERSION"},e.mobile}),function(t){"function"==typeof define&&define.amd?define("support/touch",["jquery","../ns"],t):t(e)}(function(e){var t={touch:"ontouchend"in n};return e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t),e.support}),function(t){"function"==typeof define&&define.amd?define("events/touch",["jquery","../vmouse","../support/touch"],t):t(e)}(function(e){function o(t,n,o,a){var r=o.type;o.type=n,a?e.event.trigger(o,i,t):e.event.dispatch.call(t,o),o.type=r}var a=e(n),r=e.mobile.support.touch,s=r?"touchstart":"mousedown",c=r?"touchend":"mouseup",u=r?"touchmove":"mousemove";return e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),i=!1;n.bind("vmousedown",function(r){function s(){u&&(n.bind("vclick",l),clearTimeout(u))}function c(){s(),n.unbind("vclick",l).unbind("vmouseup",s),a.unbind("vmousecancel",c)}if(i=!1,r.which&&1!==r.which)return!0;var u,l,d=r.target;l=function(e){c(),i||d!==e.target?i&&e.preventDefault():o(t,"tap",e)},n.bind("vmouseup",s),a.bind("vmousecancel",c),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(i=!0),u=0,o(t,"taphold",e.Event("taphold",{target:d}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),a.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:t.devicePixelRatio>=2?15:30,verticalDistanceThreshold:t.devicePixelRatio>=2?15:30,getLocation:function(e){var n=t.pageXOffset,i=t.pageYOffset,o=e.clientX,a=e.clientY;return 0===e.pageY&&Math.floor(a)>Math.floor(e.pageY)||0===e.pageX&&Math.floor(o)>Math.floor(e.pageX)?(o-=n,a-=i):(a<e.pageY-i||o<e.pageX-n)&&(o=e.pageX-n,a=e.pageY-i),{x:o,y:a}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,i=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[i.x,i.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,i=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[i.x,i.y]}},handleSwipe:function(t,n,i,a){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var r=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return o(i,"swipe",e.Event("swipe",{target:a,swipestart:t,swipestop:n}),!0),o(i,r,e.Event(r,{target:a,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,i=e(n),o={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=o,o.start=function(t){if(!e.event.special.swipe.eventInProgress){e.event.special.swipe.eventInProgress=!0;var i,r=e.event.special.swipe.start(t),s=t.target,l=!1;o.move=function(t){r&&!t.isDefaultPrevented()&&(i=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(r,i,n,s))&&(e.event.special.swipe.eventInProgress=!1),Math.abs(r.coords[0]-i.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())},o.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,a.off(u,o.move),o.move=null},a.on(u,o.move).one(c,o.stop)}},i.on(s,o.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,0===--t.length&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(s,n.start),n.move&&a.off(u,n.move),n.stop&&a.off(c,n.stop))}},e.each({taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}}),e.event.special}),function(t){"function"==typeof define&&define.amd?define("defaults",["jquery","./ns"],t):t(e)}(function(e){return e.extend(e.mobile,{hideUrlBar:!0,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,pageContainer:e(),allowCrossDomainPages:!1,dialogHashKey:"&ui-state=dialog"})}),function(t){"function"==typeof define&&define.amd?define("data",["jquery","./ns"],t):t(e)}(function(e){var n={},o=e.find,a=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,r=/:jqmData\(([^)]*)\)/g;return e.extend(e.mobile,{ns:!1===e.mobileBackcompat?"ui-":"",getAttribute:function(n,i){var o;(n=n.jquery?n[0]:n)&&n.getAttribute&&(o=n.getAttribute("data-"+e.mobile.ns+i));try{o="true"===o||"false"!==o&&("null"===o?null:+o+""===o?+o:a.test(o)?t.JSON.parse(o):o)}catch(e){}return o},nsNormalizeDict:n,nsNormalize:function(t){return n[t]||(n[t]=e.camelCase(e.mobile.ns+t))},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")}}),e.fn.jqmData=function(t,n){var o;return void 0!==t&&(t&&(t=e.mobile.nsNormalize(t)),o=arguments.length<2||n===i?this.data(t):this.data(t,n)),o},e.jqmData=function(t,n,i){var o;return void 0!==n&&(o=e.data(t,n?e.mobile.nsNormalize(n):n,i)),o},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,n){return e.removeData(t,e.mobile.nsNormalize(n))},e.find=function(t,n,i,a){return t.indexOf(":jqmData")>-1&&(t=t.replace(r,"[data-"+(e.mobile.ns||"")+"$1]")),o.call(this,t,n,i,a)},e.extend(e.find,o),e.mobile}),function(t){"function"==typeof define&&define.amd?define("jquery-ui/version",["jquery"],t):t(e)}(function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}),function(t){"function"==typeof define&&define.amd?define("jquery-ui/keycode",["jquery","./version"],t):t(e)}(function(e){return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),function(t){"function"==typeof define&&define.amd?define("helpers",["jquery","./ns","jquery-ui/keycode"],t):t(e)}(function(e){var i=function(t,n){var i=t.parent(),o=[],a=function(){var t=e(this),n=e.mobile.toolbar&&t.data("mobile-toolbar")?t.toolbar("option"):{position:t.attr("data-"+e.mobile.ns+"position"),updatePagePadding:!1!==t.attr("data-"+e.mobile.ns+"update-page-padding")};return!("fixed"===n.position&&!0===n.updatePagePadding)},r=i.children(":jqmData(type='header')").filter(a),s=t.children(":jqmData(type='header')"),c=i.children(":jqmData(type='footer')").filter(a),u=t.children(":jqmData(type='footer')");return 0===s.length&&r.length>0&&(o=o.concat(r.toArray())),0===u.length&&c.length>0&&(o=o.concat(c.toArray())),e.each(o,function(t,i){n-=e(i).outerHeight()}),Math.max(0,n)};return e.extend(e.mobile,{window:e(t),document:e(n),keyCode:e.ui.keyCode,behaviors:{},focusPage:function(e){var t=e.find("[autofocus]");t.length||(t=e.find(".ui-title").eq(0)),t.length||(t=e),t.focus()},silentScroll:function(n){e.mobile.window.scrollTop()>0||("number"!==e.type(n)&&(n=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,n),e.mobile.document.trigger("silentscroll",{x:0,y:n})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150))},getClosestBaseUrl:function(t){var n=e(t).closest(".ui-page").jqmData("url"),i=e.mobile.path.documentBase.hrefNoHash;return e.mobile.base.dynamicBaseEnabled&&n&&e.mobile.path.isPath(n)||(n=i),e.mobile.path.makeUrlAbsolute(n,i)},removeActiveLinkClass:function(t){!e.mobile.activeClickedLink||e.mobile.activeClickedLink.closest(".ui-page-active").length&&!t||e.mobile.activeClickedLink.removeClass("ui-button-active"),e.mobile.activeClickedLink=null},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,n){if(!e.mobile.ignoreContentEnabled)return t;var i,o,a,r,s=t.length,c=e();for(r=0;r<s;r++){for(o=t.eq(r),a=!1,i=t[r];i;){if("false"===(i.getAttribute?i.getAttribute("data-"+e.mobile.ns+n):"")){a=!0;break}i=i.parentNode}a||(c=c.add(o))}return c},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()},resetActivePageHeight:function(n){var o=e(".ui-page-active"),a=o.height(),r=o.outerHeight(!0);n=i(o,"number"==typeof n?n:e(t).height()),o.css("min-height",""),o.height()<n&&o.css("min-height",n-(r-a))},loading:function(){var t=this.loading._widget||e.mobile.loader().element,n=t.loader.apply(t,arguments);return this.loading._widget=t,n},isElementCurrentlyVisible:function(i){if(!(i="string"==typeof i?e(i)[0]:i[0]))return!0;var o=i.getBoundingClientRect();return o.bottom>0&&o.right>0&&o.top<(t.innerHeight||n.documentElement.clientHeight)&&o.left<(t.innerWidth||n.documentElement.clientWidth)}}),e.addDependents=function(t,n){var i=e(t),o=i.jqmData("dependents")||e();i.jqmData("dependents",e(o).add(n))},e.fn.extend({removeWithDependents:function(){e.removeWithDependents(this)},addDependents:function(t){e.addDependents(this,t)},getEncodedText:function(){return e("<a>").text(this.text()).html()},jqmEnhanceable:function(){return e.mobile.enhanceable(this)},jqmHijackable:function(){return e.mobile.hijackable(this)}}),e.removeWithDependents=function(t){var n=e(t);(n.jqmData("dependents")||e()).remove(),n.remove()},e.addDependents=function(t,n){var i=e(t),o=i.jqmData("dependents")||e();i.jqmData("dependents",e(o).add(n))},e.find.matches=function(t,n){return e.find(t,null,null,n)},e.find.matchesSelector=function(t,n){return e.find(n,null,null,[t]).length>0},e.mobile}),function(e){"function"==typeof define&&define.amd&&define("core",["./defaults","./data","./helpers"],e)}(function(){}),function(t){"function"==typeof define&&define.amd?define("media",["jquery","./core"],t):t(e)}(function(e){return t.matchMedia=t.matchMedia||function(e,t){var n,i=e.documentElement,o=i.firstElementChild||i.firstChild,a=e.createElement("body"),r=e.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(r),function(e){return r.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(a,o),n=42===r.offsetWidth,i.removeChild(a),{matches:n,media:e}}}(n),e.mobile.media=function(e){var n=t.matchMedia(e);return n&&n.matches},e.mobile.media}),function(t){"function"==typeof define&&define.amd?define("widgets/enhancer",["jquery"],t):t(e)}(function(e){var t,n=!1;return e.fn.extend({enhance:function(){return e.enhance.enhance(this)},enhanceWithin:function(){return this.children().enhance(),this},enhanceOptions:function(){return e.enhance.getOptions(this)},enhanceRoles:function(){return e.enhance.getRoles(this)}}),e.enhance=e.enhance||{},e.extend(e.enhance,{enhance:function(t){var n,i=t.find("["+e.enhance.defaultProp()+"]").addBack();for(e.enhance._filter&&(i=e.enhance._filter(i)),n=0;n<e.enhance.hooks.length;n++)e.enhance.hooks[n].call(t,i);return e.enhance.defaultFunction.call(t,i),t},hooks:e.enhance.hooks||[],_filter:e.enhance._filter||!1,defaultProp:e.enhance.defaultProp||function(){return"data-ui-role"},defaultFunction:function(t){t.each(function(){var t,n=e(this).enhanceRoles();for(t=0;t<n.length;t++)e.fn[n[t]]&&e(this)[n[t]]()})},cache:!0,roleCache:{},getRoles:function(t){if(!t.length)return[];var n,o=e.enhance.roleCache[t[0].id?t[0].id:i];return o||(n=t.attr(e.enhance.defaultProp()),o=n?n.match(/\S+/g):[],e.enhance.roleCache[t[0].id]=o,o)},optionCache:{},getOptions:function(t){var n,o=e.enhance.optionCache[t[0].id?t[0].id:i];return o||(o={},n=(e.mobile.ns||"ui-").replace("-",""),e.each(e(t).data(),function(e,t){e=e.replace(n,""),e=e.charAt(0).toLowerCase()+e.slice(1),o[e]=t}),e.enhance.optionCache[t[0].id]=o,o)},_installWidget:function(){e.Widget&&!n&&(e.extend(e.Widget.prototype,{_getCreateOptions:function(e){var t,n,o=this.element.enhanceOptions();e=e||{};for(t in this.options)(n=o[t])!==i&&(e[t]=n);return e}}),n=!0)}}),e.Widget?e.enhance._installWidget():Object.defineProperty(e,"Widget",{configurable:!0,enumerable:!0,get:function(){return t},set:function(n){n&&(t=n,setTimeout(function(){e.enhance._installWidget()}))}}),e.enhance})});