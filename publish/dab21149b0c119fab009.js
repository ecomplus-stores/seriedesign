/*! For license information please see dab21149b0c119fab009.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{352:function(t,o,e){"use strict";e.r(o);var n=e(31),d=e.n(n),s=e(286);o.default=(t={},o="product")=>{const e=document.getElementById(o);if(e){const n=document.getElementById("".concat(o,"-dock")),c=window.storefront&&window.storefront.getScopedSlots;new d.a({render:d=>d(s.a,{attrs:{id:n?null:o},props:{...t.props,buyText:t.buyText,isSSR:Boolean(n)},on:{"update:product"(){const t=document.getElementById("product-loading");t&&t.remove(),delete e.dataset.toRender}},scopedSlots:Object.assign({buy:t.buy?function(){return d("span",{domProps:{innerHTML:t.buy}})}:void 0},"function"==typeof c?c(e,d,!n):{})})}).$mount(n||e)}}}}]);
//# sourceMappingURL=dab21149b0c119fab009.js.map