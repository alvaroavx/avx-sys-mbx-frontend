(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1002:function(e,t,n){"use strict";n.r(t);n(50),n(21),n(56),n(41),n(6),n(62),n(72),n(46),n(7),n(13),n(9),n(14);var r=n(1),o=n(23);n(88),n(8),n(35),n(43),n(598);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d={props:{disableTitle:{type:Boolean,default:!1},disableMultiple:{type:Boolean,default:!1}},data:function(){return{actual:0,personas:[],myTeam:""}},mounted:function(){this.myTeam=this.$ls.get("usuario.team",String(Math.round(+new Date))),this.resetPersonas()},methods:{resetPersonas:function(){var e=[];e.push({name:"",email:""}),e.push({name:"",email:""}),e.push({name:"",email:""}),e.push({name:"",email:""}),e.push({name:"",email:""}),this.personas=e},add:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.personas.filter((function(a){return a.email})).length){t.next=24;break}n=e.personas.filter((function(a){return a.email})),r=f(n),t.prev=3,r.s();case 5:if((o=r.n()).done){t.next=11;break}return l=o.value,t.next=9,e.$axios.$post("/usuarios",c(c({},l),{},{team:e.myTeam}));case 9:t.next=5;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),r.e(t.t0);case 16:return t.prev=16,r.f(),t.finish(16);case 19:window.$nuxt.$dialog.confirm({text:"Se ha enviado un email conteniendo la lave del nuevo usuario",actions:{ok:"Aceptar"}}),e.$emit("sent",1),e.resetPersonas(),t.next=25;break;case 24:window.$nuxt.$dialog.confirm({text:"Debe añadir al menos un email",actions:{ok:"Aceptar"}});case 25:case"end":return t.stop()}}),t,null,[[3,13,16,19]])})))()}},render:function(){var e=this,t=arguments[0];return t("div",[t("div",{class:"registry-right-form"},[this.disableTitle?"":t("p",{class:"registry-title"},["Tu equipo"]),this.personas.length?t("div",[t("div",{class:"phase-blk"},[t("div",{class:"single-input-item"},[t("input",{domProps:{value:this.personas[this.actual].name},on:{input:function(t){e.personas[e.actual].name=t.target.value}},attrs:{type:"tel",placeholder:"Nombre"},class:""})])]),t("div",{class:"phase-blk"},[t("div",{class:"single-input-item"},[t("input",{domProps:{value:this.personas[this.actual].email},on:{input:function(t){e.personas[e.actual].email=t.target.value}},attrs:{type:"email",placeholder:"Email"},class:""})])])]):"",this.disableMultiple?"":t("div",{class:"invite-user"},[Array(4).fill(1).map((function(n,r){return t("span",{on:{click:function(){e.actual=r}}},[e.actual===r?t("span",{class:"active",style:"margin-bottom:-20px"},[t("i",{style:"color:blue",class:"fas fa-user"}),t("div",{class:"user-box"},[e.personas.length&&e.personas[e.actual].name||"Nombre persona agregada"])]):t("i",{class:"fas fa-user"})])}))])," "]),t("div",{class:"mt-12 row p-0 align-items-center"},[t("div",{class:"col-lg-3 col-md-4 col-sm-4"},[t("div",{class:"form-submit registry-sub mt-2"},[t("button",{attrs:{type:"submit"},class:"sub-btn",on:{click:function(){return e.add()}}},["Agregar"])])])])])}},h=n(28),component=Object(h.a)(d,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);