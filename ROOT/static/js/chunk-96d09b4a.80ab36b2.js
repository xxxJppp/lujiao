(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96d09b4a"],{"2fbb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orders-container layout-column"},[a("div",{staticClass:"wjp-tools layout-row__between"},[a("div",[4!=t.userinfo.roleId?a("el-button",{attrs:{type:"primary"},on:{click:t.addOrder}},[t._v("新增订单")]):t._e()],1),a("div",{staticClass:"layout-row buttons align-center"},[a("el-select",{attrs:{placeholder:"支付方式",clearable:""},on:{change:t.getTableData},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.payWay,(function(t){return a("el-option",{key:t.id,attrs:{label:t.dictValueDisplayName,value:t.id}})})),1),a("el-select",{attrs:{placeholder:"支付状态",clearable:""},on:{change:t.getTableData},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},t._l(t.status,(function(t){return a("el-option",{key:t.id,attrs:{label:t.dictValueDisplayName,value:t.id}})})),1),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单号"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getTableData(e)}},model:{value:t.orderNo,callback:function(e){t.orderNo=e},expression:"orderNo"}}),a("el-date-picker",{attrs:{clearable:"","unlink-panels":"",type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.getTableData}},[t._v("搜 索")]),a("el-button",{attrs:{type:"primary",disabled:t.loading},on:{click:t.getTableData}},[t._v("刷 新")])],1)]),a("div",{staticClass:"wjp-content flex layout-column"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"wjp-table",staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"250"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"支付地址"}},[a("el-link",{attrs:{type:"primary",href:t.getPayUrl(e.row),target:"_blank"}},[t._v(t._s(t.getPayUrl(e.row)))])],1)],1)]}}])}),a("el-table-column",{attrs:{prop:"orderNum",label:"系统订单号","show-overflow-tooltip":"",width:"100"}}),a("el-table-column",{attrs:{prop:"merchantOrderNo",label:"商家订单号","show-overflow-tooltip":"",width:"100"}}),a("el-table-column",{attrs:{prop:"orderUserAccount",label:"商户账号",width:"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"原始金额",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["支付成功"==e.row.payStatusDictValue?a("span",[t._v(t._s(e.row.amount))]):a("span",{staticStyle:{"font-weight":"bold","font-size":"20px",color:"red"}},[t._v(t._s(e.row.amount))])]}}])}),a("el-table-column",{attrs:{label:"实际金额",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["支付成功"==e.row.payStatusDictValue?a("span",[t._v(t._s(e.row.actualAmount))]):a("span",{staticStyle:{"font-weight":"bold","font-size":"20px",color:"red"}},[t._v(t._s(e.row.actualAmount))])]}}])}),a("el-table-column",{attrs:{prop:"payConfigPayConfigAccountAccount",label:"收款账号","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"payWayDictValue",label:"支付方式","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"payConfigRemark",label:"通道备注","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"订单备注","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"red",staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v(" "+t._s(e.row.remark))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"callBackStatus",label:"商户回调状态","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{disabled:e.row.callBackStatus,"active-text":e.row.callBackStatus?"成功":"失败"},on:{change:function(a){return t.changeStatus(e.row.id)}},model:{value:e.row.callBackStatus,callback:function(a){t.$set(e.row,"callBackStatus",a)},expression:"scope.row.callBackStatus"}})]}}])}),a("el-table-column",{attrs:{prop:"payStatusDictValue",label:"状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:t.getClass(e.row.payStatusDictValue)},[t._v(t._s(e.row.payStatusDictValue))])]}}])}),a("el-table-column",{attrs:{prop:"payStatusDictValue",label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return["支付超时"==e.row.payStatusDictValue?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.del(e.row.id)}}},[t._v("删 除")]):t._e(),"支付成功"!==e.row.payStatusDictValue?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.supplement(e.row)}}},[t._v("补 单")]):t._e()]}}])})],1),a("div",{staticClass:"page layout-row align-center right"},[a("span",[t._v("每页显示")]),a("el-pagination",{staticClass:"statistics",attrs:{background:"","prev-text":"上一页","next-text":"下一页","current-page":t.currentPage,"page-size":t.pageSize,layout:"sizes, prev, pager, next,total",total:t.totalPage},on:{"size-change":t.sizeChange,"current-change":t.getTableData,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}})],1)],1),a("add-order",{attrs:{visible:t.addVisible,payWay:t.payWay},on:{finish:t.getTableData,"update:visible":function(e){t.addVisible=e}}})],1)},r=[],o=(a("5ab2"),a("6d57"),a("e10e"),a("6491"),a("9d37")),i=a("ed08"),c=a("9604"),l=a("f8b7"),s=a("bbbc"),u=a("52c1");a("49a5");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"orders",components:{addOrder:c["a"]},data:function(){return{addVisible:!1,suppLoading:!1,channel:[],loading:!1,type:"",state:"",time:"",orderNo:"",tableData:[],totalPage:0,currentPage:1,pageSize:10}},watch:{},computed:d({},Object(u["c"])(["settings"]),{},Object(u["b"])(["userinfo"]),{status:function(){return this.settings.dict&&this.settings.dict.PayStatus.dicts},payWay:function(){return 1!=this.userinfo.id?Object(i["c"])(this.channel,this.settings.dict.PayWay.dicts):this.settings.dict.PayWay.dicts}}),mounted:function(){var t=this;1!=this.userinfo.id&&this.getAllchannel(),this.getTableData(),this.$eventBus.$on("",(function(e){t.tableData.concat(e),""===e.payWayDictValue&&t.$notify.info({title:"消息",message:"你有新的需要手动确定的订单，请处理！"})}))},methods:{getPayUrl:function(t){var e=window.location.origin+"/home/pay.html?orderNo="+t.orderNum;return/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)&&t.payWayDictValue.startsWith("alipay")?"alipays://platformapi/startapp?appId=20000067&url="+e:e},changeStatus:function(t){var e=this;this.$confirm("确定修改回调状态?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["a"])(t).then((function(t){e.$message.success("状态更新成功！")})).catch((function(t){e.$message.error("状态更新失败！")})).finally((function(t){e.getTableData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},addOrder:function(){this.addVisible=!0},getAllchannel:function(){var t=this;Object(s["d"])({pageNo:1,pageSize:100,param:{proxyAccount:this.userinfo.account,minRate:"",maxRate:""}}).then((function(e){t.channel=e.data.content})).catch((function(e){t.$message.error("获取通道失败")})).finally((function(t){}))},del:function(t){var e=this;this.$confirm("确定删除这条订单记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["c"])(t).then((function(t){e.getTableData()})).catch((function(t){}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getClass:function(t){var e="";switch(t){case"支付成功":e="green";break;case"支付中":e="blue";break;default:e="red";break}return e},supplement:function(t){var e=this;this.$prompt("请输入补单备注：","单号：".concat(t.orderNum,"  金额：").concat(t.actualAmount),{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"补单备注"}).then((function(a){var n=a.value;e.loading=!0,Object(l["f"])({id:t.id,remark:n}).then((function(t){e.$message.success("补单成功！")})).catch((function(t){e.$message.error("补单失败！")})).finally((function(t){e.loading=!1,e.getTableData()}))}))},getTableData:function(){var t=this;this.loading=!0,Object(l["e"])({pageNo:this.currentPage,pageSize:this.pageSize,param:{orderNum:this.orderNo,payWay:this.type,payStatus:this.state,minMoney:"",maxMoney:""}}).then((function(e){if(e.success){var a=e.data,n=a.totalRecords,r=a.pageNo,o=a.pageSize,i=a.content;t.totalPage=n,t.pageSize=o,t.currentPage=r,t.tableData=i}else t.$message.error("获取表格数据失败！")})).catch((function(e){t.$message.error("获取表格数据失败！")})).finally((function(e){t.loading=!1}))},sizeChange:function(t){this.pageSize=t,this.getTableData()},sortChange:function(t){this.tld_asc=t.order,this.getTableData()}}},b=p,m=(a("6c4c"),a("5511")),h=Object(m["a"])(b,n,r,!1,null,"2139b36e",null);e["default"]=h.exports},"6c4c":function(t,e,a){"use strict";var n=a("6e5b"),r=a.n(n);r.a},"6e5b":function(t,e,a){},9604:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"添加订单","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"商户账号",prop:"merchantNum"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择收款通道方式"},on:{change:t.getAllchannel},model:{value:t.form.merchantNum,callback:function(e){t.$set(t.form,"merchantNum",e)},expression:"form.merchantNum"}},t._l(t.merchants,(function(t,e){return a("el-option",{key:e,attrs:{label:t.userAccount,value:t.merchantNumber}})})),1)],1),a("el-form-item",{attrs:{label:"收款方式",prop:"payWay"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择收款通道方式",disabled:t.loading},model:{value:t.form.payWay,callback:function(e){t.$set(t.form,"payWay",e)},expression:"form.payWay"}},t._l(t.channels,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{attrs:{label:"金额",prop:"money"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"number"},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",t._n(e))},expression:"form.money"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancel}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)},r=[],o=(a("5ab2"),a("6d57"),a("e10e"),a("e697"),a("9d37")),i=(a("100f"),a("897d")),c=a.n(i),l=a("ed08"),s=a("bbbc"),u=a("52c1"),f=a("f8b7");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={props:{visible:{default:function(){return!1},type:Boolean},payWay:{default:function(){return[]},type:Array}},computed:p({},Object(u["b"])(["userinfo"]),{},Object(u["c"])(["settings"]),{channels:function(){return Object(l["a"])(this.payWay,this.settings.dict.PayWay.dicts,this.settings.payWay)}}),watch:{visible:function(t){t&&this.getMerchants()}},data:function(){return{loading:!1,channel:[],merchants:[],form:{merchantNum:"",payWay:"",money:""},rules:{payWay:[{required:!0,message:"请选择支付方式",trigger:"blur"}],money:[{required:!0,message:"请填写订单金额",trigger:"blur"}],merchantNum:[{required:!0,message:"请选择商户",trigger:"blur"}]}}},mounted:function(){},methods:{getMerchants:function(){var t=this;this.loading=!0,Object(f["d"])().then((function(e){e.success?t.merchants=e.data:t.$message.error("获取商户数据失败！")})).catch((function(e){t.$message.error("获取商户数据失败！")})).finally((function(e){t.loading=!1}))},getAllchannel:function(t){var e=this;this.loading=!0;var a=this.merchants.find((function(e){return e.merchantNumber==t}));Object(s["d"])({pageNo:1,pageSize:100,param:{account:a.account,maxRate:"",minRate:""}}).then((function(t){e.channel=t.data.content})).catch((function(t){e.$message.error("获取通道失败！")})).finally((function(t){e.loading=!1}))},cancel:function(){this.$refs.form.resetFields(),this.$emit("finish"),this.$emit("update:visible",!1)},submitForm:function(){var t=this;this.$refs.form.validate((function(e){if(!e)return console.log("error submit!!"),!1;var a=t.merchants.find((function(e){return e.merchantNumber==t.form.merchantNum})),n=c()(t.form.merchantNum+t.form.money+a.secretKey);Object(f["b"])(p({},t.form,{sign:n,ip:returnCitySN.cip})).then((function(e){t.$message.success("订单创建成功！"),t.cancel()})).catch((function(e){t.$message.error("订单创建失败！")})).finally((function(t){}))}))}}},m=b,h=a("5511"),y=Object(h["a"])(m,n,r,!1,null,"66d1de49",null);e["a"]=y.exports},bbbc:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return l})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return u}));var n=a("b775"),r=a("fed1"),o=a.n(r);function i(t){return Object(n["a"])({url:"/proxyCA/renewalRate",method:"post",data:o.a.stringify(t)})}function c(t){return Object(n["a"])({url:"/proxyCA/pageList",method:"post",data:t})}function l(){return Object(n["a"])({url:"/proxyCA",method:"get"})}function s(t){return Object(n["a"])({url:"/proxyCA/".concat(t),method:"delete"})}function u(t){return Object(n["a"])({url:"/proxyCA/channelAuthorization",method:"post",data:t})}},ed08:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return c}));a("ed63"),a("8cf2"),a("e697"),a("9a33e"),a("70da"),a("f548"),a("2b45"),a("2af8");var n=a("7eeb"),r=a.n(n);function o(t,e){var a=r.a.enc.Utf8.parse(e),n=r.a.AES.decrypt(t,a,{mode:r.a.mode.ECB,padding:r.a.pad.Pkcs7});return JSON.parse(r.a.enc.Utf8.stringify(n))}function i(t,e){return e.filter((function(e){return t&&t.find((function(t){return e.id===t.payWayDictId}))}))}function c(t,e,a){var n=[];return t.map((function(t){var a=e.find((function(e){return e.id==t.id}));a&&n.push(a)})),a.filter((function(t){return n.some((function(e){return e.dictValue.includes(t.value)}))}))}},f8b7:function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return s})),a.d(e,"f",(function(){return u})),a.d(e,"b",(function(){return f}));var n=a("b775"),r=a("fed1"),o=a.n(r);function i(t){return Object(n["a"])({url:"/order/list",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/order/".concat(t),method:"delete"})}function l(){return Object(n["a"])({url:"/order",method:"get"})}function s(t){return Object(n["a"])({url:"/pay/".concat(t),method:"get"})}function u(t){return Object(n["a"])({url:"/order/replacementOrder",method:"post",data:o.a.stringify(t)})}function f(t){return Object(n["a"])({url:"/order/optimalPay",method:"post",data:o.a.stringify(t)})}}}]);