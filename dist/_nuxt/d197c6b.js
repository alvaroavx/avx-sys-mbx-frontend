(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1010:function(t,e,o){const n=o(1015);let r=null;t.exports={uploadImgur:async t=>{try{var e=new FormData;e.append("image",t);const o=await n.post("https://api.imgur.com/3/image",e,{headers:{authorization:`Client-ID ${r}`}});return Object.assign({success:!0,url:o.data.data.link})}catch(e){return Object.assign({success:!1,message:e.message,file:t})}},setClientId:t=>{r=t}}},1011:function(t,e,o){var content=o(1012);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("01907af4",content,!0,{sourceMap:!1})},1012:function(t,e,o){var n=o(10)(!1);n.push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=n},1036:function(t,e,o){"use strict";o.r(e);var n=o(1010),r={props:{value:{type:String}},methods:{upload:function(img){return n.setClientId("9a55a3919977065"),n.uploadImgur(img)},clickImage:function(){this.$refs.file.click()},subirImagen:function(){var t=this,e=this.$refs.file.files[0];this.upload(e).then((function(a){t.$emit("input",a.url)}))}}},l=o(28),d=o(65),c=o.n(d),v=o(215),h=(o(7),o(6),o(8),o(13),o(9),o(14),o(1)),f=(o(1011),o(123)),m=f.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return f.a.options.computed.classes.call(this)}},methods:{genData:f.a.options.methods.genData}}),w=o(26),y=o(5);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(y.a)(m,w.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return x(x({},m.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,x({},m.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),j=o(225),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.value?o("v-img",{attrs:{"max-height":"200","max-width":"200",src:t.value,width:"100%"}}):t._e(),t._v(" "),o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.subirImagen}}),t._v(" "),o("v-btn-toggle",{attrs:{value:-1}},[o("div",{on:{click:t.clickImage}},[t._t("default",[o("v-btn",[t._v("Subir imagen")])])],2)])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VBtnToggle:k,VImg:j.a})}}]);