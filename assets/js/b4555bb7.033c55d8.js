"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=i(r),b=o,d=g["".concat(c,".").concat(b)]||g[b]||p[b]||n;return r?a.createElement(d,s(s({ref:t},l),{},{components:r})):a.createElement(d,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:3},s="Create a Blog Post",u={unversionedId:"docusaurus-basics/create-a-blog-post",id:"docusaurus-basics/create-a-blog-post",title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/docusaurus-basics/create-a-blog-post.md",sourceDirName:"docusaurus-basics",slug:"/docusaurus-basics/create-a-blog-post",permalink:"/docusaurus-basics/create-a-blog-post",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus-basics/create-a-blog-post.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/docusaurus-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/docusaurus-basics/markdown-features"}},c={},i=[{value:"Create your first Post",id:"create-your-first-post",level:2}],l={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-blog-post"},"Create a Blog Post"),(0,o.kt)("p",null,"Docusaurus creates a ",(0,o.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,o.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,o.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,o.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,o.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,o.kt)("p",null,"Create a file at ",(0,o.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,o.kt)("p",null,"A new blog post is now available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/greetings"},"http://localhost:3000/blog/greetings"),"."))}p.isMDXComponent=!0}}]);