(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[7385],{1382:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Block:()=>v,default:()=>f});var o=n(9196),r=n(5736),s=n(4184),l=n.n(s),c=n(2864),a=n(3611),i=n(721),u=n(1478);n(402);const d=t=>({width:t/5*100+"%"}),p=({parentClassName:t})=>{const e=d(0);return(0,o.createElement)("div",{className:l()("wc-block-components-product-rating__norating-container",`${t}-product-rating__norating-container`)},(0,o.createElement)("div",{className:"wc-block-components-product-rating__norating",role:"img"},(0,o.createElement)("span",{style:e})),(0,o.createElement)("span",null,(0,r.__)("No Reviews","woocommerce")))},g=t=>{const{rating:e,reviews:n,parentClassName:s}=t,c=d(e),a=(0,r.sprintf)(/* translators: %f is referring to the average rating value */
(0,r.__)("Rated %f out of 5","woocommerce"),e),i={__html:(0,r.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,r._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",n,"woocommerce"),(0,r.sprintf)('<strong class="rating">%f</strong>',e),(0,r.sprintf)('<span class="rating">%d</span>',n))};return(0,o.createElement)("div",{className:l()("wc-block-components-product-rating__stars",`${s}__product-rating__stars`),role:"img","aria-label":a},(0,o.createElement)("span",{style:c,dangerouslySetInnerHTML:i}))},m=t=>{const{reviews:e}=t,n=(0,r.sprintf)(/* translators: %s is referring to the total of reviews for a product */
(0,r._n)("(%s customer review)","(%s customer reviews)",e,"woocommerce"),e);return(0,o.createElement)("span",{className:"wc-block-components-product-rating__reviews_count"},n)},v=t=>{const{textAlign:e,isDescendentOfSingleProductBlock:n,shouldDisplayMockedReviewsWhenProductHasNoReviews:r}=t,s=(0,a.F)(t),{parentClassName:i}=(0,c.useInnerBlockLayoutContext)(),{product:d}=(0,c.useProductDataContext)(),v=(t=>{const e=parseFloat(t.average_rating);return Number.isFinite(e)&&e>0?e:0})(d),f=(t=>{const e=(0,u.h)(t.review_count)?t.review_count:parseInt(t.review_count,10);return Number.isFinite(e)&&e>0?e:0})(d),y=l()(s.className,"wc-block-components-product-rating",{[`${i}__product-rating`]:i,[`has-text-align-${e}`]:e}),b=r?(0,o.createElement)(p,{parentClassName:i}):null,k=f?(0,o.createElement)(g,{rating:v,reviews:f,parentClassName:i}):b;if(f||r)return(0,o.createElement)("div",{className:y,style:s.style},(0,o.createElement)("div",{className:"wc-block-components-product-rating__container"},k,f&&n?(0,o.createElement)(m,{reviews:f}):null))},f=(0,i.withProductDataContext)(v)},3611:(t,e,n)=>{"use strict";n.d(e,{F:()=>i});var o=n(4184),r=n.n(o),s=n(7884),l=n(2646),c=n(1473),a=n(2661);const i=t=>{const e=(t=>{const e=(0,s.Kn)(t)?t:{style:{}};let n=e.style;return(0,l.H)(n)&&(n=JSON.parse(n)||{}),(0,s.Kn)(n)||(n={}),{...e,style:n}})(t),n=(0,a.vc)(e),o=(0,a.l8)(e),i=(0,a.su)(e),u=(0,c.f)(e);return{className:r()(u.className,n.className,o.className,i.className),style:{...u.style,...n.style,...o.style,...i.style}}}},1473:(t,e,n)=>{"use strict";n.d(e,{f:()=>s});var o=n(7884),r=n(2646);const s=t=>{const e=(0,o.Kn)(t.style.typography)?t.style.typography:{},n=(0,r.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:n,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,n)=>{"use strict";n.d(e,{l8:()=>d,su:()=>p,vc:()=>u});var o=n(4184),r=n.n(o),s=n(9784),l=n(2289),c=n(7884);function a(t={}){const e={};return(0,l.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,s.o)(e)}-${t}`:""}function u(t){var e,n,o,s,l,u,d;const{backgroundColor:p,textColor:g,gradient:m,style:v}=t,f=i("background-color",p),y=i("color",g),b=function(t){if(t)return`has-${t}-gradient-background`}(m),k=b||(null==v||null===(e=v.color)||void 0===e?void 0:e.gradient);return{className:r()(y,b,{[f]:!k&&!!f,"has-text-color":g||(null==v||null===(n=v.color)||void 0===n?void 0:n.text),"has-background":p||(null==v||null===(o=v.color)||void 0===o?void 0:o.background)||m||(null==v||null===(s=v.color)||void 0===s?void 0:s.gradient),"has-link-color":(0,c.Kn)(null==v||null===(l=v.elements)||void 0===l?void 0:l.link)?null==v||null===(u=v.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:a({color:(null==v?void 0:v.color)||{}})}}function d(t){var e;const n=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:n,style:o}=t,s=n?i("border-color",n):"";return r()({"has-border-color":!!n||!(null==o||null===(e=o.border)||void 0===e||!e.color),[s]:!!s})}(t),style:a({border:n})}}function p(t){var e;return{className:void 0,style:a({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,n)=>{"use strict";n.d(e,{F:()=>o});const o=t=>null===t},1478:(t,e,n)=>{"use strict";n.d(e,{h:()=>o});const o=t=>"number"==typeof t},7884:(t,e,n)=>{"use strict";n.d(e,{$n:()=>s,Kn:()=>r,Qr:()=>l});var o=n(8519);const r=t=>!(0,o.F)(t)&&t instanceof Object&&t.constructor===Object;function s(t,e){return r(t)&&e in t}const l=t=>0===Object.keys(t).length},2646:(t,e,n)=>{"use strict";n.d(e,{H:()=>o});const o=t=>"string"==typeof t},402:()=>{}}]);