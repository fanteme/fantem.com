(window.webpackJsonp=window.webpackJsonp||[]).push([[102,50],{304:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("3126f7e0",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n(304)},373:function(t,e,n){var o=n(27)(!1);o.push([t.i,".app .download{padding:82px 0 60px}.app .download .caption{font-size:36px;line-height:44px;margin:23px 0 0}.app .download .icon{margin-top:15px;width:auto;height:auto}.app .download .img{margin:35px 0 25px}.app .download .center{flex-direction:column}.app .download .button{font-size:16px;height:46px;margin:10px 35px 0;background:#ed7422;color:#fff;border:none}.app .download .button i{margin-right:8px}",""]),t.exports=o},440:function(t,e,n){"use strict";n.r(e);var o=n(3),c=(n(29),n(146),{head:function(){return{title:"APP下载_丰唐物联_OOMI",meta:[{name:"keywords",content:"OOMI APP下载,智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联"},{name:"description",content:"丰唐物联技术（深圳）有限公司一直致力于智能家居产品及家居整体智能控制解决方案的研究与实践，提供智能家居整体解决方案，为您轻松打造舒适便利的智能家居生活环境。"}]}},data:function(){return{isActive:!1,apk:{acf:{fileurl:""}}}},methods:{downloadApk:function(){"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(this.isActive=!0)}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat(t.$store.state.api,"/apk?per_page=1"));case 2:n=e.sent,data=n.data,t.apk=data[0];case 5:case"end":return e.stop()}}),e)})))()}}),r=(n(372),n(7)),component=Object(r.a)(c,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("section",{staticClass:"app"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns download"},[e("div",{staticClass:"column is-6-tablet is-7-desktop has-text-centered"},[e("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/917821c3812524b594aad9a5f99e7abd.png")}})]),t._v(" "),e("div",{staticClass:"column is-6-tablet is-5-desktop has-text-centered"},[e("img",{staticClass:"icon",attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/fdc02fcd26b7ab19b3809b22b2bbd040.png")}}),t._v(" "),e("p",{staticClass:"caption"},[t._v("OOMI")]),t._v(" "),e("img",{staticClass:"img",attrs:{width:"300",src:"".concat(this.$store.state.cdn,"/2018/10/b44f2d1f08a2a16a23d6a792bafdfb2d.svg"),alt:""}}),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column center"},[e("img",{attrs:{width:"120",src:"".concat(this.$store.state.cdn,"/2018/11/d4df1b7c19c06e0ce431b3f77a9a76dc.png"),alt:""}}),t._v(" "),e("a",{staticClass:"button",attrs:{href:t.apk.acf.fileurl},on:{click:function(e){return e.stopPropagation(),t.downloadApk.apply(null,arguments)}}},[e("i",{staticClass:"fa fa-android fa-2x"}),t._v("\n                  Android"+t._s(t.$t("下载"))+"\n                ")])]),t._v(" "),e("div",{staticClass:"column center"},[e("img",{attrs:{width:"120",src:"".concat(this.$store.state.cdn,"/2018/11/987690a5531bf967e0cf8e408357edaf.png"),alt:""}}),t._v(" "),e("a",{staticClass:"button",attrs:{href:"https://itunes.apple.com/cn/app/oomi/id1142860128?mt=8"}},[e("i",{staticClass:"fa fa-apple fa-2x"}),t._v("\n                  App store"+t._s(t.$t("下载"))+"\n                ")])])])])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"video"},[e("video",{staticClass:"video-bg",attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[e("source",{attrs:{src:"".concat(this.$store.state.cdn,"/fantem/video/OOMI%20APP_800PX.mp4"),type:"video/mp4"}}),t._v(" "),e("source",{attrs:{src:"".concat(this.$store.state.cdn,"/fantem/video/OOMI%20APP_800PX.webm"),type:"video/webm"}})])])]),t._v(" "),e("div",{staticClass:"modal",class:{"is-active":t.isActive},attrs:{id:"modal"},on:{click:function(e){t.isActive=!t.isActive}}},[e("div",{staticClass:"modal-background"}),t._v(" "),t._m(0),t._v(" "),e("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-content"},[e("p",{staticStyle:{color:"white","font-size":"20px","text-align":"center"}},[t._v("\n            点击右上角...\n            "),e("br"),t._v("在浏览器中打开\n          ")])])}],!1,null,null,null);e.default=component.exports},536:function(t,e,n){"use strict";n.r(e);var o=n(440).default,c=n(7),component=Object(c.a)(o,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);