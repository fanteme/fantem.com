(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{274:function(t,c,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("663529d2",content,!0,{sourceMap:!1})},314:function(t,c,o){"use strict";o(274)},315:function(t,c,o){var e=o(27)(!1);e.push([t.i,'.products{background:#f0f4f5;color:#231815}.products .hero,.products i{height:540px}.products .hero-body{background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-position:50%}@media screen and (min-width:1361px){.products .hero-body{background-position:0 -50px}}.products .caption{font-size:36px;line-height:44px;margin:35px 0}.products .OomiProducts>h2{margin:50px 0 32px}.products .OomiProducts>h2:after{display:block;content:"";margin:8px auto 0;width:73px;height:2px;background-color:#ed7422}.products .OomiProducts .columns:not(.is-gapless){margin:-6px}.products .OomiProducts .columns .column{cursor:pointer;padding:6px;background:#fff;background-clip:content-box}.products .OomiProducts .columns .column .img-wrap{background:radial-gradient(#fff,#e8e8e8)}.products .OomiProducts .columns .column .img-wrap img{vertical-align:middle}.products .OomiProducts .columns .column .content-wrap{padding:36px 49px}.products .OomiProducts .columns .column .content-wrap h3{font-size:24px;color:#3e3a39}.products .OomiProducts .columns .column .content-wrap span{font-size:16px;color:#727171}.products .OomiProducts .columns.is-gapless{transition:all .2s linear}.products .OomiProducts .columns.is-gapless:hover{box-shadow:0 5px 30px rgba(0,0,0,.1);transform:translate3d(0,-2px,0);z-index:3}.products .OomiProducts .columns.is-multiline a{height:100%;display:block;transition:all .2s linear}.products .OomiProducts .columns.is-multiline a:hover{box-shadow:0 5px 30px rgba(0,0,0,.1);transform:translate3d(0,-2px,0);z-index:3}.products .OomiProducts .is-gapless{margin-bottom:12px}.products .OomiProducts .is-gapless .column{background:#fff}.products .thirdProducts{padding-bottom:105px}.products .thirdProducts .tabs ul{border:none}.products .thirdProducts .tabs ul li{padding:0 42px;font-size:18px;color:#3e3a39}.products .thirdProducts .column .item{margin:10px 0;background:#fff;height:110px}.products .thirdProducts .column .item img{width:105px}.products .previewProduct .modal-card-body .productImage{height:12rem;box-shadow:1px 1px 5px #ccc}',""]),t.exports=e},409:function(t,c,o){"use strict";o.r(c);var e=o(3),n=(o(29),{head:function(){return{title:"产品中心_OOMI_智能家居设备_OOMI智能家居系统",meta:[{name:"keywords",content:"OOMI智能家居系统,智能家庭网关,智能传感器,智能灯泡,智能警示器,智能开关,智能插座,智能红外转换器,智能场景面板"},{name:"description",content:"丰唐物联技术（深圳）有限公司的产品在设计上满足了用户舒适生活的同时突出时尚感、科技感，并且安装便捷，操作简单，轻松实现对灯光、窗帘、空调、影音等家电全方位智能控制。"}]}},data:function(){return{isActive:!1,categories:[{name:this.$t("网关类"),slug:"gateway"},{name:this.$t("开关类"),slug:"switch"},{name:this.$t("传感类"),slug:"sensor"},{name:this.$t("辅助类"),slug:"auxiliary"}],thirdProducts:[],currentProduct:{title:{},content:{}}}},mounted:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function c(){var o,data;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.$axios.get("".concat(t.$store.state.api,"/posts?categories=44&per_page=40&_embed&order=asc"));case 2:o=c.sent,data=o.data,t.thirdProducts=data,t.initSmoothScroll();case 6:case"end":return c.stop()}}),c)})))()},methods:{initSmoothScroll:function(){new SmoothScroll('a[href*="#"]',{header:"header"})},previewProduct:function(t){var c=this;return Object(e.a)(regeneratorRuntime.mark((function o(){var e,data;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,c.$axios.get("".concat(c.$store.state.api,"/posts?categories=39&include=").concat(t));case 2:e=o.sent,data=e.data,c.currentProduct=data[0],c.openModal();case 6:case"end":return o.stop()}}),o)})))()},openModal:function(){this.isActive=!0},closeModal:function(){this.isActive=!1}}}),r=(o(314),o(7)),component=Object(r.a)(n,(function(){var t=this,c=t._self._c;return c("main",{staticClass:"main"},[c("section",{staticClass:"products"},[c("div",{staticClass:"hero"},[c("div",{staticClass:"hero-body",style:{backgroundImage:"url(".concat(t.$store.state.cdn,"/2018/11/c95c3bfd1d4d0cc36c4799ce253f1af0.jpg)")}})]),t._v(" "),c("div",{staticClass:"container"},[c("div",{staticClass:"OomiProducts"},[c("div",{staticClass:"caption has-text-centered",attrs:{id:"gateway"}},[t._v(t._s(t.$t("智能网关")))]),t._v(" "),c("div",{staticClass:"columns is-gapless"},[c("div",{staticClass:"column is-8"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/touch")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/0fc8cb72096f67de319ee559bc53c677.png"),alt:""}})])])],1),t._v(" "),c("div",{staticClass:"column is-4 center"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/touch")}},[c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能操控平板")))]),t._v(" "),c("span",[t._v(t._s(t.$t("OOMI智能家居设备操作中心")))])])])],1)]),t._v(" "),c("div",{staticClass:"columns is-multiline"},[c("div",{staticClass:"column"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/cube")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/36f5d4fea4f4f1c26f68c37bfa70a026.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("Cube智能家庭网关")))]),t._v(" "),c("span",[t._v(t._s(t.$t("OOMI智能家居设备控制中心")))])])])],1),t._v(" "),c("div",{staticClass:"column"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/hub")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/9e1d66d8ffa3fd5772ab668eb99331fc.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("Hub智能家庭网关")))]),t._v(" "),c("span",[t._v(t._s(t.$t("OOMI智能家居设备控制中心")))])])])],1)]),t._v(" "),c("div",{staticClass:"caption has-text-centered",attrs:{id:"switch"}},[t._v(t._s(t.$t("智能开关")))]),t._v(" "),c("div",{staticClass:"columns is-multiline"},[c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/plug")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/8c936b8a72123f791a051e1958ef7897.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能插座")))]),t._v(" "),c("span",[t._v(t._s(t.$t("常规家电无线远程定时智能操控")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/powersocket")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/0952af6e1b9c16c925f74052f688714b.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能插座面板")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线远程智能控制电源开关")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/mote")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/5e5ae9abb6a1b0ce07be45c1b76bea75.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能场景面板")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线便携式自定义操控开关")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/smartswitch")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/141890ba007ea3450083a6e4adf637a0.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能开关")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线远程智能场景触摸控制")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/panel")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2019/08/5ddfe0427060c97cdc80457cd558cca5.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能触控面板(S系列)")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线远程智能灯光场景控制")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/curtain")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/eba1ec6bd9e7ab3ceca229a4084896eb.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能窗帘电机")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线遥控与远程操控二合一")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/switch")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/439124df4d5c053206878fa9ee9e721e.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能嵌入式开关")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线远程智能控制灯光")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/dimmer")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/67ccdc28db8f9a5a37326dec3bb6f731.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能嵌入式调光开关")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线远程智能控制灯光与亮度调节")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/shutter")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/5e9170adb6e8bdb4cb53268f1f569458.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能马达控制器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线远程交流电机控制")))])])])],1)]),t._v(" "),c("div",{staticClass:"caption has-text-centered",attrs:{id:"light"}},[t._v(t._s(t.$t("智能照明")))]),t._v(" "),c("div",{staticClass:"columns is-multiline"},[c("div",{staticClass:"column"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/bulb")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/d91f2c8f481bc4acb44c64c341624fe7.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能灯泡")))]),t._v(" "),c("span",[t._v(t._s(t.$t("智能语音联动 调节灯泡颜色、亮度、颜色灰度")))])])])],1),t._v(" "),c("div",{staticClass:"column"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/colorstrip")}},[c("div",{staticClass:"img-wrap center is-multiline"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/3a31cea49aa01e84f3e92cf25abee67e.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能灯带")))]),t._v(" "),c("span",[t._v(t._s(t.$t("1600万无极变色 长度任意裁剪")))])])])],1)]),t._v(" "),c("div",{staticClass:"caption has-text-centered",attrs:{id:"sensor"}},[t._v(t._s(t.$t("智能传感器")))]),t._v(" "),c("div",{staticClass:"columns is-multiline"},[c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/door&window")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/e95ad8faff6f05c47e7a16685b1bd9b3.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能门窗传感器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("实时监测门窗柜体等物品开启/关闭状态")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/watersensor")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/3f2bec3082cc8a74843e3df4bfb63588.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能水位传感器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("感知水位溢出与漏水状态")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/multisensor")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/d70a537d7672355de18b8effec9b5001.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能六合一传感器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("多功能传感设备")))]),t._v(" "),c("span",[t._v(t._s(t.$t("集红外移动监测、震动、紫外线、亮度、温度、湿度感知于一体")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/motionsensor")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/5a9adf7ada73b4fbebcc96950264bc2a.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能三合一传感器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("多功能传感设备")))]),t._v(" "),c("span",[t._v(t._s(t.$t("集红外移动监测、亮度、温度感知于一体")))])])])],1)]),t._v(" "),c("div",{staticClass:"caption has-text-centered",attrs:{id:"auxiliary"}},[t._v(t._s(t.$t("智能辅助类")))]),t._v(" "),c("div",{staticClass:"columns is-gapless"},[c("div",{staticClass:"column is-8"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/infinitydock")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/27db8c27766c4c6b4dff615ebf0e0e2c.png"),alt:""}})])])],1),t._v(" "),c("div",{staticClass:"column is-4 center has-text-left"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/infinitydock")}},[c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能充电底座")))]),t._v(" "),c("span",[t._v(t._s(t.$t("智能操控平板即时充电续航")))])])])],1)]),t._v(" "),c("div",{staticClass:"columns is-multiline"},[c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/watersensordock")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/a3793ecf4046132d34f46b02a91e67a1.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能水位传感器底座")))]),t._v(" "),c("span",[t._v(t._s(t.$t("OOMI智能水位传感器持续供电续航")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/rangeextander")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/d4ec42815ba57a023fc28d596471c36b.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能中继器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("增强Z-Wave信号 杜绝信号盲区")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/siren")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/45d1cb63fdfda346832b1c1068839fec.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能警示器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线声光警示器 防范于未然")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/sirenplus")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/de5322230c57b2555ea260610b64c415.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能多功能警示器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("无线声光警示器 安防漏洞即时警报")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/irblaster")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/015c865b905c9538339bef5eaa3dd0e9.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能红外转换器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("普通家电轻松转换智能设备")))])])])],1),t._v(" "),c("div",{staticClass:"column is-6-tablet is-6-fullhd"},[c("nuxt-link",{attrs:{to:"/".concat(this.$store.state.locale,"/products/irblasterac")}},[c("div",{staticClass:"img-wrap"},[c("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/10/bcb33af07107428248c0ee7288334c5e.png"),alt:""}})]),t._v(" "),c("div",{staticClass:"content-wrap"},[c("h3",[t._v(t._s(t.$t("智能空调红外转换器")))]),t._v(" "),c("span",[t._v(t._s(t.$t("直插式空调控制设备 轻松实现空调智能化")))])])])],1)])]),t._v(" "),c("div",{staticClass:"thirdProducts has-text-centered"},[c("div",{staticClass:"caption",attrs:{id:"thirdProducts"}},[t._v(t._s(t.$t("第三方兼容产品")))]),t._v(" "),c("div",{staticClass:"columns is-multiline is-variable is-7"},t._l(t.thirdProducts,(function(t,o){return c("div",{key:o,staticClass:"column is-4-tablet is-one-third-desktop is-one-quarter-widescreen is-2-fullhd"},[c("div",{staticClass:"item center"},[t._embedded["wp:featuredmedia"]?c("img",{attrs:{src:t._embedded["wp:featuredmedia"][0].source_url}}):c("img",{attrs:{src:"https://picsum.photos/640/400/?random"}})])])})),0)])]),t._v(" "),c("section",{staticClass:"previewProduct"},[c("div",{staticClass:"modal",class:{"is-active":t.isActive}},[c("div",{staticClass:"modal-background",on:{click:t.closeModal}}),t._v(" "),c("div",{staticClass:"modal-card"},[c("header",{staticClass:"modal-card-head"},[c("p",{staticClass:"modal-card-title",domProps:{textContent:t._s(t.currentProduct.title.rendered)}}),t._v(" "),c("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]),t._v(" "),c("section",{staticClass:"modal-card-body"},[t.currentProduct.image?c("img",{staticClass:"productImage",attrs:{src:"".concat(t.$store.state.cdn,"/").concat(t.currentProduct.image)}}):t._e(),t._v(" "),c("div",{staticClass:"specification",domProps:{innerHTML:t._s(t.currentProduct.content.rendered)}})]),t._v(" "),c("footer",{staticClass:"modal-card-foot"})])])])])])}),[],!1,null,null,null);c.default=component.exports}}]);