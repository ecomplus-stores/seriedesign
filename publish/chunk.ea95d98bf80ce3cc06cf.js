(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{243:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return i}));var o=c(27),a=c(22),n=c(41);const r=o.$ecomConfig.get("currency")||"BRL",i=e=>{const t={name:Object(a.a)(e),id:e.sku,price:Object(n.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t}},258:function(e,t,c){"use strict";var o=c(9),a=c(243);t.a=e=>{const t=window.storefrontApp&&window.storefrontApp.router;if(t){let c,n,r;const i=()=>{const e=[];return o.a.data&&Array.isArray(o.a.data.items)&&o.a.data.items.forEach((t=>{e.push(Object(a.b)(t))})),e},s=(t,o)=>{const r={step:t,option:o};t<=1||!c?(e.push({event:"eec.checkout",ecommerce:{currencyCode:a.a,checkout:{actionField:r,products:i()}}}),e.push({event:"checkout"}),c=!0):n||(e.push({event:"eec.checkout_option",ecommerce:{currencyCode:a.a,checkout_option:{actionField:r}}}),e.push({event:"checkoutOption"}),n=!0)},u=t=>{if(!r){const{amount:c}=window.storefrontApp,n={id:t,revenue:(c&&c.total||o.a.data&&o.a.data.subtotal||0).toFixed(2)};c&&(void 0!==c.freight&&(n.shipping=c.freight.toFixed(2)),void 0!==c.tax&&(n.tax=c.tax.toFixed(2))),e.push({event:"eec.purchase",ecommerce:{currencyCode:a.a,purchase:{actionField:n,products:i()}}}),r=!0}},d=({name:e,params:t})=>{switch(e){case"cart":s(1,"Review Cart");break;case"checkout":s(2,"Confirm Purchase");break;case"confirmation":u(t.id)}};t.currentRoute&&d(t.currentRoute),t.afterEach(d)}}},259:function(e,t,c){"use strict";var o=c(9),a=c(243);t.a=e=>{const t={},c=c=>{const o=Object(a.b)(c);e.push({event:"eec.add",ecommerce:{currencyCode:a.a,add:{products:[o]}}}),e.push({event:"addToCart"}),t[c.sku]=o},n=c=>{const o=t[c.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:a.a,remove:{products:[o?Object.assign({},o):Object(a.b)(c)]}}}),e.push({event:"removeFromCart"}),delete t[c.sku]};o.a.on("addItem",(({item:e})=>c(e))),o.a.on("increaseItemQnt",(({item:e})=>{const o=t[e.sku];if(o){const t=e.quantity-o.quantity;t>0?c({...e,quantity:t}):n({...e,quantity:-t})}else c(e)})),o.a.on("removeItem",(({item:e})=>n(e))),o.a.on("clear",(()=>{for(const e in t)t[e]&&n(t[e])}))}},381:function(e,t,c){"use strict";c.r(t);var o=c(258);const{location:a,$:n}=window;var r=c(259);t.default=(e={})=>{const{gaTrackingId:t}=e,{gtag:c}=window;"function"==typeof c&&(((e,t)=>{const c=()=>setTimeout((()=>{e("event","page_view",{page_title:document.title||"Checkout",page_path:"/".concat(a.hash.split("/")[1]),send_to:t})}),300);Object(o.a)({push:({event:t,ecommerce:o})=>{let r;switch(t){case"eec.checkout":case"eec.checkout_option":r=o&&o.checkout,r&&e("event","begin_checkout",{items:r.products}),e("event","set_checkout_option",{checkout_step:a.hash.startsWith("#/cart")?1:2});break;case"eec.purchase":c(),r=o&&o.purchase,r&&r.actionField&&e("event","purchase",{transaction_id:r.actionField.id,affiliation:n('meta[name="author"]').attr("content")||"Shop",value:Number(r.actionField.revenue),currency:o.currencyCode,tax:r.actionField.tax?Number(r.actionField.tax):0,shipping:r.actionField.shipping?Number(r.actionField.shipping):0,items:r.products});break;default:c()}}})})(c,t),(e=>{Object(r.a)({push:({event:t,ecommerce:c})=>{if(c&&("eec.add"===t||"eec.remove"===t)){const o=c[t.slice(4)];o&&o.products&&e("event","eec.add"===t?"add_to_cart":"remove_from_cart",{items:o.products})}}})})(c))}}}]);
//# sourceMappingURL=chunk.ea95d98bf80ce3cc06cf.js.map