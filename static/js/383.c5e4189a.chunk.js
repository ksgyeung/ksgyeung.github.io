"use strict";(self.webpackChunkkeep_it_simple_as_possible=self.webpackChunkkeep_it_simple_as_possible||[]).push([[383],{9228:function(e,n){n.Z={revision:"5a1a7d9c53a7cd410952c773f08c646ac680be5a",logs:"commit 5a1a7d9c53a7cd410952c773f08c646ac680be5a\nAuthor: PO <***>\nDate:   Sun May 22 13:48:44 2022 +0800\n\n    add filter by tag\n\ncommit 6e020d45f555384b4ce219feeafb141a8ad3f8c0\nAuthor: PO <***>\nDate:   Sun May 22 13:48:19 2022 +0800\n\n    add git log page\n\ncommit ba2d02dd1c3f6168621c58a09c70db2790f287f3\nAuthor: PO <***>\nDate:   Sun May 22 04:57:59 2022 +0800\n\n    bug fixed: 404 return home button not show as link\n\ncommit ca412697ee0603daacf265642cfda46ad184a11a\nAuthor: PO <***>\nDate:   Sun May 22 04:53:26 2022 +0800\n\n    use FakeA for return home page\n\ncommit 75326b2728da89da3dbdf9a5608cb2b152924c04\nAuthor: PO <***>\nDate:   Sun May 22 04:52:10 2022 +0800\n\n    bug fixed: 404 page not shown\n\ncommit 9884f9b059f91445d845e010afdab6d226b48f34\nAuthor: PO <***>\nDate:   Sun May 22 04:45:42 2022 +0800\n\n    0.3 beta\n\ncommit 59847c21bdd1e7280be585f2e3c8a5806c401abe\nAuthor: PO <***>\nDate:   Sun May 22 04:45:10 2022 +0800\n\n    use title query to open the article\n\ncommit 911676b1be6a7c12bd79e02b09dffb617f117af1\nAuthor: PO <***>\nDate:   Sun May 22 04:12:26 2022 +0800\n\n    lazy load img and width problem\n\ncommit 4b0051c92e06d9298d8349a472fe5613c1ca2d83\nAuthor: PO <***>\nDate:   Sun May 22 04:12:01 2022 +0800\n\n    dark theme\n\ncommit a3e6eb2d9684abf9f1cb7a0e3aa4f6b4bfc04524\nAuthor: PO <***>\nDate:   Sat May 21 22:35:53 2022 +0800\n\n    remove aaa.json"}},5865:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.d(n,{Z:function(){return u}});t(8963);var i=t(5859);var u=function(e){return(0,i.jsx)("a",o(o({},e),{},{href:e.href,onClick:function(e){return e.preventDefault()},children:e.children}))}},4946:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(8963),a=t(7605),o="FooterComponent_line__5j53x",i=t(9228),u=t(5859);var c=function(){var e=r.useContext(a.Z);return(0,u.jsxs)("footer",{children:[(0,u.jsxs)("div",{className:o,children:["Copyright ",(new Date).getFullYear()," \xa9 KSG Yeung"]}),(0,u.jsxs)("div",{className:o,children:["KISAP ","0.4-BETA"]}),(0,u.jsxs)("div",{className:o,onClick:function(n){n.preventDefault(),e.replace({log:"1"})},children:["#",i.Z.revision]})]})}},4865:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(8963),a=t(7605),o=t(5865),i="HeaderComponent_banner_text_container__Hk92u",u="HeaderComponent_line1__BURpY",c="HeaderComponent_line2__UGE7T",s=t(5859);var d=function(e){var n=r.useContext(a.Z).replace;return(0,s.jsx)("header",{children:(0,s.jsx)(o.Z,{href:"/",children:(0,s.jsxs)("div",{className:i,onClick:function(e){e.preventDefault(),n({})},children:[(0,s.jsx)("div",{className:u,children:"KEEP IT"}),(0,s.jsx)("div",{className:c,children:"SIMPLE AS POSSIBLE"})]})})})}},6383:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var r=t(885),a=t(8963),o=t(4946),i=t(4865),u="EditPage_body__RHjRr",c=t(5859);var s=function(){var e=a.useState(""),n=(0,r.Z)(e,2),t=n[0],s=n[1],d=a.useState(1),l=(0,r.Z)(d,2),f=l[0],m=l[1],h=a.useState(""),p=(0,r.Z)(h,2),b=p[0],v=p[1],j=a.useState(""),x=(0,r.Z)(j,2),g=x[0],y=x[1],O=a.useState(""),S=(0,r.Z)(O,2),_=S[0],w=S[1],C=a.useState(""),D=(0,r.Z)(C,2),P=D[0],A=D[1];function N(e,n){e.preventDefault(),n()}return a.useEffect((function(){return window.$("#summernote").summernote({height:600,focus:!1,fontNames:["Noto Sans HK","source-code-pro","monospace","Arial","Arial Black","Comic Sans MS","Courier New"],fontNamesIgnoreCheck:["Noto Sans HK","source-code-pro"],codeviewFilter:!1,codeviewIframeFilter:!0,addDefaultFonts:!1}),function(){window.$("#summernote").summernote("destroy")}}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(i.Z,{}),(0,c.jsxs)("div",{className:u,children:[(0,c.jsxs)("div",{children:["JSON: ",(0,c.jsx)("textarea",{value:t,onChange:function(e){return N(e,(function(){return s(e.target.value)}))}})]}),(0,c.jsxs)("div",{children:["ID: ",(0,c.jsx)("input",{type:"number",value:f,onChange:function(e){return N(e,(function(){return m(Number.parseInt(e.target.value))}))}})]}),(0,c.jsxs)("div",{children:["TITLE: ",(0,c.jsx)("input",{type:"text",value:g,onChange:function(e){return N(e,(function(){return y(e.target.value)}))}})]}),(0,c.jsxs)("div",{children:["QUERY: ",(0,c.jsx)("input",{type:"text",value:_,onChange:function(e){return N(e,(function(){return w(e.target.value)}))}})]}),(0,c.jsxs)("div",{children:["TAGS: ",(0,c.jsx)("input",{type:"text",value:b,onChange:function(e){return N(e,(function(){return v(e.target.value)}))}})]}),(0,c.jsxs)("div",{children:["CONTENT:",(0,c.jsx)("div",{id:"summernote"},"summernote")]}),(0,c.jsxs)("div",{children:["ATTACHMENTS: ",(0,c.jsx)("input",{type:"text",value:P,onChange:function(e){return N(e,(function(){return A(e.target.value)}))}})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("button",{onClick:function(e){e.preventDefault();var n=P.split("|"),t={};if(n.length%2===0)for(var r=0;r<n.length/2;r+=2)t[n[r]]=n[r+1];var a={id:f,query:_,tags:b.split(",").map((function(e){return e.trim()})),title:g,publish_time:+new Date/1e3,last_update_time:+new Date/1e3,content:window.$("#summernote").summernote("code"),attachments:t,extra_javascript:[]};s(JSON.stringify(a))},children:"Generate / Save"}),(0,c.jsx)("button",{onClick:function(e){e.preventDefault();var n=JSON.parse(t);m(1),y(n.title),v(n.tags.join(",")),A(Object.entries(n.attachments).flat().join("|")),window.$("#summernote").summernote("code",n.content)},children:"Load"})]})]}),(0,c.jsx)(o.Z,{})]})})}}}]);