(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianshenjiaolian/add-or-update"],{"1e29":function(e,n,t){"use strict";t.r(n);var i=t("9318"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},"4d4d":function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"4ec6":function(e,n,t){},9318:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,o){try{var u=e[a](o),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(i,r)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var o=e.apply(n,t);function u(e){a(o,i,r,u,c,"next",e)}function c(e){a(o,i,r,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("20dd"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{jiaolianxingming:"",xingbie:"",nianling:"",shengao:"",tizhong:"",zhaopian:"",zhiyelvli:"",gerenjieshao:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{jiaolianxingming:!1,xingbie:!1,nianling:!1,shengao:!1,tizhong:!1,zhaopian:!1,zhiyelvli:!1,gerenjieshao:!1}}},components:{wPicker:u},computed:{},onLoad:function(n){var t=this;return o(i.default.mark((function r(){var a,o,u,c;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.getStorageSync("nowTable"),r.next=3,t.$api.session(a);case 3:if(o=r.sent,t.user=o.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid),!n.id){r.next=14;break}return t.ruleForm.id=n.id,r.next=12,t.$api.info("jianshenjiaolian",t.ruleForm.id);case 12:o=r.sent,t.ruleForm=o.data;case 14:if(!n.cross){r.next=53;break}u=e.getStorageSync("crossObj"),r.t0=i.default.keys(u);case 17:if((r.t1=r.t0()).done){r.next=53;break}if(c=r.t1.value,"jiaolianxingming"!=c){r.next=23;break}return t.ruleForm.jiaolianxingming=u[c],t.ro.jiaolianxingming=!0,r.abrupt("continue",17);case 23:if("xingbie"!=c){r.next=27;break}return t.ruleForm.xingbie=u[c],t.ro.xingbie=!0,r.abrupt("continue",17);case 27:if("nianling"!=c){r.next=31;break}return t.ruleForm.nianling=u[c],t.ro.nianling=!0,r.abrupt("continue",17);case 31:if("shengao"!=c){r.next=35;break}return t.ruleForm.shengao=u[c],t.ro.shengao=!0,r.abrupt("continue",17);case 35:if("tizhong"!=c){r.next=39;break}return t.ruleForm.tizhong=u[c],t.ro.tizhong=!0,r.abrupt("continue",17);case 39:if("zhaopian"!=c){r.next=43;break}return t.ruleForm.zhaopian=u[c],t.ro.zhaopian=!0,r.abrupt("continue",17);case 43:if("zhiyelvli"!=c){r.next=47;break}return t.ruleForm.zhiyelvli=u[c],t.ro.zhiyelvli=!0,r.abrupt("continue",17);case 47:if("gerenjieshao"!=c){r.next=51;break}return t.ruleForm.gerenjieshao=u[c],t.ro.gerenjieshao=!0,r.abrupt("continue",17);case 51:r.next=17;break;case 53:t.styleChange();case 54:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=3;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.id){n.next=8;break}return n.next=6,e.$api.update("jianshenjiaolian",e.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,e.$api.add("jianshenjiaolian",e.ruleForm);case 10:e.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},c11b:function(e,n,t){"use strict";(function(e){t("550e");i(t("66fd"));var n=i(t("f29b"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},e021:function(e,n,t){"use strict";var i=t("4ec6"),r=t.n(i);r.a},f29b:function(e,n,t){"use strict";t.r(n);var i=t("4d4d"),r=t("1e29");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("e021");var o,u=t("f0c5"),c=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"013f1228",null,!1,i["a"],o);n["default"]=c.exports}},[["c11b","common/runtime","common/vendor"]]]);