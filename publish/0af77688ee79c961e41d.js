(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{356:function(e,t,a){"use strict";a.r(t);var n=a(80),c=a(40),o=a(54);t.default=(e={})=>{const{compreConfieStoreId:t}=e;if(t){const e=window.storefrontApp&&window.storefrontApp.router;if(e){const a=({name:e,params:a})=>{if("confirmation"===e&&a.json){let e;const r=decodeURIComponent(a.json);if(r)try{e=JSON.parse(r)}catch(e){}if(e){const a=o.a.getCustomer(),r=e.transactions&&e.transactions[0],i=r&&r.payer,s=Object(n.a)(a),d=new Date;let l="orderSellerID=".concat(t,"&orderPlatform=ecomplus")+"&orderTotalSpent=".concat(e.amount.total)+"&orderDeliveryTax=".concat(e.amount.freight||0)+"&orderID=".concat(e.number||e._id)+"&consumerEmail=".concat(a.main_email)+"&billingEmail=".concat(a.main_email)+"&consumerName=".concat(encodeURIComponent(s))+"&orderDate=".concat(d.getDate(),"/").concat(d.getMonth()+1,"/").concat(d.getFullYear()," | ")+"".concat(d.getHours(),":").concat(d.getMinutes(),":").concat(d.getSeconds());if("m"===a.gender?l+="&consumerGender=Masculino&billingGender=Masculino":"f"===a.gender&&(l+="&consumerGender=Feminino&billingGender=Feminino"),"p"===a.registry_type&&a.doc_number&&(l+="&consumerCPF=".concat(a.doc_number)+"&billingCPF=".concat(i&&i.doc_number||a.doc_number)),a.birth_date){const{day:e,month:t,year:n}=a.birth_date;l+="&consumerBirthDate=".concat(e.toString().padStart(2,"0"))+"/".concat(t.toString().padStart(2,"0"),"/").concat(n)}const{items:m}=e;if(m&&m.length){let e=m[0].sku,t=Object(c.a)(m[0]),a=m[0].quantity,n=encodeURIComponent(m[0].name),o="0";for(let r=1;r<m.length;r++)e+="|".concat(m[r].sku),t+="|".concat(Object(c.a)(m[r])),a+="|".concat(m[r].quantity),n+="|".concat(encodeURIComponent(m[r].name)),o+="|0";l+="&productSKU=".concat(e,"&productValue=").concat(t,"&productQuantity=").concat(a)+"&ProductName=".concat(n,"&ProductMktSaleID=").concat(o)}if(e.shipping_lines&&e.shipping_lines[0]){const t=e.shipping_lines[0];if(t.app&&t.app.label)switch(l+="&orderDeliveryType=",t.app.label.toLowerCase()){case"pac":l+="0";break;case"sedex":l+="1";break;case"retirar na loja":l+="3";break;default:l+="4"}t.delivery_time&&t.delivery_time.days&&(l+="&orderDeliveryTime=".concat(t.delivery_time.days)+"&productDeliveryTime=".concat(t.delivery_time.days)),l+="&consumerZipcode=".concat(t.to.zip)+"&billingZipcode=".concat(t.to.zip)}if(r){switch(r.app&&r.app.intermediator&&r.app.intermediator.name&&(l+="&orderPartnerPayment=".concat(r.app.intermediator.name)),l+="&billingName=".concat(encodeURIComponent(i&&i.fullname||s)),l+="&orderParcels=".concat(r.installments&&r.installments.number||1),l+="&orderPaymentType=",r.payment_method.code){case"credit_card":l+="1";break;case"banking_billet":l+="2";break;case"debit_card":case"online_debit":l+="9";break;case"account_deposit":l+="6";break;case"loyalty_points":l+="8";break;default:l+="3"}if(r.credit_card&&r.credit_card.company)switch(l+="&orderCardFlag=",r.credit_card.company.toLowerCase()){case"visa":l+=3;break;case"mastercard":l+=2;break;case"american express":case"amex":l+=5;break;case"elo":l+=8;break;case"aura":l+=7;break;case"hipercard":l+=6;break;case"diners club":l+=1;break;default:l+=9}}const p=setInterval((()=>{const e=document.getElementById("confirmation");if(e){e.insertAdjacentHTML("beforeend",'<a id="bannerEconfy"></a> <param id="TagEConfy" value="'.concat(l,'">'));const a=document.createElement("script");a.id="getData",a.type="text/javascript",a.src="https://banner.compreconfie.com.br/scripts/tagBanner.min.js"+"?".concat(t,"&lightbox=true"),document.body.appendChild(a),clearInterval(p)}}),200)}}};e.currentRoute&&a(e.currentRoute),e.afterEach(a)}}else console.error(new Error("Can't show lightbox without `compreConfieStoreId` option"))}}}]);
//# sourceMappingURL=0af77688ee79c961e41d.js.map