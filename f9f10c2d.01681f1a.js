(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return c}));n(0);var r=n(289);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const i={id:"security",title:"Spring Security Interview Questions",sidebar_label:"Security"},a=[{value:"How to implement SSO with spring?",id:"how-to-implement-sso-with-spring",children:[]},{value:"What are the Spring Method Level Security Annotation And How to use it?",id:"what-are-the-spring-method-level-security-annotation-and-how-to-use-it",children:[]}],u={rightToc:a},l="wrapper";function c({components:e,...t}){return Object(r.b)(l,o({},u,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"how-to-implement-sso-with-spring"},"How to implement SSO with spring?"),Object(r.b)("p",null,"You need to have two app for SSO. You can achieve in one also with tweak.\n1. Resource Server\n- You can use Either ",Object(r.b)("inlineCode",{parentName:"p"},"EnableOAuth2Sso")," or ",Object(r.b)("inlineCode",{parentName:"p"},"EnableResourceServer ")," annotation to achieve this.\n- You should extend ",Object(r.b)("inlineCode",{parentName:"p"},"WebSecurityConfigurerAdapter")," to give the logic for verification\n2. Authorization Server\n- You can use ",Object(r.b)("inlineCode",{parentName:"p"},"EnableAuthorizationServer")," annotation\n- You should override ",Object(r.b)("inlineCode",{parentName:"p"},"AuthorizationServerConfigurerAdapter")," to give the defaults\n- You should override ",Object(r.b)("inlineCode",{parentName:"p"},"AuthenticationProvider")," to authenticate the user from database."),Object(r.b)("h3",{id:"what-are-the-spring-method-level-security-annotation-and-how-to-use-it"},"What are the Spring Method Level Security Annotation And How to use it?"),Object(r.b)("p",null,"In order to enable Spring Method level Security, we need to annotate a @Configuration class with @EnableGlobalMethodSecurity."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"prePostEnabled : Determines if Spring Security\u2019s pre post annotations ","[@PreAuthorize,@PostAuthorize]"," should be enabled."),Object(r.b)("li",{parentName:"ul"},"secureEnabled : Determines if Spring Security\u2019s secured annotation ","[@Secured]"," should be enabled."),Object(r.b)("li",{parentName:"ul"},"jsr250Enabled : Determines if JSR-250 annotations ","[@RolesAllowed]"," should be enabled.")))}c.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),o=n.n(r),i=o.a.createContext({}),a=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=a(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),p=a(n),s=r,d=p[u+"."+s]||p[s]||c[s]||i;return n?o.a.createElement(d,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(d,Object.assign({},{ref:t},l))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);