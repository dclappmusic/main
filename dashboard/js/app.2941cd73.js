(function(e){function n(n){for(var a,s,r=n[0],d=n[1],c=n[2],l=0,u=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);b&&b(n);while(u.length)u.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,s=1;s<t.length;s++){var r=t[s];0!==o[r]&&(a=!1)}a&&(i.splice(n--,1),e=d(d.s=t[0]))}return e}var a={},s={app:0},o={app:0},i=[];function r(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-6a42d4d3":"04b50e47","chunk-7ab523dd":"2243451d"}[e]+".js"}function d(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-6a42d4d3":1,"chunk-7ab523dd":1};s[e]?n.push(s[e]):0!==s[e]&&t[e]&&n.push(s[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-6a42d4d3":"b4acbdc5","chunk-7ab523dd":"67b30f3f"}[e]+".css",o=d.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return n()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],l=c.getAttribute("data-href");if(l===a||l===o)return n()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=n,b.onerror=function(n){var a=n&&n.target&&n.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],b.parentNode.removeChild(b),t(i)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){s[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=r(e);var u=new Error;c=function(n){l.onerror=l.onload=null,clearTimeout(b);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,t[1](u)}o[e]=void 0}};var b=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(n)},d.m=e,d.c=a,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)d.d(t,a,function(n){return e[n]}.bind(null,a));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/dashboard/",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var b=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1825:function(e,n,t){"use strict";var a=t("f965"),s=t.n(a);s.a},3493:function(e,n,t){},"3cf0":function(e,n,t){},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"nav"},[t("p",{staticClass:"parr"},[e._v("Número de shows: "),t("b",{staticClass:"tit"},[e._v(e._s(e.num_shows))])]),t("p",{staticClass:"parr"},[e._v("Número de bandas: "),t("b",{staticClass:"tit"},[e._v(e._s(e.num_bands))])])]),e.subir_form?t("modal-subir-show",{attrs:{edited_band:e.edited_band,edited_show:e.edited_show},on:{close:e.closeModalSubirShow}}):e._e(),t("main",{staticClass:"view"},[t("router-view",{on:{openModalSubirShow:e.openModalSubirShow}})],1)],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"img/logo.png"}})])}],i=(t("99af"),t("4160"),t("159b"),t("2909")),r=t("5530"),d=t("2f62"),c=t("8aa5"),l=t.n(c),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"modal subir_form"},[t("div",{staticClass:"sub_modal"},[t("svg",{staticClass:"cerrar",attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(n){return e.$emit("close")}}},[t("path",{attrs:{d:"M0.646446 18.6464C0.451185 18.8417 0.451184 19.1583 0.646446 19.3536C0.841709 19.5488 1.15829 19.5488 1.35355 19.3536L10 10.7071L18.6464 19.3536C18.8417 19.5488 19.1583 19.5488 19.3536 19.3536C19.5488 19.1583 19.5488 18.8417 19.3536 18.6464L10.7071 10L19.3536 1.35355C19.5488 1.15829 19.5488 0.841709 19.3536 0.646447C19.1583 0.451185 18.8417 0.451185 18.6464 0.646447L10 9.29289L1.35356 0.646446C1.15829 0.451185 0.841711 0.451185 0.646448 0.646446C0.451186 0.841709 0.451186 1.15829 0.646448 1.35355L9.29289 10L0.646446 18.6464Z",fill:"#B4B4B7"}})]),e.new_show.band||e.edited_band?t("form",{staticClass:"form banda"},[!e.new_show.band_id||e.edited_band?t("div",[t("h3",{staticClass:"tit"},[e._v("Band")]),t("div",{staticClass:"fila band"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.name,expression:"new_band.name"}],staticClass:"parr",attrs:{placeholder:"name"},domProps:{value:e.new_band.name},on:{input:function(n){n.target.composing||e.$set(e.new_band,"name",n.target.value)}}})]),t("div",{staticClass:"fila band"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.city,expression:"new_band.city"}],staticClass:"parr",attrs:{placeholder:"city"},domProps:{value:e.new_band.city},on:{input:function(n){n.target.composing||e.$set(e.new_band,"city",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.afin_a,expression:"new_band.afin_a"}],staticClass:"parr",attrs:{placeholder:"afin a"},domProps:{value:e.new_band.afin_a},on:{input:function(n){n.target.composing||e.$set(e.new_band,"afin_a",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.estilo,expression:"new_band.estilo"}],staticClass:"parr",attrs:{placeholder:"estilo"},domProps:{value:e.new_band.estilo},on:{input:function(n){n.target.composing||e.$set(e.new_band,"estilo",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.description,expression:"new_band.description"}],staticClass:"parr",attrs:{placeholder:"descripción"},domProps:{value:e.new_band.description},on:{input:function(n){n.target.composing||e.$set(e.new_band,"description",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.image,expression:"new_band.image"}],staticClass:"parr",attrs:{placeholder:"image"},domProps:{value:e.new_band.image},on:{input:function(n){n.target.composing||e.$set(e.new_band,"image",n.target.value)}}})]),t("div",{staticClass:"fila band"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.instagram,expression:"new_band.instagram"}],staticClass:"parr",attrs:{placeholder:"instagram"},domProps:{value:e.new_band.instagram},on:{input:function(n){n.target.composing||e.$set(e.new_band,"instagram",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.facebook,expression:"new_band.facebook"}],staticClass:"parr",attrs:{placeholder:"facebook"},domProps:{value:e.new_band.facebook},on:{input:function(n){n.target.composing||e.$set(e.new_band,"facebook",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.youtube,expression:"new_band.youtube"}],staticClass:"parr",attrs:{placeholder:"youtube"},domProps:{value:e.new_band.youtube},on:{input:function(n){n.target.composing||e.$set(e.new_band,"youtube",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.image,expression:"new_band.image"}],staticClass:"parr",attrs:{placeholder:"image"},domProps:{value:e.new_band.image},on:{input:function(n){n.target.composing||e.$set(e.new_band,"image",n.target.value)}}})])]):e._e(),e.edited_band?e._e():t("div",[t("h3",{staticClass:"tit"},[e._v("Show de "+e._s(e.new_show.band))]),t("div",{staticClass:"fila show"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.timestamp,expression:"new_show.timestamp"}],staticClass:"parr",attrs:{type:"date",placeholder:"fecha"},domProps:{value:e.new_show.timestamp},on:{input:function(n){n.target.composing||e.$set(e.new_show,"timestamp",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.venue,expression:"new_show.venue"}],staticClass:"parr",attrs:{placeholder:"sala"},domProps:{value:e.new_show.venue},on:{input:function(n){n.target.composing||e.$set(e.new_show,"venue",n.target.value)}}})]),t("div",{staticClass:"fila show"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.link,expression:"new_show.link"}],staticClass:"parr",attrs:{placeholder:"link"},domProps:{value:e.new_show.link},on:{input:function(n){n.target.composing||e.$set(e.new_show,"link",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.city,expression:"new_show.city"}],staticClass:"parr",attrs:{placeholder:"ciudad"},domProps:{value:e.new_show.city},on:{input:function(n){n.target.composing||e.$set(e.new_show,"city",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.festival,expression:"new_show.festival"}],staticClass:"parr",attrs:{placeholder:"festival"},domProps:{value:e.new_show.festival},on:{input:function(n){n.target.composing||e.$set(e.new_show,"festival",n.target.value)}}})]),t("div",{staticClass:"fila show"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.lat,expression:"new_show.lat"}],staticClass:"parr",attrs:{placeholder:"lat"},domProps:{value:e.new_show.lat},on:{input:function(n){n.target.composing||e.$set(e.new_show,"lat",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.lon,expression:"new_show.lon"}],staticClass:"parr",attrs:{placeholder:"lon"},domProps:{value:e.new_show.lon},on:{input:function(n){n.target.composing||e.$set(e.new_show,"lon",n.target.value)}}})]),t("div",{staticClass:"fila show"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.image,expression:"new_show.image"}],staticClass:"parr",attrs:{placeholder:"imagen"},domProps:{value:e.new_show.image},on:{input:function(n){n.target.composing||e.$set(e.new_show,"image",n.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_show.price,expression:"new_show.price"}],staticClass:"parr",attrs:{placeholder:"precio"},domProps:{value:e.new_show.price},on:{input:function(n){n.target.composing||e.$set(e.new_show,"price",n.target.value)}}})])]),e.edited_band||e.edited_show?e.edited_show?t("div",{staticClass:"fila_botones"},[t("button",{staticClass:"boton eliminar",on:{click:function(n){return n.preventDefault(),e.deleteShow(n)}}},[e._v("borrar show")]),t("button",{staticClass:"boton cta",on:{click:function(n){return n.preventDefault(),e.editShow(n)}}},[e._v("editar show")])]):e.edited_band&&e.edited_band.id?t("div",{staticClass:"fila_botones"},[t("button",{staticClass:"boton eliminar",on:{click:function(n){return n.preventDefault(),e.deleteBand(n)}}},[e._v("borrar banda")]),t("button",{staticClass:"boton cta",on:{click:function(n){return n.preventDefault(),e.editBand(n)}}},[e._v("editar banda")])]):e.edited_band?t("div",{staticClass:"fila_botones"},[t("button",{staticClass:"boton cta",on:{click:function(n){return n.preventDefault(),e.subirBand(n)}}},[e._v("subir banda")])]):e._e():t("div",{staticClass:"fila_botones"},[t("button",{staticClass:"boton cta",on:{click:function(n){return n.preventDefault(),e.subirShow(n)}}},[e._v("Subir show")])])]):e.edited_show&&!e.edited_show.id?t("div",{staticClass:"new_band form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_band.name,expression:"new_band.name"}],staticClass:"parr",attrs:{placeholder:"Nombre del grupo",type:"text",list:"filtros"},domProps:{value:e.new_band.name},on:{input:function(n){n.target.composing||e.$set(e.new_band,"name",n.target.value)}}}),t("div",{staticClass:"filtradas"},[e._l(e.bandas_filtradas,(function(n,a){return t("div",{key:a,staticClass:"banda",on:{click:function(t){return e.elegirBand(n)}}},[t("p",{staticClass:"parr"},[e._v(e._s(n.name))])])})),t("div",{staticClass:"banda",on:{click:function(n){e.new_show.band=e.new_band.name}}},[t("button",{staticClass:"boton cta"},[e._v("Registrar banda")])])],2)]):e._e()])])},b=[],h=(t("a4d3"),t("e01a"),t("4de4"),t("7db0"),t("caad"),t("b0c0"),t("2532"),t("9911"),{name:"ModalSubirShow",components:{},props:["edited_band","edited_show"],computed:Object(r["a"])({},Object(d["b"])(["shows","bands","venues","user"]),{db:function(){return l.a.firestore()}}),data:function(){return{subir_form:!1,bandas_filtradas:[],new_band:{id:null,name:null,description:null,instagram:null,youtube:null,facebook:null,city:null,afin_a:null,estilo:null,image:null},new_show:{id:null,link:null,band:null,band_id:null,timestamp:null,city:null,venue:null,festival:null,image:null,lat:null,lon:null,price:null}}},watch:{"new_band.name":function(){var e=this;this.bandas_filtradas=this.bands.filter((function(n){return n.name.toLowerCase().includes(e.new_band.name.toLowerCase())}))}},created:function(){var e,n;(null===(e=this.edited_band)||void 0===e?void 0:e.name)?this.new_band=this.edited_band:(null===(n=this.edited_show)||void 0===n?void 0:n.id)>=0&&(this.new_show=this.edited_show)},mounted:function(){},methods:{elegirBand:function(e){this.new_show.band=e.name,this.new_show.band_id=e.id,this.new_band.id=e.id,this.new_band.name=e.name,this.new_band.instagram=e.instagram,this.new_band.facebook=e.facebook,this.new_band.image=e.image,this.new_band.location=e.location},editBand:function(){var e=this;this.db.collection("bands").doc("band_"+this.new_band.id).set({id:this.new_band.id,name:this.new_band.name,description:this.new_band.description||null,youtube:this.new_band.youtube||null,instagram:this.new_band.instagram||null,facebook:this.new_band.facebook||null,city:this.new_band.city||null,afin_a:this.new_band.afin_a||null,estilo:this.new_band.estilo||null,image:this.new_band.image||null},{merge:!0}).then((function(){console.log("banda editada"),e.$emit("close","refrescar bands")}))},subirBand:function(){var e=this,n=this.bands.length;this.db.collection("bands").doc("band_"+n).set({id:n,name:this.new_band.name,description:this.new_band.description,youtube:this.new_band.youtube,instagram:this.new_band.instagram,facebook:this.new_band.facebook,city:this.new_band.city,afin_a:this.new_band.afin_a,estilo:this.new_band.estilo,image:this.new_band.image}).then((function(){console.log("banda subida"),!e.edited_band&&e.new_show.timestamp?(e.new_show.band_id=n,e.new_show.band_name=e.new_band.name,e.subirShow()):e.$emit("close","refrescar bands")}))},deleteBand:function(){var e=this;window.confirm("Tas seguro?")&&this.db.collection("bands").doc("band_"+this.new_band.id).delete().then((function(){console.log("banda borrada"),e.$emit("close","refrescar bands")}))},subirShow:function(){var e=this,n=this.shows.length,t=new Date(this.new_show.timestamp);this.bands.find((function(n){return n.name===e.new_show.band}))?this.db.collection("shows").doc("show_"+n).set({id:n,timestamp:t,festival:this.new_show.festival,link:this.new_show.link,band:this.new_show.band,band_id:this.new_show.band_id,city:this.new_show.city,venue:this.new_show.venue,image:this.new_show.image,lat:this.new_show.lat,lon:this.new_show.lon,price:this.new_show.price}).then((function(){console.log("show subido"),e.$emit("close","refrescar shows")})):this.subirBand()},editShow:function(){var e=this;this.db.collection("shows").doc("show_"+this.new_show.id).set({id:this.new_show.id,timestamp:this.new_show.timestamp||null,festival:this.new_show.festival||null,link:this.new_show.link||null,band:this.new_show.band||null,band_id:this.new_show.band_id||null,city:this.new_show.city||null,venue:this.new_show.venue||null,image:this.new_show.image||null,lat:this.new_show.lat||null,lon:this.new_show.lon||null,price:this.new_show.price||null},{merge:!0}).then((function(){console.log("show editada"),e.$emit("close","refrescar shows")}))},deleteShow:function(){var e=this;window.confirm("Tas seguro?")&&this.db.collection("shows").doc("show_"+this.new_show.id).delete().then((function(){console.log("show borrado"),e.$emit("close","refrescar shows")}))}}}),f=h,w=(t("84f3"),t("2877")),m=Object(w["a"])(f,u,b,!1,null,"71b47f2e",null),p=m.exports,_={name:"App",components:{ModalSubirShow:p},computed:Object(r["a"])({},Object(d["b"])(["shows","bands","venues","user"]),{num_shows:function(){return this.shows.length},num_bands:function(){return this.bands.length}}),data:function(){return{shows_gs:[],shows_fb:[],bands_gs:[],bands_fb:[],subir_form:!1,edited_band:!1,edited_show:!1}},watch:{shows_gs:function(){this.$store.commit("updateShows",[].concat(Object(i["a"])(this.shows_fb),Object(i["a"])(this.shows_gs)))},shows_fb:function(){this.$store.commit("updateShows",[].concat(Object(i["a"])(this.shows_fb),Object(i["a"])(this.shows_gs)))},bands_gs:function(){this.$store.commit("updateBands",[].concat(Object(i["a"])(this.bands_fb),Object(i["a"])(this.bands_gs)))},bands_fb:function(){this.$store.commit("updateBands",[].concat(Object(i["a"])(this.bands_fb),Object(i["a"])(this.bands_gs)))}},created:function(){this.getShows(),this.getBands()},methods:{getShows:function(){var e=this;this.shows_fb=[];var n=l.a.firestore();n.collection("shows").onSnapshot((function(n){n.forEach((function(n){var t=n.data();e.shows_fb.push(t)}))}))},getBands:function(){var e=this;this.bands_fb=[];var n=l.a.firestore();n.collection("bands").onSnapshot((function(n){n.forEach((function(n){var t=n.data();e.bands_fb.push(t)}))}))},openModalSubirShow:function(e,n){e&&"band"===e&&(this.edited_band=n||"nueva"),e&&"show"===e&&(this.edited_show=n||"nueva"),this.subir_form=!0},closeModalSubirShow:function(e){this.subir_form=!1,"refrescar bands"===e?this.getBands():"refrescar shows"===e&&this.getShows()}}},v=_,g=(t("1825"),Object(w["a"])(v,s,o,!1,null,"8fad489a",null)),j=g.exports,y=t("9483");Object(y["a"])("".concat("/dashboard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var k=t("8c4f");a["a"].use(k["a"]);var C=new k["a"]({routes:[{path:"/",name:"bands",props:!0,component:function(){return t.e("chunk-7ab523dd").then(t.bind(null,"84b4"))}},{path:"/Shows",name:"shows",props:!0,component:function(){return t.e("chunk-6a42d4d3").then(t.bind(null,"f6f7"))}}]});a["a"].use(d["a"]);var S=new d["a"].Store({state:{shows:[],bands:[],venues:[],user:null,geolocation:{},city:null},getters:{},mutations:{updateUser:function(e,n){e.user=n},updateShows:function(e,n){n&&n.sort((function(e,n){return new Date(e.timestamp)-new Date(n.timestamp)})),e.shows=n},updateBands:function(e,n){e.bands=n},updateVenues:function(e,n){e.venues=n},updateGeolocation:function(e,n){e.geolocation=n},updateCity:function(e,n){e.city=n}},actions:{}}),x=t("c1df"),$=t.n(x);t("3cf0");a["a"].config.productionTip=!1,a["a"].prototype.$moment=$.a;var N={apiKey:"AIzaSyCcFHmQQSZQMCLlNetLQbW2T4Z7AKH6ztc",authDomain:"weclapp-eddbd.firebaseapp.com",databaseURL:"https://weclapp-eddbd.firebaseio.com",projectId:"weclapp-eddbd",storageBucket:"weclapp-eddbd.appspot.com",messagingSenderId:"611930943683",appId:"1:611930943683:web:c50aff0449c4ad6a"};l.a.initializeApp(N),new a["a"]({router:C,store:S,render:function(e){return e(j)}}).$mount("#app")},"84f3":function(e,n,t){"use strict";var a=t("3493"),s=t.n(a);s.a},f965:function(e,n,t){}});
//# sourceMappingURL=app.2941cd73.js.map