(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{2771:function(e,n,t){"use strict";t.r(n);var r=t("b408"),u=t("33d7");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("7cd2");var i,o=t("f0c5"),c=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"5ea54d6c",null,!1,r["a"],i);n["default"]=c.exports},3341:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,c,"next",e)}function c(e){a(i,r,u,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("20dd"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{yonghuzhanghao:"",mima:"",yonghuxingming:"",xingbie:"",touxiang:"",yonghushouji:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuzhanghao:!1,mima:!1,yonghuxingming:!1,xingbie:!1,touxiang:!1,yonghushouji:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return i(r.default.mark((function u(){var a,i,o,c;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return a=e.getStorageSync("nowTable"),u.next=3,t.$api.session(a);case 3:if(i=u.sent,t.user=i.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid),!n.id){u.next=14;break}return t.ruleForm.id=n.id,u.next=12,t.$api.info("yonghu",t.ruleForm.id);case 12:i=u.sent,t.ruleForm=i.data;case 14:if(!n.cross){u.next=45;break}o=e.getStorageSync("crossObj"),u.t0=r.default.keys(o);case 17:if((u.t1=u.t0()).done){u.next=45;break}if(c=u.t1.value,"yonghuzhanghao"!=c){u.next=23;break}return t.ruleForm.yonghuzhanghao=o[c],t.ro.yonghuzhanghao=!0,u.abrupt("continue",17);case 23:if("mima"!=c){u.next=27;break}return t.ruleForm.mima=o[c],t.ro.mima=!0,u.abrupt("continue",17);case 27:if("yonghuxingming"!=c){u.next=31;break}return t.ruleForm.yonghuxingming=o[c],t.ro.yonghuxingming=!0,u.abrupt("continue",17);case 31:if("xingbie"!=c){u.next=35;break}return t.ruleForm.xingbie=o[c],t.ro.xingbie=!0,u.abrupt("continue",17);case 35:if("touxiang"!=c){u.next=39;break}return t.ruleForm.touxiang=o[c],t.ro.touxiang=!0,u.abrupt("continue",17);case 39:if("yonghushouji"!=c){u.next=43;break}return t.ruleForm.yonghushouji=o[c],t.ro.yonghushouji=!0,u.abrupt("continue",17);case 43:u.next=17;break;case 45:t.styleChange();case 46:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.yonghuzhanghao){n.next=3;break}return e.$utils.msg("用户账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.id){n.next=11;break}return n.next=9,e.$api.update("yonghu",e.ruleForm);case 9:n.next=13;break;case 11:return n.next=13,e.$api.add("yonghu",e.ruleForm);case 13:e.$utils.msgBack("提交成功");case 14:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,u=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,u=u>9?u:"0"+u,"".concat(t,"-").concat(r,"-").concat(u)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"33d7":function(e,n,t){"use strict";t.r(n);var r=t("3341"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},"7cd2":function(e,n,t){"use strict";var r=t("a8e5"),u=t.n(r);u.a},a8e5:function(e,n,t){},b408:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},c5a7:function(e,n,t){"use strict";(function(e){t("550e");r(t("66fd"));var n=r(t("2771"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["c5a7","common/runtime","common/vendor"]]]);