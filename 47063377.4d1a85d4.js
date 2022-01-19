(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{277:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a),i=n.a.createContext({}),l=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},s=function(e){var t=l(e.components);return n.a.createElement(i.Provider,{value:t},e.children)};var o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(r[a]=e[a]);return r}(e,["components","mdxType","originalType","parentName"]),p=l(r),u=a,b=p[s+"."+u]||p[u]||c[u]||i;return r?n.a.createElement(b,Object.assign({},{ref:t},o,{components:r})):n.a.createElement(b,Object.assign({},{ref:t},o))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[o]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return c}));r(0);var a=r(277);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}const i={id:"arrays",title:"Javascript Arrays Interview Questions",sidebar_label:"Arrays"},l=[{value:"What is the purpose of array slice method?",id:"what-is-the-purpose-of-array-slice-method",children:[]},{value:"What is the purpose of array splice method?",id:"what-is-the-purpose-of-array-splice-method",children:[]},{value:"What is the difference between slice and splice?",id:"what-is-the-difference-between-slice-and-splice",children:[]}],s={rightToc:l},o="wrapper";function c({components:e,...t}){return Object(a.b)(o,n({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"what-is-the-purpose-of-array-slice-method"},"What is the purpose of array slice method?"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"slice()")," method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end. Some of the examples of this method are,"),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{className:"language-javascript"}),"let arrayIntegers = [1, 2, 3, 4, 5];\nlet arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]\nlet arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]\nlet arrayIntegers3 = arrayIntegers.slice(4); //returns [5]\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Slice method won't mutate the original array but it returns the subset as new array."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"what-is-the-purpose-of-array-splice-method"},"What is the purpose of array splice method?"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"splice()")," method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the option second argument indicates the number of elements to be deleted. Each additional argument is added to the array. Some of the examples of this method are,"),Object(a.b)("pre",null,Object(a.b)("code",n({parentName:"pre"},{className:"language-javascript"}),'let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];\nlet arrayIntegersOriginal2 = [1, 2, 3, 4, 5];\nlet arrayIntegersOriginal3 = [1, 2, 3, 4, 5];\n\nlet arrayIntegers1 = arrayIntegersOriginal1.splice(0,2); // returns [1, 2]; original array: [3, 4, 5]\nlet arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]\nlet arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Splice method modifies the original array and returns the deleted array."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"what-is-the-difference-between-slice-and-splice"},"What is the difference between slice and splice?"),Object(a.b)("p",null,"Some of the major difference in a tabular form"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",n({parentName:"tr"},{align:null}),"Slice"),Object(a.b)("th",n({parentName:"tr"},{align:null}),"Splice"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:null}),"Doesn't modify the original array(immutable)"),Object(a.b)("td",n({parentName:"tr"},{align:null}),"Modifies the original array(mutable)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:null}),"Returns the subset of original array"),Object(a.b)("td",n({parentName:"tr"},{align:null}),"Returns the deleted elements as array")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",n({parentName:"tr"},{align:null}),"Used to pick the elements from array"),Object(a.b)("td",n({parentName:"tr"},{align:null}),"Used to insert or delete elements to/from array")))))}c.isMDXComponent=!0}}]);