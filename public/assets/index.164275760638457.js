var g=Object.defineProperty;var i=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var r=(t,e,s)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,c=(t,e)=>{for(var s in e||(e={}))C.call(e,s)&&r(t,s,e[s]);if(i)for(var s of i(e))D.call(e,s)&&r(t,s,e[s]);return t};import{_ as h,u as F}from"./index.1642757606384.js";import{i as x,m as V,a2 as w,L as B,t as k,r as o,q as y,x as E,D as a,F as m,M as b,I as T,B as $}from"./vendor.1642757606384.js";const S=x({name:"paramsDynamic",setup(){const t=F(),e=V({value:""}),s=w(),u=B(()=>{let{isTagsview:l}=t.state.themeConfig.themeConfig,{isTagsViewCurrenFull:n}=t.state.tagsViewRoutes;return n?"30px":l?"114px":"80px"});return c({setViewHeight:u,onGoDetailsClick:()=>{s.push({name:"paramsDynamicDetails",params:{t:"vue-next-admin",id:e.value}}),e.value=""}},k(e))}}),G={class:"flex-margin"},I=$(" \u52A8\u6001\u8DEF\u7531\u4F20\u53C2 ");function N(t,e,s,u,p,l){const n=o("el-input"),d=o("SvgIcon"),_=o("el-button"),f=o("el-result");return T(),y("div",{class:"layout-view-bg-white flex",style:b({height:`calc(100vh - ${t.setViewHeight}`})},[E("div",G,[a(f,{icon:"warning",title:"\u52A8\u6001\u8DEF\u7531",subTitle:"\u53EF `\u5F00\u542F TagsView \u5171\u7528` \u8FDB\u884C\u5355\u6807\u7B7E\u6D4B\u8BD5"},{extra:m(()=>[a(n,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=v=>t.value=v),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570id\u503C",clearable:""},null,8,["modelValue"]),a(_,{type:"primary",size:"small",class:"mt15",onClick:t.onGoDetailsClick},{default:m(()=>[a(d,{name:"iconfont icon-dongtai"}),I]),_:1},8,["onClick"])]),_:1})])],4)}var A=h(S,[["render",N]]);export{A as default};