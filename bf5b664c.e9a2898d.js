(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));r(0);var n=r(323);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const a={id:"cloud-circuit-breaker",title:"Spring Cloud Circuit Breaker Interview Questions",sidebar_label:"Circuit Breaker"},i=[{value:"What is the Dependency You need for Spring Cloud Server?",id:"what-is-the-dependency-you-need-for-spring-cloud-server",children:[]},{value:"What do you mean by Config First Bootstrap?",id:"what-do-you-mean-by-config-first-bootstrap",children:[]},{value:"What do you mean by Discovery First Bootstrap?",id:"what-do-you-mean-by-discovery-first-bootstrap",children:[]}],c={rightToc:i},s="wrapper";function p({components:e,...t}){return Object(n.b)(s,o({},c,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"what-is-the-dependency-you-need-for-spring-cloud-server"},"What is the Dependency You need for Spring Cloud Server?"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"what-do-you-mean-by-config-first-bootstrap"},"What do you mean by Config First Bootstrap?"),Object(n.b)("p",null,"The default behavior for any application that has the Spring Cloud Config Client on the classpath is as follows: When a config client starts, it binds to the Config Server (through the spring.cloud.config.uri bootstrap configuration property) and initializes Spring Environment with remote property sources."),Object(n.b)("p",null,'The net result of this behavior is that all client applications that want to consume the Config Server need a bootstrap.yml (or an environment variable) with the server address set in spring.cloud.config.uri (it defaults to "',Object(n.b)("a",o({parentName:"p"},{href:"http://localhost:8888%22"}),'http://localhost:8888"'),")."),Object(n.b)("h3",{id:"what-do-you-mean-by-discovery-first-bootstrap"},"What do you mean by Discovery First Bootstrap?"))}p.isMDXComponent=!0},323:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r(0),o=r.n(n),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),u=i(r),l=n,d=u[c+"."+l]||u[l]||p[l]||a;return r?o.a.createElement(d,Object.assign({},{ref:t},s,{components:r})):o.a.createElement(d,Object.assign({},{ref:t},s))}));function l(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);