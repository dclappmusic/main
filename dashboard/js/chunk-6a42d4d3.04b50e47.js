(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a42d4d3"],{"2c7a":function(s,t,i){"use strict";var a=i("3449"),n=i.n(a);n.a},3449:function(s,t,i){},f6f7:function(s,t,i){"use strict";i.r(t);var a=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"page shows",attrs:{id:"shows"}},[i("div",{staticClass:"cabecera"},[i("router-link",{staticClass:"nav_link",attrs:{to:"/"}},[s._v("Bands")]),i("h1",{staticClass:"tit"},[s._v("Shows")]),i("p",{staticClass:"cta",on:{click:function(t){return s.$emit("openModalSubirShow","show")}}},[s._v("Subir show")])],1),i("div",{staticClass:"view"},[i("div",{staticClass:"tabla"},[i("div",{staticClass:"fila cabecero"},[i("h3",{staticClass:"tit id sort",on:{click:function(t){return s.ordenarPor("id")}}},[s._v("id ⇕")]),i("h3",{staticClass:"tit band sort",on:{click:function(t){return s.ordenarPor("band")}}},[s._v("band ⇕")]),i("h3",{staticClass:"tit where"},[s._v("where")]),i("h3",{staticClass:"tit when sort",on:{click:function(t){return s.ordenarPor("timestamp")}}},[s._v("when ⇕")])]),s._l(s.shows_filtrados,(function(t,a){return i("div",{key:a,staticClass:"fila",on:{click:function(i){return s.$emit("openModalSubirShow","show",t)}}},[i("p",{staticClass:"id"},[s._v(s._s(t.id))]),i("p",{staticClass:"band"},[s._v(s._s(t.band))]),i("p",{staticClass:"where"},[s._v(s._s(t.venue))]),i("p",{staticClass:"when"},[s._v(s._s(t.timestamp?s.$moment(t.timestamp).format("DD/MM/YYYY"):"Sin fecha"))])])}))],2)])])},n=[],o=i("2909"),e=i("5530"),l=i("2f62"),r={name:"Shows",props:[],components:{},computed:Object(e["a"])({},Object(l["b"])(["shows","bands","venues","user"])),data:function(){return{subir_show:!1,shows_filtrados:[],new_show:{id:null,link:null,band:null,band_id:null,timestamp:null,city:null,venue:null,festival:null,image:null,lat:null,lon:null,price:null}}},watch:{shows:function(){this.shows_filtrados=Object(o["a"])(this.shows).sort((function(s,t){return t.id-s.id}))}},created:function(){this.shows_filtrados=Object(o["a"])(this.shows).sort((function(s,t){return t.id-s.id}))},methods:{ordenarPor:function(s){var t;"id"===s||"timestamp"===s?(t=this.shows_filtrados[0][s]<this.shows_filtrados[this.shows_filtrados.length-1][s],this.shows_filtrados.sort((function(i,a){return t?a[s]-i[s]:i[s]-a[s]}))):(t=this.shows_filtrados[0][s].localeCompare(this.shows_filtrados[this.shows_filtrados.length-1][s]),this.shows_filtrados.sort((function(i,a){return t>0?i[s].localeCompare(a[s]):a[s].localeCompare(i[s])})))}}},c=r,u=(i("2c7a"),i("2877")),h=Object(u["a"])(c,a,n,!1,null,"3fbda93e",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-6a42d4d3.04b50e47.js.map