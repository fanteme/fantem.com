(window.webpackJsonp=window.webpackJsonp||[]).push([[92,40],{238:function(t,e,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("a1541aa8",content,!0,{sourceMap:!1})},239:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("685deabb",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n(238)},241:function(t,e,n){var c=n(27)(!1);c.push([t.i,".productbanner{background-color:#eaeeef;background-repeat:no-repeat;min-height:775px;color:#3e3a39}.productbanner .is-5{display:flex;flex-direction:column;justify-content:center}.productbanner .title{color:#e76c26;font-size:50px}.productbanner .subtitle{font-size:37px;margin:28px 0 62px;color:#3e3a39}.productbanner .content{font-size:16px;line-height:28px}.productbanner.black{background-size:cover;background-position:50%;background-image:url(http://cdn.fantem.cn/2019/03/f1a535dee2c194439d48988e78169788.png)}.productbanner.black .content,.productbanner.black .subtitle{color:#fff}",""]),t.exports=c},242:function(t,e,n){"use strict";n(239)},243:function(t,e,n){var c=n(27)(!1);c.push([t.i,".section-parameter{background:#eaeeef;padding-bottom:80px}.section-parameter .container{overflow:hidden}.section-parameter .container .title{color:#3e3a39;font-size:36px;padding:80px 0 30px;border-bottom:1px solid #e88d58}.section-parameter .container .content{background:#fff;margin-top:20px;padding-bottom:12px}.section-parameter .container .content .column{padding-top:14px;padding-bottom:14px}.section-parameter .container .is-2{background:#979898;text-align:center}.section-parameter .container .is-4{background:#fff;color:#727171}",""]),t.exports=c},244:function(t,e,n){"use strict";var c={props:{banner:{type:Object}}},o=(n(240),n(7)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"productbanner center",class:[t.banner.class]},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-5"},[e("h1",{staticClass:"title has-text-weight-normal"},[t._v(t._s(t.banner.title))]),t._v(" "),e("h4",{staticClass:"subtitle has-text-weight-light"},[t._v(t._s(t.banner.subtitle))]),t._v(" "),e("p",{staticClass:"content has-text-weight-light"},[t._v(t._s(t.banner.content))])]),t._v(" "),e("div",{staticClass:"column is-7 has-text-right"},[e("u-animate-container",[e("u-animate",{attrs:{name:"fadeInDown",delay:"0s",duration:"1.5s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[e("img",{attrs:{src:t.banner.img}})])],1)],1)])])])}),[],!1,null,null,null);e.a=component.exports},245:function(t,e,n){"use strict";var c={props:{parameters:{type:Array}}},o=(n(242),n(7)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section-parameter"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-12 has-text-centered"},[e("h2",{staticClass:"title has-text-weight-normal"},[t._v(t._s(t.$t("产品参数")))])]),t._v(" "),e("div",{staticClass:"column is-12"},[e("div",{staticClass:"columns is-multiline content"},t._l(t.parameters,(function(n,c){return e("div",{key:c,staticClass:"column",class:n.column},[c%2==0?e("span",{staticClass:"has-text-white"},[t._v(t._s(n.item))]):e("span",[t._v(t._s(n.value))])])})),0)])])])])}),[],!1,null,null,null);e.a=component.exports},296:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("65b174f3",content,!0,{sourceMap:!1})},356:function(t,e,n){"use strict";n(296)},357:function(t,e,n){var c=n(27)(!1);c.push([t.i,".section-top.featrue[data-v-4689dd0e]{padding:105px 0 115px}.section-top.featrue img[data-v-4689dd0e]{margin:25px 0 10px}.section-top.featrue .center[data-v-4689dd0e]{align-items:stretch}.section-top.featrue .subtitle[data-v-4689dd0e]{font-size:20px;margin-bottom:18px}.section-top.control .columns[data-v-4689dd0e]{height:855px}.section-right[data-v-4689dd0e]{background-position:100%}.section-right .title[data-v-4689dd0e]{margin-bottom:38px}.section-right.life .columns[data-v-4689dd0e]{height:850px}.section-right.linkage[data-v-4689dd0e]{height:855px;padding:75px 0 0}",""]),t.exports=c},432:function(t,e,n){"use strict";n.r(e);var c=n(244),o=n(245),l={components:{ProductBanner:c.a,ProductParameter:o.a},data:function(){return{banner:{title:this.$t("智能开关"),subtitle:"OOMI WallSwitch",content:this.$t("智能开关 OOMI WallSwitch包含智能单火一路 / 二路开关、智能零火一路 / 二路 / 四路开关 、OOMI 智能触摸开关，是一款基于Z-Wave无线遥控和触摸控制的设备，可通过按键及无线命令控制开关。"),img:"".concat(this.$store.state.cdn,"/2018/11/6c48652b05b443ab65c33f36d7a4b30f.png")},parameters:[{column:"is-2",item:this.$t("额定电压")},{column:"is-4",value:"220V ～ 50Hz"},{column:"is-2",item:this.$t("待机功耗")},{column:"is-4",value:this.$t("1.0W( 零火一路 / 一路 / 四路开关 )")},{column:"is-2",item:this.$t("工作环境")},{column:"is-4",value:this.$t("温度：0 – 40℃ / 湿度：20 – 80% RH")},{column:"is-2",item:this.$t("无线距离")},{column:"is-4",value:this.$t("室内 40m")},{column:"is-2",item:this.$t("产品尺寸")},{column:"is-4",value:"86 × 86 × 35mm "},{column:"is-2",item:this.$t("无线功能")},{column:"is-4",value:"Z-Wave Plus"},{column:"is-2",item:this.$t("产品颜色")},{column:"is-4",value:this.$t("黑白两色")},{column:"is-2",item:this.$t("最大电流")},{column:"is-4",value:this.$t("3A( 单火一 、 二路 )  / 10A( 零火一路 )  / 8A×2 路 ( 零火二路 )  / 4A×4 路 ( 零火四路 ) ")}]}}},r=(n(356),n(7)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("main",[e("product-banner",{attrs:{banner:t.banner}}),t._v(" "),e("section",{staticClass:"section-top featrue has-text-centered has-text-white",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2018/11/816358ce1b5b0d30f0f2365fea444efd.jpg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-10 is-offset-2"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-4"},[e("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/11/14891ecc4e1d8b01d99a733774120193.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light orange"},[t._v(t._s(t.$t("LED柔和指示灯")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light"},[t._v(t._s(t.$t("温柔指引 用心呵护 LED柔和指示光，柔和光圈易辨识，不刺眼。方便老人、小孩夜晚起床准确找到开关位置，指明方向，告别摸黑起床的烦恼。")))])]),t._v(" "),e("div",{staticClass:"column is-4"},[e("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/11/0a934f26432f08e1f8314cfe43ab2857.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light orange"},[t._v(t._s(t.$t("无边框 极简工艺美学")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light"},[t._v(t._s(t.$t("无曲边极简工艺美学，轻奢优雅。无框的设计与多种装修风格相融，浑然一体，亦能展现雅致品味。")))])]),t._v(" "),e("div",{staticClass:"column is-4"},[e("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/11/e308ba84b1456338c72ef347942ffc80.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light orange"},[t._v(t._s(t.$t("个性化场景设定")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light"},[t._v(t._s(t.$t("单一按键可控制单场景，也可组合多场景。还可设置不同的生活情景模式，实现电器设备的智能化控制。每一种模式都是一种享受，每一种氛围都恰到好处。")))])]),t._v(" "),e("div",{staticClass:"column is-4"},[e("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/11/3de79f2d4c455408c9657b3c23c4da21.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light orange"},[t._v(t._s(t.$t("一键开关窗帘")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light"},[t._v(t._s(t.$t("如同手机触摸屏般的触摸手感，晶透顺滑，触摸灵敏，反应迅速稳定。")))])]),t._v(" "),e("div",{staticClass:"column is-4"},[e("img",{attrs:{src:"".concat(this.$store.state.cdn,"/2018/11/964e509c56e7b0197bd3b158f0bfb26e.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light orange"},[t._v(t._s(t.$t("玻璃面板 历久弥新")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light"},[t._v(t._s(t.$t("玻璃面板易清洁，防水防尘，历久弥新。内在配置，让您倾心，外在颜值，也足够吸引。")))])])])])])])]),t._v(" "),e("section",{staticClass:"section-right life has-text-centered",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2018/11/65d61db44479ba9b2f2672fbef7d7ca0.jpg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-4 is-offset-7"},[e("h2",{staticClass:"title has-text-weight-normal has-text-white"},[t._v(t._s(t.$t("智能生活 轻松实现")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("无需改线或重新布线，直接替换普通翘板按键开关，并通过连接OOMI智能家庭网关，联动OOMI相关智能节点设备，即可实现对电器设备的智能控制！真正做到安装灵活、省钱省力，让您轻松实现智能家居生活！")))])])])])]),t._v(" "),e("section",{staticClass:"section-right linkage has-text-right",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/01/c170ed1f4c9489b9007fed92d6a83ea0.jpg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-6 is-offset-6"},[e("h2",{staticClass:"title has-text-weight-normal has-text-white"},[t._v(t._s(t.$t("多设备智能联动")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("早上7点：定时开灯，叫你起床。清晨，用灯光引导你的身体慢慢苏醒；")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("晚上19点：下班回家，打开房门，灯光自动为您亮起，让您享受美妙的夜晚；")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("晚上22点：伸手一按OOMI智能场景面板即可关灯，再也不用跑到墙边去按开关。")))])])])])]),t._v(" "),e("section",{staticClass:"section-top control has-text-centered has-text-white",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2018/11/61b3161fe1ae850ff902d88366290d32.jpg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns center"},[e("div",{staticClass:"column is-8 is-offset-2"},[e("p",{staticClass:"has-text-weight-light"},[t._v(t._s(t.$t("通过按键及无线命令可以控制开关，在保留传统开关功能的同时，还能实现智能远程操控，以及新增场景控制的功能！另外，其开关面板上的RGB 灯圈在显示其工作状态的同时，也保障了在夜间使用的方便性。")))])])])])]),t._v(" "),e("product-parameter",{attrs:{parameters:t.parameters}})],1)}),[],!1,null,"4689dd0e",null);e.default=component.exports},527:function(t,e,n){"use strict";n.r(e);var c=n(432).default,o=n(7),component=Object(o.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);