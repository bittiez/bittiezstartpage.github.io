(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],f=0,h=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.config?n("div",{class:["theme-"+e.config.theme,e.isDark?"is-dark":"is-light",e.config.footer?"":"no-footer"],attrs:{id:"app"}},[n("DynamicTheme",{attrs:{themes:e.config.colors}}),n("div",{attrs:{id:"bighead"}},[e.config.header?n("section",{staticClass:"first-line"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[e.config.logo?n("img",{attrs:{src:e.config.logo,alt:"dashboard logo"}}):e._e(),e.config.icon?n("i",{class:["fa-fw",e.config.icon]}):e._e()]),n("div",{staticClass:"dashboard-title"},[n("span",{staticClass:"headline"},[e._v(e._s(e.config.subtitle))]),n("h1",[e._v(e._s(e.config.title))])])])]):e._e(),n("Navbar",{attrs:{open:e.showMenu,links:e.config.links},on:{"navbar:toggle":function(t){e.showMenu=!e.showMenu}}},[n("DarkMode",{on:{updated:function(t){e.isDark=t}}}),n("SettingToggle",{attrs:{name:"vlayout",icon:"fa-list",iconAlt:"fa-columns"},on:{updated:function(t){e.vlayout=t}}}),n("SearchInput",{staticClass:"navbar-item is-inline-block-mobile",on:{input:e.filterServices,"search:focus":function(t){e.showMenu=!0},"search:open":e.navigateToFirstService,"search:cancel":e.filterServices}})],1)],1),n("section",{staticClass:"section",attrs:{id:"main-section"}},[n("div",{staticClass:"container"},[e.config.connectivityCheck?n("ConnectivityChecker",{on:{"network:status-update":function(t){e.offline=t}}}):e._e(),e.offline?e._e():n("div",[n("Message",{attrs:{item:e.config.message}}),!e.vlayout||e.filter?n("div",{staticClass:"columns is-multiline"},[e._l(e.services,(function(t){return[t.name?n("h2",{staticClass:"column is-full group-title"},[t.icon?n("i",{class:["fa-fw",t.icon]}):e._e(),e._v(" "+e._s(t.name)+" ")]):e._e(),e._l(t.items,(function(t){return n("Service",{key:t.name,class:["column","is-"+12/e.config.columns],attrs:{item:t}})}))]}))],2):e._e(),!e.filter&&e.vlayout?n("div",{staticClass:"columns is-multiline layout-vertical"},e._l(e.services,(function(t){return n("div",{key:t.name,class:["column","is-"+12/e.config.columns]},[t.name?n("h2",{staticClass:"group-title"},[t.icon?n("i",{class:["fa-fw",t.icon]}):e._e(),e._v(" "+e._s(t.name)+" ")]):e._e(),e._l(t.items,(function(e){return n("Service",{key:e.url,attrs:{item:e}})}))],2)})),0):e._e()],1)],1)]),n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[e.config.footer?n("div",{staticClass:"content has-text-centered",domProps:{innerHTML:e._s(e.config.footer)}}):e._e()])])],1):e._e()},s=[],r=(n("99af"),n("4de4"),n("caad"),n("b0c0"),n("d3b7"),n("2532"),n("b85c")),o=(n("96cf"),n("1da1")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.links?n("div",{staticClass:"container-fluid"},[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-burger",class:{"is-active":e.showMenu},attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(t){return e.$emit("navbar:toggle")}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"navbar-menu",class:{"is-active":e.showMenu}},[n("div",{staticClass:"navbar-start"},e._l(e.links,(function(t){return n("a",{key:t.url,staticClass:"navbar-item",attrs:{rel:"noreferrer",href:t.url,target:t.target}},[t.icon?n("i",{class:["fa-fw",t.icon],staticStyle:{"margin-right":"6px"}}):e._e(),e._v(" "+e._s(t.name)+" ")])})),0),n("div",{staticClass:"navbar-end"},[e._t("default")],2)])])])]):e._e()},l=[],u={name:"Navbar",props:{open:{type:Boolean,default:!1},links:Array},computed:{showMenu:function(){return this.open&&this.isSmallScreen()}},methods:{isSmallScreen:function(){return window.matchMedia("screen and (max-width: 1023px)").matches}}},f=u,h=n("2877"),d=Object(h["a"])(f,c,l,!1,null,null,null),g=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.offline?n("div",{staticClass:"offline-message"},[n("i",{staticClass:"far fa-dizzy"}),n("h1",[e._v(" You're offline bro. "),n("span",{on:{click:e.checkOffline}},[n("i",{staticClass:"fas fa-redo-alt"})])])]):e._e()},v=[],p={name:"ConnectivityChecker",data:function(){return{offline:!1}},created:function(){var e=this;this.checkOffline(),document.addEventListener("visibilitychange",(function(){"visible"==document.visibilityState&&e.checkOffline()}),!1)},methods:{checkOffline:function(){var e=this;return fetch(window.location.href+"?alive",{method:"HEAD",cache:"no-store"}).then((function(){e.offline=!1})).catch((function(){e.offline=!0})).finally((function(){e.$emit("network:status-update",e.offline)}))}}},b=p,y=Object(h["a"])(b,m,v,!1,null,null,null),k=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"card"},[n("a",{attrs:{href:e.item.url,target:e.item.target,rel:"noreferrer"}},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[e.item.logo?n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("img",{attrs:{src:e.item.logo,alt:e.item.name+" logo"}})])]):e._e(),e.item.icon?n("div",{staticClass:"media-left"},[n("figure",{staticClass:"image is-48x48"},[n("i",{class:["fa-fw",e.item.icon],staticStyle:{"font-size":"35px"}})])]):e._e(),n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[e._v(e._s(e.item.name))]),n("p",{staticClass:"subtitle is-6"},[e._v(e._s(e.item.subtitle))])])]),e.item.tag?n("div",{staticClass:"tag",class:e.item.tagstyle},[n("strong",{staticClass:"tag-text"},[e._v("#"+e._s(e.item.tag))])]):e._e()])])])])},w=[],C={name:"Service",props:{item:Object}},x=C,S=Object(h["a"])(x,_,w,!1,null,"7d7e1ea2",null),O=S.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("article",{staticClass:"message",class:e.message.style},[e.message.title?n("div",{staticClass:"message-header"},[n("p",[e._v(e._s(e.message.title))])]):e._e(),e.message.content?n("div",{staticClass:"message-body",domProps:{innerHTML:e._s(e.message.content)}}):e._e()]):e._e()},D=[],$={name:"Message",props:{item:Object},data:function(){return{show:!1,message:{}}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.message=Object.assign({},this.item),!this.item||!this.item.url){e.next=6;break}return e.next=4,this.getMessage(this.item.url);case 4:for(t=e.sent,n=0,i=["title","style","content"];n<i.length;n++)a=i[n],a in t&&null!==t[a]&&(this.message[a]=t[a]);case 6:this.show=this.message.title||this.message.content;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{getMessage:function(e){return fetch(e).then((function(e){if(200==e.status)return e.json()}))}}},M=$,E=Object(h["a"])(M,j,D,!1,null,null,null),T=E.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-bar"},[n("label",{staticClass:"search-label",attrs:{for:"search"}}),n("input",{ref:"search",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value.toLowerCase())},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.$emit("search:open")},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.altKey?e.$emit("search:open","_blank"):null}]}})])},L=[],P=(n("ac1f"),n("841c"),{name:"SearchInput",props:["value"],mounted:function(){this._keyListener=function(e){var t=this;"/"===e.key&&(e.preventDefault(),this.$emit("search:focus"),this.$nextTick((function(){t.$refs.search.focus()}))),"Escape"===e.key&&(this.$refs.search.value="",this.$refs.search.blur(),this.$emit("search:cancel"))},document.addEventListener("keydown",this._keyListener.bind(this))},beforeDestroy:function(){document.removeEventListener("keydown",this._keyListener)}}),N=P,F=Object(h["a"])(N,A,L,!1,null,"a2ab4ecc",null),K=F.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-item is-inline-block-mobile",on:{click:function(t){return e.toggleSetting()}}},[n("span",[n("i",{class:["fas","fa-fw",e.value?e.icon:e.iconAlt]})]),e._t("default")],2)},z=[],H={name:"SettingToggle",props:{name:String,icon:String,iconAlt:String},data:function(){return{value:!0}},created:function(){this.iconAlt||(this.iconAlt=this.icon),this.name in localStorage&&(this.value=JSON.parse(localStorage[this.name])),this.$emit("updated",this.value)},methods:{toggleSetting:function(){this.value=!this.value,localStorage[this.name]=this.value,this.$emit("updated",this.value)}}},J=H,R=Object(h["a"])(J,V,z,!1,null,null,null),I=R.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-item is-inline-block-mobile",attrs:{"aria-label":"Toggle dark mode"},on:{click:function(t){return e.toggleTheme()}}},[n("i",{staticClass:"fas fa-fw fa-adjust"})])},q=[],Y={name:"Darkmode",data:function(){return{isDark:null}},created:function(){this.isDark="overrideDark"in localStorage?JSON.parse(localStorage.overrideDark):matchMedia("(prefers-color-scheme: dark)").matches,this.$emit("updated",this.isDark)},methods:{toggleTheme:function(){this.isDark=!this.isDark,localStorage.overrideDark=this.isDark,this.$emit("updated",this.isDark)}}},G=Y,Q=Object(h["a"])(G,B,q,!1,null,null,null),U=Q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DynamicStyle",[e._v(" /* light / dark theme switch based on system pref if available */ body #app { "+e._s(e.getVars(e.themes.light))+" } @media (prefers-color-scheme: light), (prefers-color-scheme: no-preference) { body #app { "+e._s(e.getVars(e.themes.light))+" } } @media (prefers-color-scheme: dark) { body #app { } } /* light / dark theme override base on user choice. */ body #app.is-dark { "+e._s(e.getVars(e.themes.dark))+" } body #app.is-light { "+e._s(e.getVars(e.themes.light))+" } ")])},X=[],Z=(n("a15b"),{name:"DynamicTheme",props:{themes:Object},methods:{getVars:function(e){var t=[];for(var n in e){var i="".concat(e[n]);i?"background-image"==n&&(i="url(".concat(e[n],")")):i="inital",t.push("--".concat(n,": ").concat(i))}return t.join(";")}}}),ee=Z,te=Object(h["a"])(ee,W,X,!1,null,null,null),ne=te.exports,ie='---\r\n# Default configuration\r\n\r\ntitle: "Dashboard"\r\nsubtitle: "Homer"\r\n\r\nheader: true\r\nfooter: \'<p>Created with <span class="has-text-danger">❤️</span> with <a href="https://bulma.io/">bulma</a>, <a href="https://vuejs.org/">vuejs</a> & <a href="https://fontawesome.com/">font awesome</a> // Fork me on <a href="https://github.com/bastienwirtz/homer"><i class="fab fa-github-alt"></i></a></p>\' # set false if you want to hide it.\r\n\r\ncolumns: 3\r\nconnectivityCheck: true\r\n\r\ntheme: default\r\ncolors:\r\n  light:\r\n    highlight-primary: "#3367d6"\r\n    highlight-secondary: "#4285f4"\r\n    highlight-hover: "#5a95f5"\r\n    background: "#f5f5f5"\r\n    card-background: "#ffffff"\r\n    text: "#363636"\r\n    text-header: "#ffffff"\r\n    text-title: "#303030"\r\n    text-subtitle: "#424242"\r\n    card-shadow: rgba(0, 0, 0, 0.1)\r\n    link-hover: "#363636"\r\n    background-image: ""\r\n  dark:\r\n    highlight-primary: "#3367d6"\r\n    highlight-secondary: "#4285f4"\r\n    highlight-hover: "#5a95f5"\r\n    background: "#131313"\r\n    card-background: "#2b2b2b"\r\n    text: "#eaeaea"\r\n    text-header: "#ffffff"\r\n    text-title: "#fafafa"\r\n    text-subtitle: "#f5f5f5"\r\n    card-shadow: rgba(0, 0, 0, 0.4)\r\n    link-hover: "#ffdd57"\r\n    background-image: ""\r\n\r\nmessage: ~\r\nlinks: []\r\nservices: []\r\n',ae=n("651e"),se=n("da81"),re={name:"App",components:{Navbar:g,ConnectivityChecker:k,Service:O,Message:T,SearchInput:K,SettingToggle:I,DarkMode:U,DynamicTheme:ne},data:function(){return{config:null,services:null,offline:!1,filter:"",vlayout:!0,isDark:null,showMenu:!1}},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=ae.load(ie),e.prev=1,e.next=4,this.getConfig();case 4:n=e.sent,e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0),n=this.handleErrors("⚠️ Error loading configuration",e.t0);case 11:this.config=se(t,n),this.services=this.config.services,document.title="".concat(this.config.title," | ").concat(this.config.subtitle);case 14:case"end":return e.stop()}}),e,this,[[1,7]])})));function t(){return e.apply(this,arguments)}return t}(),methods:{getConfig:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"assets/config.yml";return fetch(t).then((function(t){if(!t.redirected){if(!t.ok)throw Error("".concat(t.statusText,": ").concat(t.body));var n=e;return t.text().then((function(e){return ae.load(e)})).then((function(e){return e.externalConfig?n.getConfig(e.externalConfig):e}))}window.location.href=t.url}))},matchesFilter:function(e){return e.name.toLowerCase().includes(this.filter)||e.tag&&e.tag.toLowerCase().includes(this.filter)},navigateToFirstService:function(e){try{var t=this.services[0].items[0];window.open(t.url,e||t.target||"_self")}catch(n){console.warning("fail to open service")}},filterServices:function(e){if(this.filter=e,e){var t,n=[],i=Object(r["a"])(this.config.services);try{for(i.s();!(t=i.n()).done;){var a,s=t.value,o=Object(r["a"])(s.items);try{for(o.s();!(a=o.n()).done;){var c=a.value;this.matchesFilter(c)&&n.push(c)}}catch(l){o.e(l)}finally{o.f()}}}catch(l){i.e(l)}finally{i.f()}this.services=[{name:e,icon:"fas fa-search",items:n}]}else this.services=this.config.services},handleErrors:function(e,t){return{message:{title:e,style:"is-danger",content:t}}}}},oe=re,ce=Object(h["a"])(oe,a,s,!1,null,null,null),le=ce.exports,ue=n("9483");Object(ue["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("15f5"),n("a89b");i["a"].config.productionTip=!1,i["a"].component("DynamicStyle",{render:function(e){return e("style",this.$slots.default)}}),new i["a"]({render:function(e){return e(le)}}).$mount("#app")},a89b:function(e,t,n){}});
//# sourceMappingURL=app.b8f33457.js.map