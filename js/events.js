window.Tilda=window.Tilda||{},function(g){Tilda.sendEcommerceEvent=function(e,t){if(void 0===t||0==t.length)return!1;if(void 0===e||"add"!=e&&"remove"!=e&&"purchase"!=e&&"detail"!=e)return!1;for(var i,r,a,d="",c=0,o=[],n="",m="",l="",s=0;s<t.length;s++){""<d&&(d+=", "),d+=(a=t[s]).name,c+=a.price,r="",void 0!==a.options&&0<a.options.length&&g.each(a.options,function(e,t){r+=t.option+": "+t.variant+"; "});var p={name:a.name,price:a.price,variant:r,quantity:1};a.id&&0<a.id&&(id=a.id,p.id=a.id),a.uid&&0<a.uid&&(m=a.uid,p.uid=a.uid),a.recid&&0<a.recid&&(n=a.recid,p.recid=a.recid),a.lid&&0<a.lid&&(l=a.lid,p.lid=a.lid),a.sku&&0<a.sku&&(p.sku=a.sku),o[o.length]=p}"add"!=e&&"remove"!=e||(i="/tilda/cart/"+e+"/",0<n&&(i+=""+n),0<m?i+="-u"+m:0<l&&(i+="-"+l)),"detail"==e&&(i="/tilda/product/detail/",0<m?i+=m+"/":(0<n&&(i+="r"+n),0<l&&(i+="-l"+l))),"purchase"==e&&(i="/tilda/rec"+n+"/payment/"),(p={ecommerce:{}}).ecommerce[e]={products:o},Tilda.sendEventToStatistics(i,d,p,c)},Tilda.sendEventToStatistics=function(e,t,i,r){var a,d="/"==e.substring(0,1),c=[],o=0,n=!(!(n=g("#allrecords").data("fb-event"))||"nosend"!=n),m=!(!(m=g("#allrecords").data("vk-event"))||"nosend"!=m),l=g("#allrecords").data("tilda-currency")||g(".t706").data("project-currency-code")||"RUB";if(i=i||window.location.href,0<(r=r?parseFloat(r):0))if(window.dataLayer||(window.dataLayer=[]),-1!=e.indexOf("/tilda/")&&-1!=e.indexOf("/payment/")&&window.tildaForm&&""<window.tildaForm.orderIdForStat)i={ecommerce:{purchase:{actionField:{id:window.tildaForm.orderIdForStat,revenue:window.tildaForm.amountForStat},products:window.tildaForm.arProductsForStat}}},window.tildaForm.tildapayment&&window.tildaForm.tildapayment.promocode&&(i.ecommerce.purchase.actionField.coupon=window.tildaForm.tildapayment.promocode),i.event="purchase";else if(i&&i.ecommerce&&(i.ecommerce.add&&i.ecommerce.add.products?c=i.ecommerce.add.products:i.ecommerce.remove&&i.ecommerce.remove.products?c=i.ecommerce.remove.products:i.ecommerce.detail&&i.ecommerce.detail.products&&(c=i.ecommerce.detail.products),c&&0<c.length)){for(o=0;o<c.length;o++)c[o].id||(c[o].sku?c[o].id=c[o].sku:c[o].uid?c[o].id=c[o].uid:c[o].recid&&c[o].lid&&(c[o].id=c[o].recid+"_"+c[o].lid));i.ecommerce.add&&i.ecommerce.add.products?(i.ecommerce.add.products=c,i.event="addToCart"):i.ecommerce.remove&&i.ecommerce.remove.products?(i.ecommerce.remove.products=c,i.event="removeFromCart"):i.ecommerce.detail&&i.ecommerce.detail.products?(i.ecommerce.detail.products=c,i.event="viewProduct"):(d?(i.event="pageView",i.eventAction=e):i.event=e,i.title=t,i.value=r)}null!=window.dataLayer&&(d?0<r?i&&i.ecommerce?window.dataLayer.push(i):window.dataLayer.push({event:"pageView",eventAction:e,title:t,value:r,product:i}):window.dataLayer.push({event:"pageView",eventAction:e,title:t,referer:i}):i&&i.ecommerce?window.dataLayer.push(i):window.dataLayer.push({event:e,eventAction:t,value:r,referer:i}));try{window.gtagTrackerID&&"gtag"==window.mainTracker&&(d?i&&i.event?"purchase"==i.event?gtag("event","purchase",{transaction_id:i.ecommerce.purchase.actionField.id,value:parseFloat(r).toFixed(2),currency:l,items:i.ecommerce.purchase.products}):"addToCart"==i.event&&i.ecommerce.add?gtag("event","add_to_cart",{items:i.ecommerce.add.products}):"removeFromCart"==i.event&&i.ecommerce.remove?gtag("event","remove_from_cart",{items:i.ecommerce.remove.products}):"viewProduct"==i.event&&i.ecommerce.detail&&gtag("event","view_item",{items:i.ecommerce.detail.products}):gtag("config",window.gtagTrackerID,{page_title:t,page_path:e}):gtag("event",e,{event_category:"tilda",event_label:t,value:r}))}catch(e){}if(window.ga&&"tilda"!=window.mainTracker&&"gtag"!=window.mainTracker)if(d)if(i&&i.event){try{if(window.Tilda.isLoadGAEcommerce||(window.Tilda.isLoadGAEcommerce=!0,ga("require","ec")),ga("set","currencyCode",l),"purchase"==i.event){var s=i.ecommerce.purchase.products.length;for(h=0;h<s;h++)f=i.ecommerce.purchase.products[h],ga("ec:addProduct",{id:f.id||h,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","purchase",{id:i.ecommerce.purchase.actionField.id,revenue:parseFloat(r).toFixed(2)})}else if("addToCart"==i.event&&i.ecommerce.add){s=i.ecommerce.add.products.length;for(h=0;h<s;h++)f=i.ecommerce.add.products[h],ga("ec:addProduct",{id:f.id||h,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","add")}else if("removeFromCart"==i.event&&i.ecommerce.remove){s=i.ecommerce.remove.products.length;for(h=0;h<s;h++)f=i.ecommerce.remove.products[h],ga("ec:addProduct",{id:f.id||h,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","remove")}else if("viewProduct"==i.event&&i.ecommerce.detail){s=i.ecommerce.detail.products.length;for(h=0;h<s;h++)f=i.ecommerce.detail.products[h],ga("ec:addProduct",{id:f.id||h,name:f.name,price:parseFloat(f.price).toFixed(2),quantity:f.quantity});ga("ec:setAction","detail")}}catch(e){}ga("send",{hitType:"pageview",page:e,title:t,params:i})}else ga("send",{hitType:"pageview",page:e,title:t});else ga("send",{hitType:"event",eventCategory:"tilda",eventAction:e,eventLabel:t,eventValue:r});if(window.mainMetrikaId&&0<window.mainMetrikaId&&"function"==typeof ym&&(d?(a={title:t},0<r&&(a.params={order_price:r},l&&(a.params.currency=l)),ym(window.mainMetrikaId,"hit",e,a)):0<r?(a={order_price:r},l&&(a.currency=l),ym(window.mainMetrikaId,"reachGoal",e,a)):ym(window.mainMetrikaId,"reachGoal",e)),""<window.mainMetrika&&window[window.mainMetrika]&&(d?0<r?window[window.mainMetrika].hit(e,{title:t,order_price:r,params:i}):window[window.mainMetrika].hit(e,{title:t}):0<r?window[window.mainMetrika].reachGoal(e,{title:t,params:i,order_price:r}):window[window.mainMetrika].reachGoal(e,{title:t,referer:i})),null!=window.fbq&&0==n)try{if(d)if(-1==e.indexOf("tilda/")||-1==e.indexOf("/payment/")&&-1==e.indexOf("/submitted/"))if(i&&i.event&&0<r)if("addToCart"==i.event&&i.ecommerce.add){var s=i.ecommerce.add.products.length,p=[];for(h=0;h<s;h++)f=i.ecommerce.add.products[h],p.push(f.id||f.uid||f.name);window.fbq("track","AddToCart",{content_ids:p,content_type:"product",value:r,currency:l})}else if("viewProduct"==i.event&&i.ecommerce.detail){s=i.ecommerce.detail.products.length,p=[];for(h=0;h<s;h++)f=i.ecommerce.detail.products[h],p.push(f.id||f.uid||f.name);window.fbq("track","ViewContent",{content_ids:p,content_type:"product",value:r,currency:l})}else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else 0<r&&l?window.fbq("track","InitiateCheckout",{content_name:t,content_category:e,value:r,currency:l}):window.fbq("track","Lead",{content_name:t,content_category:e});else window.fbq("track",e,{content_name:t,value:r})}catch(e){}if(void 0!==window.VK&&void 0!==window.VK.Retargeting&&0==m)try{if(d){var u=g("#allrecords").data("vk-price-list-id")?parseInt(g("#allrecords").data("vk-price-list-id")):0,w="",v=!1;if(i&&i.event)if(v={products:[],currency_code:"",total_price:0},"purchase"==i.event&&i.ecommerce.purchase)if(0<r&&0<u){v.currency_code=l;s=i.ecommerce.purchase.products.length,p=[];for(h=0;h<s;h++)f=i.ecommerce.purchase.products[h],v.products.push({id:f.id||f.uid||f.name,price:f.price||0}),v.total_price=r;w="init_checkout"}else w="t-purchase";else if("addToCart"==i.event&&i.ecommerce.add)if(0<r&&0<u){v.currency_code=l;s=i.ecommerce.add.products.length,p=[];for(h=0;h<s;h++)f=i.ecommerce.add.products[h],v.products.push({id:f.id||f.uid||f.name,price:f.price||0}),v.total_price=r;w="add_to_cart"}else w="t-add-to-cart",i.ecommerce.add[0]&&i.ecommerce.add[0].uid&&(w+="-"+i.ecommerce.add[0].uid);else if("viewProduct"==i.event&&i.ecommerce.detail)if(0<r&&0<u){v.currency_code=l;s=i.ecommerce.detail.products.length,p=[];for(h=0;h<s;h++)f=i.ecommerce.detail.products[h],v.products.push({id:f.id||f.uid||f.name,price:f.price||0}),v.total_price=r;w="view_product"}else w="t-view-product",i.ecommerce.detail[0]&&i.ecommerce.detail[0].uid&&(w+="-"+i.ecommerce.detail[0].uid);else if("removeFromCart"==i.event&&i.ecommerce.remmove)if(0<r&&0<u){v.currency_code=l;var f,h,s=i.ecommerce.remove.products.length,p=[];for(h=0;h<s;h++)f=i.ecommerce.remove.products[h],v.products.push({id:f.id||f.uid||f.name,price:f.price||0}),v.total_price=r;w="remove_from_cart"}else w="t-remove-product",i.ecommerce.remove[0]&&i.ecommerce.remove[0].uid&&(w+="-"+i.ecommerce.remove[0].uid);else w=i.event;else w=-1!=e.indexOf("tilda/")&&-1!=e.indexOf("/payment/")?"t-purchase-"+e.replace("/tilda/","").replace("tilda/","").replace("/payment/",""):-1!=e.indexOf("tilda/")&&-1!=e.indexOf("/submitted/")?"t-lead-"+e.replace("/tilda/","").replace("tilda/","").replace("/submitted/",""):-1!=e.indexOf("tilda/popup")||-1!=e.indexOf("tilda/click")?"t-"+e.replace("/tilda/","").replace("/","-"):"t-"+e.replace("/","-");0<u&&v&&v.currency_code?(VK.Retargeting.Event("purchase"),VK.Retargeting.ProductEvent(u,w,v)):(VK.Retargeting.Event(w),"t-purchase"==w.substring(0,10)?VK.Goal("purchase"):"t-lead"==w.substring(0,6)&&VK.Goal("lead"))}else VK.Retargeting.Event(e)}catch(e){}"0"<window.mainMailruId&&(m=window._tmr||(window._tmr=[]),d?0<r?m.push({id:""+window.mainMailruId,type:"pageView",url:e,value:r,start:(new Date).getTime()}):m.push({id:""+window.mainMailruId,type:"pageView",url:e,start:(new Date).getTime()}):0<r?m.push({id:""+window.mainMailruId,type:"reachGoal",goal:e,value:r}):m.push({id:""+window.mainMailruId,type:"reachGoal",goal:e})),"function"==typeof window.tildastat&&(d?(0<e.indexOf("payment")&&-1<e.indexOf("tilda/form")&&(e=e.replace("tilda/form","tilda/rec")),window.tildastat("pageview",{page:e})):window.tildastat("pageview",{page:"/tilda/event/"+e}))},Tilda.saveUTM=function(){try{var e=window.location.href,t="",i="";if(-1!==e.toLowerCase().indexOf("utm_")&&"string"==typeof(t=(t=(e=e.toLowerCase()).split("?"))[1])){var r,a=t.split("&");for(r in a)"utm_"==a[r].split("=")[0].substring(0,4)&&(i=i+a[r]+"|||");0<i.length&&((t=new Date).setDate(t.getDate()+30),document.cookie="TILDAUTM="+encodeURIComponent(i)+"; path=/; expires="+t.toUTCString())}}catch(e){}},g(document).ready(function(){var e=navigator.userAgent.toLowerCase(),e=-1!=e.indexOf("msie")&&parseInt(e.split("msie")[1]);8!=e&&9!=e||g(".t-btn").each(function(){var e=g(this).attr("href");0<g(this).find("table").length&&""<e&&-1==e.indexOf("#popup:")&&-1==e.indexOf("#price:")&&g(this).click(function(e){e.preventDefault();e=g(this).attr("href");window.location.href=e})});try{1==g("#allrecords").length&&"no"==g("#allrecords").data("tilda-cookie")||Tilda.saveUTM()}catch(e){}g(".r").off("click","a.js-click-stat, .js-click-zero-stat"),g(".r").on("click","a.js-click-stat, .js-click-zero-stat",function(e){var t=g(this).data("tilda-event-name"),i=g(this).text(),a=g(this).attr("href")||"",d=g(this).attr("target"),t=t||"/tilda/click/".$(this).closest(".r").attr("id")+"/?url="+a;if(Tilda.sendEventToStatistics(t,i),"http"==a.substring(0,4))return window.setTimeout(function(){var e,t,i="",r="";if("_blank"==d){if(-1!=a.indexOf("?")&&(a=(i=a.split("?"))[0],-1!=(i=i[1]).indexOf("#")&&(i=i.split("#"),a=a+"#"+i[1],i=i[0]),i=i.split("&")),0==g("#tildaredirectform").length?g("body").append('<form id="tildaredirectform" target="_blank" method="GET" action="'+a+'" style="display:none;"></form>'):g("#tildaredirectform").attr("method","GET").attr("action",a),r="",0<i.length)for(e in i)(t=i[e].split("="))&&0<t.length&&(r+='<input type="hidden" name="'+t[0]+'" value="'+(t[1]||"")+'">');g("#tildaredirectform").html(r),g("#tildaredirectform").submit()}else window.location.href=a},300),e.preventDefault(),!1}),g("input.js-amount").each(function(){var e=(e=g(this).val()).replace(/,/g,".");e=parseFloat(e.replace(/[^0-9\.]/g,"")),g(this).val(e)})})}(jQuery);