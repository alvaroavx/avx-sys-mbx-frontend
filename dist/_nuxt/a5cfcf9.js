(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{1e3:function(t,o,e){"use strict";e.r(o);e(49);var n={props:{url:{type:String}},data:function(){return{data:{},showOverlay:!1,link:"",frame:""}},watch:{},beforeDestroy:function(){clearInterval(this.cargar)},mounted:function(){var t=this;this.cargar=setInterval((function(){t.$axios.$get("/uploads?$sort[_id]=-1").then((function(a){return a.data[0]})).then((function(o){t.frame=o.fileName}))}),1e4)}},r=e(28),l=e(65),c=e.n(l),f=e(215),d=e(972),v=e(296),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{},[e("iframecion",{attrs:{src:t.url}},[e("v-container",[t._t("default"),t._v(" "),e("v-btn",{staticClass:"text-none",staticStyle:{opacity:"0","letter-spacing":"0","border-top":"1px solid #333","border-bottom":"1px solid #000","border-radius":"0"},attrs:{text:""},on:{click:function(o){t.showOverlay=!0}}},[t._v("\n        BOTONTEMPORAL\n      ")]),t._v(" "),e("v-overlay",{attrs:{value:t.showOverlay}},[e("Form",{attrs:{fields:[{name:"file",type:"files"}]},on:{file:function(o){t.showOverlay=!1}},model:{value:t.data,callback:function(o){t.data=o},expression:"data"}})],1)],2)],1)],1)}),[],!1,null,null,null);o.default=component.exports;c()(component,{Iframecion:e(996).default}),c()(component,{VBtn:f.a,VContainer:d.a,VOverlay:v.a})},990:function(t,o,e){var content=e(995);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(11).default)("a1e34a40",content,!0,{sourceMap:!1})},994:function(t,o,e){"use strict";e(990)},995:function(t,o,e){var n=e(10)(!1);n.push([t.i,".call_iframe{width:300px;height:630px}",""]),t.exports=n},996:function(t,o,e){"use strict";e.r(o);e(597);var n={props:{src:void 0},data:function(){return{link:""}},mounted:function(){this.link="https://call.roje.cl/10110?skipIntro=1"}},r=(e(994),e(28)),l=e(65),c=e.n(l),f=e(979),d=e(972),v=e(983),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{},[e("v-row",{attrs:{"no-gutters":""}},[t.src.match("waitpage")?t._e():e("v-col",[t._t("frame",[e("iframe",{staticStyle:{width:"100%",height:"630px"},attrs:{src:t.src,frameborder:"0",crossorigin:"anonymous",allowfullscreen:"",allow:"geolocation; microphone; camera",sandbox:"allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "}})])],2),t._v(" "),e("v-col",{attrs:{cols:t.src.match("waitpage")?12:"auto"}},[e("iframe",{staticClass:"call_iframe",style:{width:t.src.match("waitpage")?"100%":void 0},attrs:{src:t.link,frameborder:"0",crossorigin:"anonymous",allowfullscreen:"",allow:"geolocation; microphone; camera",sandbox:"allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "}})])],1),t._v(" "),e("v-container",[t._t("default")],2),t._v(" "),e("style",[t._v("\n    .back-btn {\n      display: none;0\n    }\n  ")])],1)}),[],!1,null,null,null);o.default=component.exports;c()(component,{VCol:f.a,VContainer:d.a,VRow:v.a})}}]);