(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a757370"],{"0b0e":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"layout-column",staticStyle:{overflow:"auto"}},[t("div",{attrs:{id:"doc1"}},[t("h1",{staticClass:"line layout-row"},[t("span",{staticStyle:{"margin-right":"10px","align-self":"center"}},[e._v("1.")]),t("el-tag",{staticStyle:{"align-self":"center"},attrs:{size:"small"}},[e._v("创建订单")])],1),t("h1",{staticClass:"line"},[e._v("地址: http://39.99.177.97:8097/backend/order/optimalPay")]),t("p",{staticClass:"line"},[e._v("用户在商户应用选择对应方式、金额后，应用跳转到网页进行支付")]),t("p",{staticClass:"line"},[e._v("支付页面: http://39.99.177.97/home/pay.html?orderNo={orderNo}")]),t("p",{staticClass:"line"},[e._v("方式：POST")]),t("h1",{staticClass:"line"},[e._v("参数说明:")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.createOrderParams,border:"",stripe:""}},[t("el-table-column",{attrs:{prop:"paramName",label:"参数名"}}),t("el-table-column",{attrs:{prop:"exp",label:"含义"}}),t("el-table-column",{attrs:{prop:"isRequired",label:"是否必填"}}),t("el-table-column",{attrs:{prop:"type",label:"类型"}}),t("el-table-column",{attrs:{prop:"desc",label:"说明"}})],1),t("h1",{staticClass:"line layout-row",staticStyle:{"margin-top":"20px","margin-bttom":"10px"}},[t("span",{staticStyle:{"margin-right":"10px","align-self":"center"}},[e._v("1.")]),t("el-tag",{staticStyle:{"align-self":"center"},attrs:{size:"small"}},[e._v("异步通知")])],1),t("p",{staticClass:"line"},[e._v("用户支付成功后，由支付系统向商户应用发送post请求通知")]),t("p",{staticClass:"line"},[e._v("方式: POST")]),t("h1",{staticClass:"line"},[e._v("参数说明:")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.notifyParams,border:"",stripe:""}},[t("el-table-column",{attrs:{prop:"paramName",label:"参数名"}}),t("el-table-column",{attrs:{prop:"exp",label:"含义"}}),t("el-table-column",{attrs:{prop:"type",label:"类型"}}),t("el-table-column",{attrs:{prop:"desc",label:"说明"}})],1)],1)])},l=[],s={name:"doc",data:function(){return{createOrderParams:[{paramName:"merchantNum",exp:"UID",type:"String",desc:"商户UID",isRequired:"是"},{paramName:"merchantOrderNo",exp:"商户系统订单号",type:"String",desc:"商户系统订单号",isRequired:"是"},{paramName:"sign",exp:"签名",type:"String",desc:"md5(商户号+支付金额+商户秘钥)",isRequired:"是"},{paramName:"money",exp:"充值金额",type:"String",desc:"用户充值的金额",isRequired:"是"},{paramName:"payWay",exp:"支付方式",type:"String",desc:"支付方式(支付通道账户类型) ali/wx",isRequired:"是"},{paramName:"ip",exp:"用户IP",type:"String",desc:"非必填",isRequired:"否"},{paramName:"remark",exp:"自定义数据",type:"String",desc:"自定义数据（回调的时候返回）",isRequired:"否"}],notifyParams:[{paramName:"orderNo",exp:"支付订单号",type:"String",desc:"支付订单号"},{paramName:"merchantOrderNo",exp:"商户订单号",type:"String",desc:"商户订单号"},{paramName:"status",exp:"支付状态",type:"String",desc:"SuccessPay=成功 FailurePay=失败"},{paramName:"actualAmount",exp:"支付金额",type:"String",desc:"支付金额"},{paramName:"remark",exp:"商户创建订单时候传得备注",type:"String",desc:"商户创建订单时候传得备注"}]}}},i=s,p=(t("d938"),t("5511")),n=Object(p["a"])(i,r,l,!1,null,"5433e613",null);a["default"]=n.exports},"9b54":function(e,a,t){},d938:function(e,a,t){"use strict";var r=t("9b54"),l=t.n(r);l.a}}]);