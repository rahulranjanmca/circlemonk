(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{206:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(0);var r=t(277);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const o={id:"cicd",title:"Java Architect Interview Questions",sidebar_label:"CI/CD"},i=[],c={rightToc:i},u="wrapper";function s({components:e,...n}){return Object(r.b)(u,a({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"what-are-the-differences-between-continuous-integration-continuous-delivery-and-continuous-deployment"},"What are the differences between continuous integration, continuous delivery, and continuous deployment?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Developers practicing ",Object(r.b)("strong",{parentName:"li"},"continuous integration")," merge their changes back to the main branch as often as possible. By doing so, you avoid the integration hell that usually happens when people wait for release day to merge their changes into the release branch."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Continuous delivery")," is an extension of continuous integration to make sure that you can release new changes to your customers quickly in a sustainable way. This means that on top of having automated your testing, you also have automated your release process and you can deploy your application at any point of time by clicking on a button."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Continuous deployment")," goes one step further than continuous delivery. With this practice, every change that passes all stages of your production pipeline is released to your customers. There's no human intervention, and only a failed test will prevent a new change to be deployed to production.")))}s.isMDXComponent=!0},277:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},l=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),l=i(t),p=r,d=l[c+"."+p]||l[p]||s[p]||o;return t?a.a.createElement(d,Object.assign({},{ref:n},u,{components:t})):a.a.createElement(d,Object.assign({},{ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=l;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);