var w=Object.defineProperty;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var _=(a,e,s)=>e in a?w(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,d=(a,e)=>{for(var s in e||(e={}))x.call(e,s)&&_(a,s,e[s]);if(i)for(var s of i(e))F.call(e,s)&&_(a,s,e[s]);return a};import{_ as C}from"./index.1642757606384.js";import{m as g,t as E,r as y,a9 as $,q as o,D as u,F as f,I as l,x as t,$ as v,Z as h,w as p,C as m}from"./vendor.1642757606384.js";const k={name:"pagesWaterfall",setup(){const a=g({});return d({},E(a))}},D={class:"waterfall-container"},B={class:"waterfall-first"},b={class:"w100 h100 flex"},j={class:"flex-margin"},I={class:"waterfall-last"},N={class:"w100 h100 flex"},V={class:"flex-margin"};function q(a,e,s,L,R,S){const n=y("el-card"),c=$("waves");return l(),o("div",D,[u(n,{shadow:"hover",header:"\u7011\u5E03\u5C4F\uFF08\u5E03\u5C40\u4E00\uFF09",class:"mb15"},{default:f(()=>[t("div",B,[(l(),o(v,null,h(30,r=>p(t("div",{class:"waterfall-first-item",key:r},[t("div",b,[t("span",j,m(r),1)])]),[[c]])),64))])]),_:1}),u(n,{shadow:"hover",header:"\u7011\u5E03\u5C4F\uFF08\u5E03\u5C40\u4E8C\uFF09"},{default:f(()=>[t("div",I,[(l(),o(v,null,h(30,r=>p(t("div",{class:"waterfall-last-item",key:r},[t("div",N,[t("span",V,m(r),1)])]),[[c,"light"]])),64))])]),_:1})])}var A=C(k,[["render",q],["__scopeId","data-v-7b7c26f5"]]);export{A as default};