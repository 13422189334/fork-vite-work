import{a2 as i,r as u,q as c,D as e,F as t,I as l,B as A}from"./vendor.1682602826682.js";import{_ as m}from"./index.1682602826682.js";const C={name:"limitsBackEndEndPage",setup(){const n=i();return{onGoToFrontEndPage:()=>{n.push("/limits/frontEnd/page")}}}},_=A(" \u7ACB\u5373\u524D\u5F80\u524D\u7AEF\u63A7\u5236\u8DEF\u7531 ");function d(n,o,p,F,D,B){const s=u("el-alert"),E=u("elementPosition"),a=u("el-icon"),r=u("el-button");return l(),c("div",null,[e(s,{title:"\u6E29\u99A8\u63D0\u793A\uFF1A1\u3001\u6B64\u9875\u9762\u65E0\u6CD5\u6A21\u62DF\u540E\u7AEF\u63A7\u5236\u8DEF\u7531\uFF0C\u56E0\u4E3A `gitee` \u4E0A\u6240\u8BF7\u6C42\u7684 `json` \u83DC\u5355\u6570\u636E\u7EBF\u4E0A\u4F1A\u51FA\u73B0\u8DE8\u57DF\u7684\u60C5\u51B5\uFF08json\u5730\u5740\uFF1A\n      https://gitee.com/lyt-top/vue-next-admin-images/raw/master/menu/adminMenu.json\uFF09\u30022\u3001\u672C\u5730\u63A5\u53E3\u8BF7\u6C42\u6587\u4EF6\u4F4D\u7F6E\uFF1A`/src/api/menu/index.ts`\u3002\n      3\u3001\u62C9\u53D6\u4EE3\u7801\u540E\u672C\u5730\u8BF7\u6C42\u67E5\u770B\u540E\u7AEF\u63A7\u5236\u9875\u9762\u8DEF\u7531\u6548\u679C\uFF1A`/src/store/modules/themeConfig.ts`\u4E2D\u5F00\u542F\uFF08isRequestRoutes \u4E3A true\uFF0C\u5219\u5F00\u542F\u540E\u7AEF\u63A7\u5236\u8DEF\u7531\uFF09\u3002\n      4\u3001\u6B64\u9875\u9762\u6548\u679C\u53EA\u4F5C\u4E3A\u6F14\u793A\u4F7F\u7528\uFF0C\u82E5\u51FA\u73B0\u4E0D\u53EF\u9006\u8F6C\u7684bug\uFF0C\u8BF7\u5C1D\u8BD5 `F5` \u5237\u65B0\u9875\u9762\u30025\u3001\u9ED8\u8BA4\u542F\u7528\u7684\u662F `\u524D\u7AEF\u63A7\u5236\u8DEF\u7531`\u3002",type:"warning",closable:!1}),e(r,{type:"primary",size:"small",class:"mt15",onClick:F.onGoToFrontEndPage},{default:t(()=>[e(a,null,{default:t(()=>[e(E)]),_:1}),_]),_:1},8,["onClick"])])}var x=m(C,[["render",d]]);export{x as default};