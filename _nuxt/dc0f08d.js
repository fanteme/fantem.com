(window.webpackJsonp=window.webpackJsonp||[]).push([[105,52],{305:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("2264e300",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n(305)},375:function(t,e,n){var r=n(27)(!1);r.push([t.i,".guide{background:#edf1f2}.guide-list{padding:30px 0}.guide .caption{font-size:36px;line-height:44px;margin:26px 0 42px}.guide .subtitle{font-size:24px;line-height:24px;padding:34px 0 22px 32px;margin-bottom:0}.guide .accordion{border-radius:4px;padding:8px 0;overflow:hidden}.guide .accordion-header{cursor:pointer}.guide .accordion-header i{display:inline-block;width:35px;padding-right:10px;text-align:center;vertical-align:middle}.guide .column{background:#fff;background-clip:content-box}.guide .column:nth-of-type(4n+1) h2{border-top:1px solid #f8ce7c}.guide .column:nth-of-type(4n+2) h2{border-top:1px solid #b6d673}.guide .column:nth-of-type(4n+3) h2{border-top:1px solid #ee8379}.guide .column:nth-of-type(4n) h2{border-top:1px solid #7dc5e9}.guide ul{padding:0 0 32px 32px}",""]),t.exports=r},441:function(t,e,n){"use strict";n.r(e);n(24);var r=n(3),o=(n(29),n(33),{head:function(){return{title:"使用手册_丰唐物联_OOMI",meta:[{name:"keywords",content:"智能家居系统,OOMI智能家居,OOMI大宅系统,OOMI智能家居系统,丰唐物联"},{name:"description",content:"丰唐物联技术（深圳）有限公司一直致力于智能家居产品及家居整体智能控制解决方案的研究与实践，提供智能家居整体解决方案，为您轻松打造舒适便利的智能家居生活环境。"}]}},data:function(){return{guides:[],categories:[{title:this.$t("网关类"),name:"网关类"},{title:this.$t("零火开关"),name:"零火开关"},{title:this.$t("单火开关"),name:"单火开关"},{title:this.$t("嵌入式开关"),name:"嵌入式开关"},{title:this.$t("智能传感器"),name:"智能传感器"},{title:this.$t("智能多功能警示器"),name:"智能多功能警示器"},{title:this.$t("智能电机"),name:"智能电机"},{title:this.$t("智能灯泡/灯带"),name:"智能灯泡/灯带"},{title:this.$t("智能插座/场景面板"),name:"智能插座/场景面板"},{title:this.$t("智能红外传感器"),name:"智能红外传感器"},{title:this.$t("智能辅助类"),name:"智能辅助类"}],guide:{}}},methods:{getUserGuidesByCategory:function(t){return this.guides.filter((function(element){return-1!=element.category.indexOf(t.name)}))}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("".concat(t.$store.state.api,"/posts?categories=user-guide&per_page=30"));case 2:n=e.sent,data=n.data,t.guides=data,t.categories.forEach((function(e){var n=t.getUserGuidesByCategory(e);t.$set(t.guide,e.name,n)}));case 6:case"end":return e.stop()}}),e)})))()}}),d=(n(374),n(7)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("section",{staticClass:"guide"},[e("section",{staticClass:"guide-list"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"caption has-text-centered"},[t._v(t._s(t.$t("产品使用手册")))]),t._v(" "),e("div",{staticClass:"columns is-multiline is-mobile"},t._l(t.categories,(function(n,r){return e("div",{key:r,staticClass:"column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd"},[e("h2",{staticClass:"subtitle"},[t._v(t._s(n.title))]),t._v(" "),e("ul",t._l(t.guide["".concat(n.name)],(function(n,r){return e("li",{key:r},[e("div",{staticClass:"accordion"},[e("a",{staticClass:"accordion-header",attrs:{target:"_blank",href:n.content.rendered}},[e("i",[e("img",{attrs:{src:n.excerpt.rendered}})]),t._v("\n                      "+t._s(n.title.rendered)+"\n                    ")])])])})),0)])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},538:function(t,e,n){"use strict";n.r(e);var r=n(441).default,o=n(7),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);