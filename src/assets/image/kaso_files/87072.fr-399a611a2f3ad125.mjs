"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[87072],{337815:(e,i,t)=>{t.d(i,{YS:()=>l,eF:()=>s,m_:()=>a});var r=t(172071),n=t(619937);function a(e,i,t,r,a){let l=new URLSearchParams,s=null!=e?e:"0";return l.append(n.NR.SOURCE_EVENT_ID,s),l.append(n.NR.DESTINATION,function(e){let i;try{i=decodeURIComponent(e)}catch(t){i=e}i.startsWith("http")?i.startsWith("http://")&&(i=i.replace("http://","https://")):i="https://"+i;try{return new URL(i).origin}catch(r){let t=i.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(t&&t.length>1)return t[1];return e}}(i)||""),l.append(n.NR.EXPIRY,t?n.uV:n.ug),l.append(n.NR.PRIORITY,t?n.NR.CLICK_PRIORITY:n.NR.VIEW_PRIORITY),a&&l.append(n.NR.ADVERTISER_ID,a),r&&l.append(n.NR.CAMPAIGN_ID,r),l.append(n.NR.SOURCE_EVENT_TYPE,t?n.bC:n.Cu),"/attribution_source/?"+l.toString()}async function l(e,i,t,n,l,s,o){let{appType:d,osType:u}=s||{};if(["Pin","pinImpressions"].includes(e)&&i&&n){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"start",appType:d,osType:u});try{var c;if(!(null!==(c=window.document.featurePolicy)&&void 0!==c&&c.allowsFeature("attribution-reporting"))){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"skipped",message:"attribution-reporting is not enabled",appType:d,osType:u});return}let e=a(t,n||"",!1,l,o),i=await window.fetch(e,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}});if(!i.ok)throw Error("server request failed.");r.Z.increment("webapp.arapi.view.funnel",.1,{status:"success",appType:d,osType:u})}catch(e){r.Z.increment("webapp.arapi.view.funnel",.1,{status:"failed",error:e.name,appType:d,osType:u})}}else r.Z.increment("webapp.arapi.view.funnel",.1,{status:"missing_param",appType:d,osType:u})}function s(e){if(e){let i=e.toLowerCase();if(i.includes("windows"))return"windows xp"===i?1:"windows vista"===i?2:"windows 7"===i?3:"windows 8"===i?4:12;if(i.includes("mac os"))return 5;if(i.includes("android"))return 7;if(i.includes("ios"))return 6;if(i.includes("ubuntu"))return 8;if(i.includes("chromium os"))return 13}return 0}},48714:(e,i,t)=>{t.d(i,{Se:()=>f,iw:()=>w,gV:()=>h,G3:()=>v,Gj:()=>b,Jd:()=>_,$3:()=>g});var r=t(56641),n=t(231486),a=t(226198),l=t(186656),s=t(250059);let o=e=>"string"!=typeof e&&e?e.state:null;var d=t(643913),u=t(547239),c=t(508847),p=t(579164),m=t(333155);let _=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},h=({isOffsiteUrl:e,event:i})=>!e&&(i.metaKey||i.ctrlKey),g=({location:e,pinId:i,surface:t})=>!!t&&!m.ZF.includes(t)||e.pathname.includes(i),f=(e,i)=>{var t,r;let l=Math.round(1e3*Math.random())+"",s=Math.round(1e3*Math.random())+"";n.t8((0,a.GS)(l),s);let o={token:`${l}-${s}`,url:e,...i&&!i.params?i.queryParams:(null==i?void 0:i.params)&&{pin:null!==(t=i.params.pinId)&&void 0!==t?t:void 0,isThirdPartyAd:null!==(r=i.params.isThirdPartyAd)&&void 0!==r?r:void 0,csr:i.params.csrId&&!i.params.pinId?i.params.csrId:void 0,client_tracking_params:i.params.clientTrackingParams,aux_data:i.params.auxData?JSON.stringify(i.params.auxData):void 0}};return`/offsite/?${(0,d.Z)(o)}`},b=(e,i)=>{(0,r.Z)(f(e,i),!0,null==i?void 0:i.features)},w=async({clientTrackingParams:e,href:i,isMounted:t,pinId:r,spamCheckCallback:n})=>{let a=await (0,l.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:r,url:i}});if(!a.resource_response.error&&t){let e=a.resource_response.data||{},{message:i,redirect_status:t,url:r}=e,l=["blocked","suspicious","porn"].includes(t);n({blocked:l,message:i,redirectStatus:t,sanitized_url:r})}},v=({event:e,onHistoryChange:i,href:t,history:n,target:a})=>{let l=(0,s.Z)(t),d=o(t),m=(0,u.Z)(l);m===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,r.Z)(l,"blank"===a):n&&m===p.Z.SAME_ORIGIN&&(n.push((0,c.Z)({url:l}),null!=d?d:{}),i&&i({event:e}))}},287072:(e,i,t)=>{t.d(i,{Z:()=>p});var r=t(667294),n=t(616550),a=t(768559),l=t(48714),s=t(188335),o=t(250059),d=t(149230),u=t(108234),c=t(67347);function p(e){var i,t,p;let{externalData:m,href:_,onHistoryChange:h,target:g}=e,[f,b]=(0,r.useState)(null),[w,v]=(0,r.useState)(!1),P=(0,n.useHistory)(),k=(0,n.useLocation)(),I=(0,o.Z)(_),y=(0,d.Z)({url:I}),{showWarning:S}=null!==(i=(0,u.s)())&&void 0!==i?i:{},{pin:A,surface:R}=m||{},x=A?(0,a.Z)({boardUrl:null===(t=A.board)||void 0===t?void 0:t.url,location:k,pinId:A.entityId,pinnerUserName:null===(p=A.pinner)||void 0===p?void 0:p.username,storyPinDataId:A.storyPinDataId,trackingParams:A.trackingParams,trackingParamsMap:A.trackingParamsMap}):null,E=(0,s.Z)();return(0,r.useEffect)(()=>(v(!0),()=>{v(!1)}),[]),(0,r.useEffect)(()=>{y&&A&&null===f&&w&&(!A.promoter||A.isDownstreamPromotion)&&(0,l.$3)({location:k,pinId:A.entityId,surface:R})&&(0,l.iw)({clientTrackingParams:x,isMounted:w,pinId:A.entityId,spamCheckCallback:e=>b(e),href:I})},[x,A,R,I,y,w,k,f]),({event:e})=>{if(!(0,l.gV)({isOffsiteUrl:y,event:e})){if(e.preventDefault(),!_||"string"==typeof _&&_.startsWith("#")){(0,c.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:k.pathname,href:_}});return}if(y||null!=m&&m.dangerouslyForceOffsiteUrl){var i;E({auxData:null==m?void 0:m.auxData,clientTrackingParams:x,pin:(null==m?void 0:m.pin)&&{attributionSourceId:m.pin.attributionSourceId,campaignId:m.pin.campaignId,isPromoted:m.pin.isPromoted,pinPromotionId:m.pin.pinPromotionId,isThirdPartyAd:m.pin.isThirdPartyAd,advertiserId:m.pin.advertiserId},pinId:null==m?void 0:null===(i=m.pin)||void 0===i?void 0:i.entityId,queryParams:null==m?void 0:m.queryParams,showWarning:S,spamCheck:f,url:I})}else(0,l.G3)({event:e,href:_,history:P,onHistoryChange:h,target:"blank"===g?"blank":null})}}}},188335:(e,i,t)=>{t.d(i,{Z:()=>m});var r=t(983722),n=t(619937),a=t(337815),l=t(366284),s=t(407043),o=t(48714),d=t(43760);let u=(e,i,t)=>{let r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(n.$N.ATTRIBUTION_SOURCE_ID,e),r.setAttribute(n.$N.ATTRIBUTE_DESTINATION,t),r.setAttribute(n.$N.ATTRIBUTE_ON,t),r.click()},c=(e,i,t,r,l)=>{let s=(0,a.m_)(e,t,!0,r,l),o=document.createElement("a");o.setAttribute("href",i),o.setAttribute("target","_blank"),o.setAttribute("rel","noopener nofollow noreferrer"),o.style.cursor="pointer",o.style.display="block",o.setAttribute(n.NR.SOURCE,s),o.click()},p=()=>{let{logContextEvent:e}=(0,s.v)();return({attributionSourceId:i,auxData:t,campaignId:n,clientTrackingParams:a,href:s,isPromoted:d,pinId:p,pinPromotionId:m,isThirdPartyAd:_,advertiserId:h})=>{var g,f,b;if(!d)return!1;let w=(0,r.Z)(),v=(0,o.Se)(s,{params:{pinId:p,csrId:null,clientTrackingParams:a,auxData:t,isThirdPartyAd:_}}),P=null!==(g=null==w?void 0:w.userAgent.browserName)&&void 0!==g?g:"";if((0,l.G6)(P)){let{group:t}=null!==(f=null==w?void 0:w.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==f?f:{},r=null!=w&&w.userAgent.browserVersion?w.userAgent.browserVersion:"0.0",l=parseFloat(r.split(".")[0]+"."+r.split(".")[1]);if(i&&l>=14.1&&["enabled_safari"].includes(t))return u(i,v,s),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_pcm:!0,attribution_source_id:i,page_url:s}}),!0}else if((0,l.i7)(P)&&null!==(b=window.document.featurePolicy)&&void 0!==b&&b.allowsFeature("attribution-reporting"))return c(i,v,s,n,h),e({event_type:101,clientTrackingParams:a,object_id_str:p||"",aux_data:{pin_id:p||"",click_measurement_ppid:m||"",click_measurement_campaign_id:n||"",is_arapi:!0,attribution_source_id:i,page_url:s}}),!0;return!1}},m=e=>{let i=p();return({auxData:t,clientTrackingParams:r,pin:n,pinId:a,queryParams:l,showWarning:s,spamCheck:u,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:r,pinId:a,hasPin:!!n,auxData:t,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd});return}if(!n&&!(null!=e&&e.isFromClickthroughLink)){(0,o.Gj)(c,l?{queryParams:l}:{params:{pinId:a}});return}if(null!=u&&u.blocked){null==s||s(u);return}n&&i({attributionSourceId:n.attributionSourceId,auxData:t,campaignId:n.campaignId?String(n.campaignId):null,clientTrackingParams:r,href:c,isPromoted:n.isPromoted,pinId:a,pinPromotionId:n.pinPromotionId?String(n.pinPromotionId):null,isThirdPartyAd:n.isThirdPartyAd,advertiserId:n.advertiserId?n.advertiserId:null})||(0,o.Gj)(c,{params:{clientTrackingParams:r,auxData:t,pinId:a,isThirdPartyAd:null==n?void 0:n.isThirdPartyAd}})}}},250059:(e,i,t)=>{t.d(i,{Z:()=>r});let r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},43760:(e,i,t)=>{t.d(i,{Z:()=>a});var r=t(186656),n=t(48714);function a(e,i){let{auxData:t,clientTrackingParams:a,hasPin:l,pinId:s,isThirdPartyAd:o}=i||{},d={pin_id:s,check_only:!0,client_tracking_params:l?a:void 0,url:e,aux_data:JSON.stringify(t)};o&&(d.third_party_ad=s,delete d.pin_id),(0,r.Z)({url:"/v3/offsite/",data:d}).then(i=>{if(i&&i.resource_response&&!i.resource_response.error){let{resource_response:e}=i,{redirect_status:t,url:r}=e.data,n=["blocked","suspicious","porn"].includes(t);if(!n){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Gj)(e,{params:l?{pinId:s,clientTrackingParams:a,auxData:t,isThirdPartyAd:o}:{pinId:s}})})}},333155:(e,i,t)=>{t.d(i,{UP:()=>s,Wv:()=>n,ZF:()=>r,zI:()=>a,zl:()=>l});let r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],n=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...n,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],l=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],s=["BaseBoardPinGrid"]},108234:(e,i,t)=>{t.d(i,{Z:()=>g,s:()=>h});var r=t(667294),n=t(425288),a=t(608575),l=t(883119),s=t(121151),o=t(898781),d=t(349700),u=t(785893);let c=()=>{var e;let i=(0,o.ZP)(),{dismissWarning:t}=null!==(e=h())&&void 0!==e?e:{};return(0,u.jsx)(l.xu,{paddingX:3,children:(0,u.jsx)(l.zx,{fullWidth:!0,color:"red",onClick:t,text:i.bt("OK !", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},p=()=>{let e=(0,o.ZP)();return(0,u.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(l.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("En savoir plus", "Learn more", "Link text leading to policy website", undefined, true)})})},m=({message:e,sanitized_url:i})=>{var t;let r=(0,o.ZP)(),{dismissWarning:n}=null!==(t=h())&&void 0!==t?t:{};return(0,u.jsx)(s.ZP,{accessibilityModalLabel:r.bt("Nous avons bloqué ce lien", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:n,heading:r.bt("Attention !", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,u.jsx)(c,{}),children:(0,u.jsxs)(l.xu,{padding:6,children:[(0,u.jsx)(l.xv,{children:(0,d.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,u.jsx)(p,{},"learnMoreLink")})}),(0,u.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,u.jsx)(l.xu,{marginEnd:3,children:(0,u.jsx)(l.JO,{accessibilityLabel:r.bt("Adresse de lien bloquée", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,u.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(i).hostname})]})]})})},{Provider:_,useMaybeHook:h}=(0,n.Z)("SpammyClickthrough");function g({children:e}){let[i,t]=(0,r.useState)(null),n=(0,r.useCallback)(()=>{t(null)},[t]),a=(0,r.useCallback)(e=>{t(e)},[t]),l=(0,r.useMemo)(()=>({dismissWarning:n,showWarning:a}),[n,a]);return(0,u.jsxs)(_,{value:l,children:[i&&(0,u.jsx)(m,{...i}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/87072.fr-399a611a2f3ad125.mjs.map