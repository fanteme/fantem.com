(window.webpackJsonp=window.webpackJsonp||[]).push([[85,33],{238:function(t,e,n){var content=n(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("a1541aa8",content,!0,{sourceMap:!1})},239:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("685deabb",content,!0,{sourceMap:!1})},240:function(t,e,n){"use strict";n(238)},241:function(t,e,n){var c=n(27)(!1);c.push([t.i,".productbanner{background-color:#eaeeef;background-repeat:no-repeat;min-height:775px;color:#3e3a39}.productbanner .is-5{display:flex;flex-direction:column;justify-content:center}.productbanner .title{color:#e76c26;font-size:50px}.productbanner .subtitle{font-size:37px;margin:28px 0 62px;color:#3e3a39}.productbanner .content{font-size:16px;line-height:28px}.productbanner.black{background-size:cover;background-position:50%;background-image:url(http://cdn.fantem.cn/2019/03/f1a535dee2c194439d48988e78169788.png)}.productbanner.black .content,.productbanner.black .subtitle{color:#fff}",""]),t.exports=c},242:function(t,e,n){"use strict";n(239)},243:function(t,e,n){var c=n(27)(!1);c.push([t.i,".section-parameter{background:#eaeeef;padding-bottom:80px}.section-parameter .container{overflow:hidden}.section-parameter .container .title{color:#3e3a39;font-size:36px;padding:80px 0 30px;border-bottom:1px solid #e88d58}.section-parameter .container .content{background:#fff;margin-top:20px;padding-bottom:12px}.section-parameter .container .content .column{padding-top:14px;padding-bottom:14px}.section-parameter .container .is-2{background:#979898;text-align:center}.section-parameter .container .is-4{background:#fff;color:#727171}",""]),t.exports=c},244:function(t,e,n){"use strict";var c={props:{banner:{type:Object}}},l=(n(240),n(7)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"productbanner center",class:[t.banner.class]},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-5"},[e("h1",{staticClass:"title has-text-weight-normal"},[t._v(t._s(t.banner.title))]),t._v(" "),e("h4",{staticClass:"subtitle has-text-weight-light"},[t._v(t._s(t.banner.subtitle))]),t._v(" "),e("p",{staticClass:"content has-text-weight-light"},[t._v(t._s(t.banner.content))])]),t._v(" "),e("div",{staticClass:"column is-7 has-text-right"},[e("u-animate-container",[e("u-animate",{attrs:{name:"fadeInDown",delay:"0s",duration:"1.5s",iteration:1,offset:0,animateClass:"animated",begin:!1}},[e("img",{attrs:{src:t.banner.img}})])],1)],1)])])])}),[],!1,null,null,null);e.a=component.exports},245:function(t,e,n){"use strict";var c={props:{parameters:{type:Array}}},l=(n(242),n(7)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"section-parameter"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-12 has-text-centered"},[e("h2",{staticClass:"title has-text-weight-normal"},[t._v(t._s(t.$t("产品参数")))])]),t._v(" "),e("div",{staticClass:"column is-12"},[e("div",{staticClass:"columns is-multiline content"},t._l(t.parameters,(function(n,c){return e("div",{key:c,staticClass:"column",class:n.column},[c%2==0?e("span",{staticClass:"has-text-white"},[t._v(t._s(n.item))]):e("span",[t._v(t._s(n.value))])])})),0)])])])])}),[],!1,null,null,null);e.a=component.exports},289:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("4ed10e97",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n(289)},343:function(t,e,n){var c=n(27)(!1);c.push([t.i,".panelSvg[data-v-31da736a]{width:100px;height:100px}.section-top.featrue[data-v-31da736a]{padding:110px 0 115px}.section-top.featrue img[data-v-31da736a]{margin:55px 0 10px}.section-top.featrue .center[data-v-31da736a]{align-items:stretch}.section-top.featrue .subtitle[data-v-31da736a]{font-size:20px;margin-bottom:18px}.section-top.control .columns[data-v-31da736a]{height:855px}.section-right[data-v-31da736a]{background-position:100%}.section-right .title[data-v-31da736a]{margin-bottom:38px}.section-right.life .columns[data-v-31da736a]{height:850px}.section-right.linkage[data-v-31da736a]{height:855px;padding:75px 0 0}.section-right.linkage .columns[data-v-31da736a]{height:850px}",""]),t.exports=c},425:function(t,e,n){"use strict";n.r(e);var c=n(244),l=n(245),o={components:{ProductBanner:c.a,ProductParameter:l.a},data:function(){return{banner:{title:this.$t("智能触控面板(S系列)"),subtitle:"OOMI Touch Panel",content:this.$t("智能触控面板（s系列）OOMI Touch Panel包含智能零火单火一路 / 二路 / 四路。智能触控面板是一款基于Z-WAVE无线通讯协议的智能控制面板，能识别单击、长按和长按释放等控制动作，让你随心所欲进行你想要的控制。"),img:"".concat(this.$store.state.cdn,"/2019/08/f1b82da5e322e2867517bb9c1eeb3295.png")},parameters:[{column:"is-2",item:this.$t("额定电压")},{column:"is-4",value:"220V ～ 50Hz"},{column:"is-2",item:this.$t("待机功耗")},{column:"is-4",value:this.$t("1.0W( 零火一路 / 一路 / 四路开关 )")},{column:"is-2",item:this.$t("工作环境")},{column:"is-4",value:this.$t("温度：-10 – 40℃ / 湿度：20 – 80% RH")},{column:"is-2",item:this.$t("无线距离")},{column:"is-4",value:this.$t("室内 40m , 室外 120m")},{column:"is-2",item:this.$t("产品尺寸")},{column:"is-4",value:this.$t("86 × 86 × 30mm(一/二路) 86 × 86 × 32mm(四路)")},{column:"is-2",item:this.$t("无线功能")},{column:"is-4",value:"Z-Wave Plus"},{column:"is-2",item:this.$t("产品颜色")},{column:"is-4",value:this.$t("白色")},{column:"is-2",item:this.$t("最大电流")},{column:"is-4",value:this.$t("10A × 1 路 ( 零火一路 )  / 8A × 2 路 ( 零火二路 )  / 4A × 4 路 ( 零火四路 )")}]}}},r=(n(342),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("main",[e("product-banner",{attrs:{banner:t.banner}}),t._v(" "),e("section",{staticClass:"section-right linkage has-text-center",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/08/dae5c5fba1d90e58c943382c2424e9b8.jpeg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-8 is-offset-2"},[e("h2",{staticClass:"title has-text-weight-normal has-text-white center"},[t._v(t._s(t.$t("电容式触碰 柔和指示灯")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-centered has-text-white"},[t._v(t._s(t.$t("拥有高灵敏的电容式触碰设计，响应极快，毫秒之间。还有通透的LED柔和白色指示光，柔和光圈简洁白色，不刺眼。半夜起床时也准确找到开关位置，柔和白光指明方向，专为夜起浅睡眠的人群制作。")))])])])])]),t._v(" "),e("section",{staticClass:"section-top featrue has-text-centered has-text-white",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/08/8fa64a1331b5ce2030a7326746827ecf.jpeg)")}},[e("div",{staticClass:"container"},[e("h2",{staticClass:"title has-text-white has-text-weight-normal has-text-right"},[t._v(t._s(t.$t("精雕细琢 极简工艺美学")))]),t._v(" "),e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column is-6 is-offset-6"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-6"},[e("img",{staticClass:"panelSvg",attrs:{src:"".concat(this.$store.state.cdn,"/2019/08/1711efaedc1c2f52bebd7d84b26c1371.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light"},[t._v(t._s(t.$t("")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light has-text-black"},[t._v(t._s(t.$t("钢化玻璃面板透亮典雅，坚固耐摔。")))])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("img",{staticClass:"panelSvg",attrs:{src:"".concat(this.$store.state.cdn,"/2019/08/6f92035cf15bf9d4d848f8caaa3ef9db.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light"},[t._v(t._s(t.$t("")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light has-text-black"},[t._v(t._s(t.$t("防止灰尘，有效阻挡灰尘颗粒。")))])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("img",{staticClass:"panelSvg",attrs:{src:"".concat(this.$store.state.cdn,"/2019/08/e15954d53b30dbb7a365496e52c73fb6.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light"},[t._v(t._s(t.$t("")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light has-text-black"},[t._v(t._s(t.$t("防止水滴，即使湿手触碰也不怕。")))])]),t._v(" "),e("div",{staticClass:"column is-6"},[e("img",{staticClass:"panelSvg",attrs:{src:"".concat(this.$store.state.cdn,"/2019/08/75b9e2f8d679bd2db0a149dc96468270.svg")}}),t._v(" "),e("p",{staticClass:"subtitle has-text-weight-light"},[t._v(t._s(t.$t("")))]),t._v(" "),e("span",{staticClass:"has-text-weight-light has-text-black"},[t._v(t._s(t.$t("采用PC110阻燃材质，耐热抗压，全面阻燃防老化。")))])])])])])])]),t._v(" "),e("section",{staticClass:"section-right life has-text-centered",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/08/c6d9a3e894e1e6fd21992a32b3ff4741.jpeg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-5 is-offset-7"},[e("h2",{staticClass:"title has-text-weight-normal has-text-white"},[t._v(t._s(t.$t("个性化场景设定")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("按键可短按长按都有不同的场景模式，还可设置不同的生活情景模式，实现电器设备的智能化控制。变化多样的模式设置，为你量身定制。")))])])])])]),t._v(" "),e("section",{staticClass:"section-right life has-text-right",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/08/7a0008f8948e63f106c9dc3d67a47b8d.jpeg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-5 is-offset-7"},[e("h2",{staticClass:"title has-text-weight-normal has-text-orange"},[t._v(t._s(t.$t("极简操作 智慧生活")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-orange"},[t._v("\n               "+t._s(t.$t("无需改线或重新布线，直接替换普通翘板按键开关，并通过连接OOMI智能家庭网关，联动OOMI相关智能节点设备，还有远程OOMI APP控制更可让您不在家也能了解其状态。无曲边极简工艺美学，展现出轻奢优雅。边框电镀铬拉丝但边缘毫无刮手感觉，历经多次打磨，极致贴合，匠心工艺只为做到最好。 满足你对智能家居生活的所有需求，达到你想要的预期效果。"))+"\n            ")])])])])]),t._v(" "),e("section",{staticClass:"section-right life has-text-right",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/08/c014ebd01c77c9cded927080181beb2b.jpg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-5 is-offset-8"},[e("h2",{staticClass:"title has-text-weight-normal has-text-white"},[t._v(t._s(t.$t("多种方式智能联动")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("清晨时刻，定时开灯，叫你起床。早上用柔和的灯光让你在睡梦中慢慢苏醒；")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("傍晚时刻，疲惫一天的你，下班回家，灯光自动为您开启回家模式，让您放松身体享受自在时光；")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("深夜时刻，睡意朦胧之时，伸手一按OOMI智能场景面板即可关灯，或者用远程控制也可关灯，让您安然入眠。")))])])])])]),t._v(" "),e("section",{staticClass:"section-right life has-text-right",style:{backgroundImage:"url(".concat(this.$store.state.cdn,"/2019/08/1e0f17d9d793d8f5341c7f6b7e362099.jpg)")}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline center"},[e("div",{staticClass:"column is-4 is-offset-8"},[e("h2",{staticClass:"title has-text-weight-normal has-text-white"},[t._v(t._s(t.$t("智能生活 不至于此")))]),t._v(" "),e("p",{staticClass:"has-text-weight-light has-text-white"},[t._v(t._s(t.$t("通过按键及无线命令可以控制开关，在保留传统开关功能的同时，还能实现智能远程操控，以及新增场景控制的功能！NFC碰触点印在开关面板的保护膜上，可通过OOMI Touch触碰控制。其面板背灯还代表了不同的设置状态，让人一目了然。")))])])])])]),t._v(" "),e("product-parameter",{attrs:{parameters:t.parameters}})],1)}),[],!1,null,"31da736a",null);e.default=component.exports},520:function(t,e,n){"use strict";n.r(e);var c=n(425).default,l=n(7),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);