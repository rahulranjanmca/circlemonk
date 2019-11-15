(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{177:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));a(0);var n=a(289);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const i={id:"collections",title:"Java Collection Interview Question",sidebar_label:"Collections"},o=[{value:"What is the Collection framework in Java?",id:"what-is-the-collection-framework-in-java",children:[]},{value:"What are the main differences between array and collection?",id:"what-are-the-main-differences-between-array-and-collection",children:[]},{value:"What is the difference between ArrayList and Vector?",id:"what-is-the-difference-between-arraylist-and-vector",children:[]}],c={rightToc:o},l="wrapper";function s({components:e,...t}){return Object(n.b)(l,r({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-is-the-collection-framework-in-java"},"What is the Collection framework in Java?"),Object(n.b)("p",null,"Collection Framework is a combination of classes and interface, which is used to store and manipulate the data in the form of objects. It provides various classes such as ArrayList, Vector, Stack, and HashSet, etc. and interfaces such as List, Queue, Set, etc. for this purpose."),Object(n.b)("hr",null),Object(n.b)("h3",{id:"what-are-the-main-differences-between-array-and-collection"},"What are the main differences between array and collection?"),Object(n.b)("p",null,"Array and Collection are somewhat similar regarding storing the references of objects and manipulating the data, but they differ in many ways. The main differences between the array and Collection are defined below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Arrays are always of fixed size, i.e., a user can not increase or decrease the length of the array according to their requirement or at runtime, but In Collection, size can be changed dynamically as per need."),Object(n.b)("li",{parentName:"ul"},"Arrays can only store homogeneous or similar type objects, but in Collection, heterogeneous objects can be stored."),Object(n.b)("li",{parentName:"ul"},"Arrays cannot provide the ?ready-made? methods for user requirements as sorting, searching, etc. but Collection includes readymade methods to use.")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"what-is-the-difference-between-arraylist-and-vector"},"What is the difference between ArrayList and Vector?"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:null}),"ArrayList"),Object(n.b)("th",r({parentName:"tr"},{align:null}),"Vector"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"ArrayList is not synchronized."),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Vector is synchronized.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"ArrayList is not a legacy class."),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Vector is a legacy class.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"ArrayList increases its size by 50% of the array size."),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Vector increases its size by doubling the array size.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:null}),"ArrayList is not ",Object(n.b)("inlineCode",{parentName:"td"},"thread-safe")," as it is not synchronized."),Object(n.b)("td",r({parentName:"tr"},{align:null}),"Vector is ",Object(n.b)("inlineCode",{parentName:"td"},"thread-safe")," as it's every method is synchronized.")))))}s.isMDXComponent=!0},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n),i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},c=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),b=o(a),d=n,u=b[c+"."+d]||b[d]||s[d]||i;return a?r.a.createElement(u,Object.assign({},{ref:t},l,{components:a})):r.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);