(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52fcce46"],{"68b4":function(e,t,a){},9755:function(e,t,a){"use strict";var n=a("68b4"),r=a.n(n);r.a},caae:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"orders-container layout-column"},[a("div",{staticClass:"wjp-content flex layout-column"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"wjp-table",staticStyle:{width:"100%"},attrs:{height:750,data:e.tableData,height:"250"}},[a("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"50"}}),a("el-table-column",{attrs:{prop:"loginAccount",label:"登录账号"}}),a("el-table-column",{attrs:{prop:"ip",label:"ip"}}),a("el-table-column",{attrs:{prop:"loginPlace",label:"地点"}}),a("el-table-column",{attrs:{prop:"createTime",label:"登录时间"}})],1),a("div",{staticClass:"page layout-row align-center right"},[a("span",[e._v("每页显示")]),a("el-pagination",{staticClass:"statistics",attrs:{background:"","prev-text":"上一页","next-text":"下一页","current-page":e.currentPage,"page-size":e.pageSize,layout:" prev, pager, next,total",total:e.totalPage},on:{"size-change":e.sizeChange,"current-change":e.getTableData,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}})],1)],1)])},r=[],c=(a("5ab2"),a("6d57"),a("e10e"),a("9d37")),i=a("c24f"),o=a("52c1");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={name:"orders",data:function(){return{loading:!1,type:"",state:"",tableData:[],totalPage:0,currentPage:1,pageSize:10}},watch:{},computed:s({},Object(o["b"])(["userinfo"])),mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.loading=!0,Object(i["g"])({pageNo:this.currentPage,pageSize:this.pageSize,param:{}}).then((function(t){var a=t.data,n=a.totalRecords,r=a.pageNo,c=a.pageSize,i=a.content;e.totalPage=n,e.pageSize=c,e.currentPage=r,e.tableData=i})).catch((function(t){e.$message.error("获取表格数据失败！")})).finally((function(t){e.loading=!1}))},sizeChange:function(e){this.pageSize=e,this.getTableData()}}},p=u,g=(a("9755"),a("5511")),b=Object(g["a"])(p,n,r,!1,null,"3c7a8fd1",null);t["default"]=b.exports}}]);