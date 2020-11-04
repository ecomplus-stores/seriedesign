(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{236:function(e,t,r){"use strict";var i=r(28),s=r(39),n=r(79),o={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0}},computed:{deadlineStr(){const e=this.shippingLine,t=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let r=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(r+=e.delivery_time.days),"".concat(Object(s.a)(i.Bd)," ").concat(r," ").concat(Object(s.a)(t?i.Hd:i.W))},freightValueStr(){const e="number"==typeof this.shippingLine.total_price?this.shippingLine.total_price:this.shippingLine.price;return e?Object(n.a)(e):Object(s.a)(i.ob)}}},a=r(53),d=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shipping-line"},[r("strong",[e._v(" "+e._s(e.deadlineStr)+" ")]),r("span",{staticClass:"mx-2"},[e._v(" "+e._s(e.freightValueStr)+" ")])])}),[],!1,null,null,null);t.a=d.exports},286:function(e,t,r){var i=r(348);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,r(166).default)("60cdd274",i,!0,{})},347:function(e,t,r){"use strict";r(286)},348:function(e,t,r){(t=r(165)(!1)).push([e.i,".order{min-height:300px}",""]),e.exports=t},362:function(e,t,r){"use strict";r.r(t);var i=r(116),s=r(4),n=r(54),o={name:"EcOrder",components:{EcOrderInfo:r(262).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data(){return{isReady:this.skipDataLoad,orderBody:{_id:"",...this.order}}},computed:{localOrder:{get(){return this.orderBody},set(e){this.orderBody=e,this.$emit("update:order",e)}}},methods:{fetchOrder(){const e="/orders/".concat(this.orderBody._id,".json");(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(e):Object(s.g)({url:e})).then((({data:e})=>{this.localOrder=e,this.isReady=!0}))}},watch:{"order._id"(e){e&&e!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id"(e){e&&!this.skipDataLoad&&this.fetchOrder()}},created(){this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then((e=>{this.localOrder=e.find((({number:e})=>e===this.order.number))||{}})))}},a=(r(347),r(53)),d={name:"order",components:{EcOrder:Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"order"},[r("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[e.isReady?r("ec-order-info",{key:"info",attrs:{order:e.localOrder,"skip-first-data-load":""},on:{"update:order":function(t){e.localOrder=t}}}):r("div",{key:"loading"},[r("div",{staticClass:"spinner-border",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[e._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:{...Object(i.c)(["orders"]),number(){const e=this.$route.params.number;return/^[0-9]+$/.test(e)&&parseInt(e,10)},order(){const e=this.orders.find((({_id:e,number:t})=>this.number===t||this.$route.params.number===e));if(!e){const{number:e}=this;return e?{_id:this.$route.params.id,number:e}:{_id:this.$route.params.number}}return e}}},c=Object(a.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"order"}},[r("ec-order",{attrs:{order:e.order}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=chunk.3e762095ec91f540039e.js.map