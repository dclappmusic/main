(function(e){function t(t){for(var o,a,r=t[0],i=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},s={app:0},c=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-18d9658e":"bc206208","chunk-1bdec57e":"c0714ce6","chunk-2d0e5772":"b2ce8231","chunk-3607be1e":"c16de1f8","chunk-0ff6085a":"7e153548","chunk-f3181294":"f0f981d0","chunk-a38340f6":"b024951f","chunk-c178eac6":"32086f68"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-18d9658e":1,"chunk-1bdec57e":1,"chunk-0ff6085a":1,"chunk-f3181294":1,"chunk-a38340f6":1,"chunk-c178eac6":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-18d9658e":"6a0ede57","chunk-1bdec57e":"4ff35f54","chunk-2d0e5772":"31d6cfe0","chunk-3607be1e":"31d6cfe0","chunk-0ff6085a":"039a06ab","chunk-f3181294":"329967e0","chunk-a38340f6":"4356ec70","chunk-c178eac6":"f5d53b73"}[e]+".css",s=i.p+o,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===o||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||s,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=s[e]=[t,n]}));t.push(o[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/app/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e27":function(e,t,n){},3214:function(e,t,n){},"3cf0":function(e,t,n){},4678:function(e,t,n){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("get-geolocation",{attrs:{findLocation:e.findLocation},on:{geolocationError:e.geolocationError}}),n("keep-alive",[n("router-view")],1),n("Nav"),e.show_install?n("PopupInstall",{attrs:{deferredPrompt:this.deferredPrompt},on:{cerrar_popup:e.event_cerrar_popup}}):e._e()],1)},s=[],c=(n("4160"),n("159b"),n("5530")),r=n("2f62"),i=n("2591"),l={apiKey:"AIzaSyCcFHmQQSZQMCLlNetLQbW2T4Z7AKH6ztc",authDomain:"weclapp-eddbd.firebaseapp.com",databaseURL:"https://weclapp-eddbd.firebaseio.com",projectId:"weclapp-eddbd",storageBucket:"weclapp-eddbd.appspot.com",messagingSenderId:"611930943683",appId:"1:611930943683:web:c50aff0449c4ad6a"};i["a"].initializeApp(l);var u=i["a"].firestore(),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"clapp"!=e.$route.name?n("nav",{staticClass:"menu nav_slider",class:{fondo:"Home"!=e.$route.name}},[n("span",{staticClass:"selected",class:e.$route.name},[n("svg",{attrs:{width:"80",height:"51",viewBox:"0 0 80 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"40",cy:"40",r:"40",fill:"white"}})])]),n("router-link",{staticClass:"menu-tit slider_link manifest",attrs:{to:"/manifest"}},[e._v("about")]),n("router-link",{staticClass:"menu-tit slider_link home",attrs:{to:"/"}},[e._v("home")]),n("router-link",{staticClass:"menu-tit slider_link agenda",attrs:{to:"/agenda"}},[e._v("shows")])],1):e._e()},f=[],h={name:"Nav",props:["admin"],mounted:function(){}},p=h,b=(n("a5c1"),n("2877")),m=Object(b["a"])(p,d,f,!1,null,"78804b96",null),g=m.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"install popup"},[n("div",{staticClass:"sub_popup"},[n("button",{staticClass:"boton-med install",on:{click:e.install}},[e._v("Añadir la app a tu móvil")]),n("button",{staticClass:"boton-secundario cancelar",on:{click:e.cerrar}},[e._v("No añadir")])])])},v=[],w={name:"PopupInstall",props:["deferredPrompt"],created:function(){},data:function(){return{}},methods:{install:function(){var e=this;this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),e.deferredPrompt=null})),this.$emit("cerrar_popup",this.deferredPrompt)},cerrar:function(){this.$emit("cerrar_popup","install")}}},k=w,y=(n("bea9"),Object(b["a"])(k,j,v,!1,null,"016afac0",null)),_=y.exports,S=n("6422"),P={name:"app",components:{Nav:g,PopupInstall:_,GetGeolocation:S["a"]},data:function(){return{show_login:!0,show_install:!1,deferredPrompt:null,shows_fb:[],bands_fb:[],venues_fb:[],findLocation:!1}},computed:Object(c["a"])({},Object(r["b"])(["shows","bands","venues","user"])),watch:{venues_fb:function(){this.$store.commit("updateVenues",this.venues_fb)},geolocation:function(){this.$store.commit("updateGeolocation",this.geolocation)}},created:function(){var e=this;setInterval((function(){e.fecha_hoy=new Date}),6e5),this.loginState()},mounted:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.deferredPrompt=t,e.show_install=!0})),this.getShows(),this.getBands()},methods:{loginState:function(){var e=this;i["a"].auth().onAuthStateChanged((function(t){t?(e.getShows(),e.getBands()):i["a"].auth().signInAnonymously().then((function(){console.log("ya estas logueado")})).catch((function(e){return alert(e)}))}))},getShows:function(){var e=this;u.collection("shows").onSnapshot((function(t){e.shows_fb=[],t.forEach((function(t){var n=t.data();e.shows_fb.push(n)})),e.$store.commit("updateShows",e.shows_fb)}))},getBands:function(){var e=this;u.collection("bands").onSnapshot((function(t){e.bands_fb=[],t.forEach((function(t){var n=t.data();e.bands_fb.push(n)})),e.$store.commit("updateBands",e.bands_fb)}))},set_show_cords:function(e,t){e.forEach((function(e){var n=e.venue_id;n&&(e.lat=t[n].latitud,e.lon=t[n].longitud)}))},event_cerrar_popup:function(e){this.show_install=!1,this.deferredPrompt=e},geolocationError:function(e){alert(e)}}},O=P,E=(n("5c0b"),Object(b["a"])(O,a,s,!1,null,null,null)),C=E.exports,z=(n("d3b7"),n("8c4f"));o["a"].use(z["a"]);var A=new z["a"]({routes:[{path:"/",name:"home",props:!0,component:function(){return n.e("chunk-18d9658e").then(n.bind(null,"bb51"))}},{path:"/home",name:"home",props:!0,component:function(){return n.e("chunk-18d9658e").then(n.bind(null,"bb51"))}},{path:"/historial",name:"historial",props:!0,component:function(){return n.e("chunk-2d0e5772").then(n.bind(null,"9533"))}},{path:"/manifest",name:"manifest",props:!0,component:function(){return n.e("chunk-1bdec57e").then(n.bind(null,"848c"))}},{path:"/agenda",name:"agenda",props:!0,component:function(){return Promise.all([n.e("chunk-3607be1e"),n.e("chunk-f3181294")]).then(n.bind(null,"1d38"))}},{path:"/sub",name:"sub",props:!0,component:function(){return n.e("chunk-c178eac6").then(n.bind(null,"f2be"))}},{path:"/clapp",name:"clapp",props:!0,component:function(){return n.e("chunk-a38340f6").then(n.bind(null,"b941"))}},{path:"/subirShow",name:"subirShow",props:!0,component:function(){return Promise.all([n.e("chunk-3607be1e"),n.e("chunk-0ff6085a")]).then(n.bind(null,"5b1d"))}}]});o["a"].use(r["a"]);var I=new r["a"].Store({state:{shows:[],bands:[],venues:[],user:null,geolocation:{lat:40.41668329317987,lon:-3.7038310128452934},city:null},getters:{},mutations:{updateUser:function(e,t){e.user=t},updateShows:function(e,t){t&&t.sort((function(e,t){return new Date(e.timestamp)-new Date(t.timestamp)})),e.shows=t},updateBands:function(e,t){e.bands=t},updateVenues:function(e,t){e.venues=t},updateGeolocation:function(e,t){e.geolocation=t},updateCity:function(e,t){e.city=t}},actions:{}}),N=n("9483");Object(N["a"])("".concat("/app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var G=n("c1df"),$=n.n(G),x=n("a925"),D=n("0086"),T=n.n(D);n("3cf0");o["a"].config.productionTip=!1;var L="es";o["a"].use(x["a"]);var U=new x["a"]({locale:L});$.a.locale("es"),o["a"].prototype.$moment=$.a,o["a"].use(T.a),Date.prototype.getWeekNumber=function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);var n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-n)/864e5+1)/7)},new o["a"]({i18n:U,router:A,store:I,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("c58b")},6422:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},a=[],s=(n("c975"),n("d3b7"),{name:"GetGeolocation",components:{},props:["findLocation"],data:function(){return{geolocation:{lat:null,lon:null}}},watch:{geolocation:function(){this.$store.commit("updateGeolocation",this.geolocation)},findLocation:function(){this.getGeolocation()}},created:function(){this.getGeolocation()},mounted:function(){},methods:{getGeolocation:function(){localStorage.getItem("coords")&&(this.geolocation=JSON.parse(localStorage.getItem("coords")),console.log(this.geolocation)),navigator.geolocation?navigator.geolocation.getCurrentPosition(this.browserGeolocationSuccess,this.browserGeolocationFail,{maximumAge:2e4,timeout:1e4,enableHighAccuracy:!1}):(console.log("Navigator geolocation unavailable."),this.$emit("geolocationError","No se puede acceder a la ubicación en tu móvil :'("))},browserGeolocationSuccess:function(e){this.geolocation.lat=e.coords.latitude,this.geolocation.lon=e.coords.longitude,console.log("Browser geolocation success!\n\nlat = "+e.coords.latitude+"\nlng = "+e.coords.longitude),localStorage.setItem("coords",JSON.stringify(this.geolocation)),this.$store.commit("updateGeolocation",this.geolocation)},browserGeolocationFail:function(e){switch(e.code){case e.TIMEOUT:console.log("Browser geolocation error !\n\nTimeout."),this.$emit("geolocationError","Hay problemas con el acceso a tu ubicación");break;case e.PERMISSION_DENIED:0==e.message.indexOf("Only secure origins are allowed")?this.tryAPIGeolocation():(console.log("Permison denied"),this.$emit("geolocationError","No nos has dado permiso de acceder a tu ubicación"));break;case e.POSITION_UNAVAILABLE:console.log("Browser geolocation error !\n\nPosition unavailable."),this.$emit("geolocationError","Browser geolocation error !\n\nPosition unavailable");break}},tryAPIGeolocation:function(){var e=this;fetch("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU",{method:"GET"}).then((function(t){e.apiGeolocationSuccess({coords:{latitude:t.location.lat,longitude:t.location.lng}})})).catch((function(t){console.log("API Geolocation error! \n\n"+t),e.$emit("geolocationError","API Geolocation error! \n\n"+t)}))},apiGeolocationSuccess:function(e){this.geolocation.lat=e.coords.latitude,this.geolocation.lon=e.coords.longitude,console.log("API geolocation success!\n\nlat = "+this.geolocation.lat+"\nlng = "+this.geolocation.lon),localStorage.setItem("coords",JSON.stringify(this.geolocation)),this.$store.commit("updateGeolocation",this.geolocation)}}}),c=s,r=n("2877"),i=Object(r["a"])(c,o,a,!1,null,null,null);t["a"]=i.exports},a5c1:function(e,t,n){"use strict";n("1e27")},bea9:function(e,t,n){"use strict";n("3214")},c58b:function(e,t,n){}});
//# sourceMappingURL=app.6063216d.js.map