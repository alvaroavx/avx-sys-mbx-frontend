(window.webpackJsonp=window.webpackJsonp||[]).push([[75,73],{1003:function(t,e,n){"use strict";n(999)},1004:function(t,e,n){var o=n(10)(!1);o.push([t.i,".percent[data-v-45f9f868]{display:inline-block;vertical-align:24px;font-size:60px}.seven-days[data-v-45f9f868]{color:#e3402e!important;font-weight:bolder;line-height:24px;margin-left:-30px;margin-top:40px}",""]),t.exports=o},1005:function(t,e,n){var content=n(1006);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5276b867",content,!0,{sourceMap:!1})},1006:function(t,e,n){var o=n(10)(!1);o.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=o},1008:function(t,e,n){"use strict";n.r(e),n.d(e,"progress",(function(){return progress}));var o=n(55),progress=(n(82),n(89),n(29),n(43),n(49),n(8),{data:function(){return{nextEvent:{},etapas:[{link:"/kick-off",match:/kick/i,active:!0,title:"Kick Off"},{link:"/Mi-MBX",match:/search/i,active:!1,title:"Research"},{link:"/brand-compass",match:/propuesta/i,active:!1,title:"Brand Compass"},{link:"/big-bang-workshop",match:/(?!propuesta).*brand/i,active:!1,title:"Big Bang Workshop"},{link:"/brand-compass-validation",match:/propuesta.*compass/i,active:!1,title:"Validación Brand Compass"},{link:"/big-bang-workshop-proposal",match:/big/i,active:!1,title:"Propuesta Big Bang Workshop"},{link:"/revision",match:/visión/i,active:!1,title:"Revisión 1"},{link:"/revision",match:/visión 2/i,active:!1,title:"Revisión 2"},{link:"/revision",match:/visión 3/i,active:!1,title:"Revisión 3"},{link:"/Business-Idea-Workshop",match:/busines/i,active:!1,title:"Business Idea Workshop"},{match:/final/i,active:!1,title:"Entrega final"}]}},mounted:function(){this.startLoading()},methods:{getAdvanceIndex:function(){var t=this,e=Object(o.a)(this.etapas).find((function(a,e){return!!t.nextEvent.summary&&t.nextEvent.summary.match("\\(".concat(e+1,"\\)"))}));return this.etapas.indexOf(e)},smartLock:function(){var t=this.getAdvanceIndex();this.etapas.map((function(a,b){return a.active=b<=t}))},startLoading:function(){var t=this;return this.$axios.$get("/get-calendar",{progress:!1}).then((function(a){t.nextEvent=a})).then((function(){setTimeout((function(){t.smartLock(),t._isDestroyed||t.startLoading()}),3e3)}))}}}),r={mixins:[progress],props:{tareas:{type:Boolean,default:!1}},computed:{strokeDashoffset:function(){var t=this.percent();return isNaN(t)?100:(t<0&&(t=0),t>100&&(t=100),-((100-t)/100*(300*Math.PI)))}},methods:{percent:function(){return Math.round(100*(Math.max(this.etapas.filter((function(a){return a.active})).length,1)-1)/(this.etapas.length-1))}}},l=(n(1003),n(28)),c=n(65),d=n.n(c),v=n(1028),f=n(215),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"back-btn"}),t._v(" "),n("div",{staticClass:"mbx-page"},[n("div",{staticClass:"h-100 position-relative"},[n("div",{staticClass:"mbx-main-blk"},[n("div",{staticClass:"mbx-bottom-content-blk"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-1"}),t._v(" "),n("div",{staticClass:"col-7 pt-12"},[n("div",{staticClass:"mbx-left-content left-border"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"control-panel-left-blk"},[n("div",{staticClass:"control-panel-progress"},[n("div",{staticClass:"progress-circle"},[n("svg",{staticStyle:{transform:"rotate(-90deg)"},attrs:{id:"svg",width:"200",height:"200",viewPort:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{id:"bar",r:"150",cx:"150",cy:"150",fill:"transparent","stroke-dasharray":"952","stroke-dashoffset":t.strokeDashoffset}})]),t._v(" "),n("div",{staticClass:"progress-circle-rate"},[n("p",{staticClass:"font-weight-bold",staticStyle:{"font-family":"barlow","font-size":"100px"}},[t._v("\n                                "+t._s(t.percent())),n("span",{staticClass:"percent"},[t._v("%")])]),t._v(" "),n("span",{staticStyle:{color:"#b1b1b1"}},[t._v("Avance")])])]),t._v(" "),n("div",{staticClass:"control-panel-btn"},[n("a",{staticClass:"seven-days",attrs:{href:""}},[t._v("\n                              "+t._s(t.nextEvent.summary)+"\n                              "+t._s(t.moment(t.nextEvent.start).fromNow()))])])])])]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"control-panel-step-bar"},[t._m(1),t._v(" "),n("div",{staticClass:"common-step-bar-blk"},[n("div",{staticClass:"step-bar"},[n("ul",t._l(t.etapas,(function(e){return n("li",{key:e.title,class:{active:e.active}},[t._v("\n                                "+t._s(e.title)+"\n\n                                "),e.active&&"Research"===e.title?n("v-badge",{attrs:{content:"3",color:"red"}}):t._e(),t._v(" "),n("div",[e.active&&t.etapas.filter((function(a){return a.active})).slice(-1)[0].title===e.title?n("v-btn",{staticClass:"text-none text-body py-5 px-6 my-4 rounded-0",staticStyle:{"border-top":"1px solid","border-bottom":"1px solid","font-size":"18px","font-weight":"600","letter-spacing":"0"},attrs:{disabled:!(new Date>new Date(t.nextEvent.start)),to:e.link,text:""}},[t._v("\n                                    "+t._s(new Date>new Date(t.nextEvent.start)?"Ingresar":"Aún no comienza")+"\n                                  ")]):t._e()],1)],1)})),0)])])])])])])]),t._v(" "),n("div",{staticClass:"col-4",staticStyle:{background:"#f2f2f0","padding-top":"160px"}},[n("div",{staticClass:"mbx-bottom-right-content control-panel-right-blk w-100",staticStyle:{"max-width":"100%"}},[n("div",{staticClass:"control-panel-right"},[n("div",{staticClass:"phase-blk"},[n("nuxt-link",{staticClass:"font-weight-normal common-field",attrs:{to:"Mi-MBX?"+(t.tareas?"tareas=1":"")}},[t._v("\n                        Mi MBX\n                        "),t.nextEvent&&t.nextEvent.summary&&t.nextEvent.summary.match("(2)")?n("v-badge",{attrs:{content:"3",color:"red"}}):t._e()],1)],1),t._v(" "),n("div",{staticClass:"phase-blk"},[n("nuxt-link",{staticClass:"font-weight-normal common-field",attrs:{to:"my-team"}},[t._v("\n                        Mi equipo\n                      ")])],1),t._v(" "),n("div",{staticClass:"phase-blk"},[n("nuxt-link",{staticClass:"font-weight-normal common-field",attrs:{to:"contract-and-invoice"}},[t._v("\n                        Contrato y factura\n                      ")])],1),t._v(" "),n("div",{staticClass:"phase-blk"},[n("nuxt-link",{staticClass:"font-weight-normal common-field",attrs:{to:"my-project"}},[t._v("\n                        Mi project\n                      ")])],1),t._v(" "),n("div",{staticClass:"phase-blk"},[n("nuxt-link",{staticClass:"font-weight-normal common-field shop",attrs:{to:"Shop"}},[t._v("\n                        Shop\n                      ")])],1),t._v(" "),t._t("default",null,null,{nextEvent:t.nextEvent})],2)])])])])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"bold-title font-weight-bold",staticStyle:{"line-height":"40px","margin-bottom":"50px"}},[t._v("\n                    HOLA! "),n("br"),t._v("BIENVENIDO A MBX\n                  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Próximo hito: "),n("b",[t._v(" 20 minutos")])])}],!1,null,"45f9f868",null);e.default=component.exports;d()(component,{VBadge:v.a,VBtn:f.a})},1028:function(t,e,n){"use strict";n(7),n(6),n(8),n(13),n(9),n(14);var o=n(127),r=n(1),l=(n(18),n(1005),n(170)),c=n(26),d=n(17),v=n(48),f=n(304),h=n(94),m=n(5),_=n(0);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(m.a)(c.a,Object(h.b)(["left","bottom"]),d.a,v.a,f.a).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.m)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(l.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(_.m)(this)],r=this.$attrs,l=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(o.a)(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},n)}})},1029:function(t,e,n){var content=n(1062);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("e61e2a8c",content,!0,{sourceMap:!1})},1061:function(t,e,n){"use strict";n(1029)},1062:function(t,e,n){var o=n(10)(!1);o.push([t.i,".v-toolbar__content{background:#24262b!important}.mbx-bottom-content-blk .col-4{background:#02bddc!important}a.font-weight-normal.common-field{color:#fff!important}.v-main__wrap,body,html{background:#24262b!important;color:#fff!important}.percent{display:inline-block;vertical-align:24px;font-size:60px}.seven-days{color:#e3402e!important;font-weight:bolder;line-height:24px;margin-left:-30px;margin-top:40px}.mbx-bottom-content-blk{background:#24262b;color:#fff}a.text-none.v-btn--router.v-btn--text.v-size--default{color:#fff!important}",""]),t.exports=o},1093:function(t,e,n){"use strict";n.r(e);var o={components:{controlPanel:n(1008).default}},r=(n(1061),n(28)),l=n(65),c=n.n(l),d=n(1028),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("control-panel",{attrs:{tareas:"",back:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.nextEvent;return n("div",{staticClass:"phase-blk"},[n("nuxt-link",{staticClass:"font-weight-normal common-field shop",attrs:{to:"/last/Mesa-de-trabajo-1-copia-34"}},[t._v("\n        Tareas\n        "),o&&o.summary&&o.summary.match("(2)")?n("v-badge",{attrs:{content:"3",color:"red"}}):t._e()],1)],1)}}])})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBadge:d.a})},999:function(t,e,n){var content=n(1004);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("f1245c9a",content,!0,{sourceMap:!1})}}]);