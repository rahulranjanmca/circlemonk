(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{265:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));r(0);var n=r(329);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const i={id:"cloud-netflix",title:"Java Microservice Interview Questions",sidebar_label:"Cloud Netflix"},c=[{value:"How to create Eureka Server?",id:"how-to-create-eureka-server",children:[]},{value:"How to Register with Eureka?",id:"how-to-register-with-eureka",children:[]},{value:"How do you secure Eureka Sever?",id:"how-do-you-secure-eureka-sever",children:[]},{value:"How to enable Hystrix Circuit Breaker?",id:"how-to-enable-hystrix-circuit-breaker",children:[]},{value:"How to write hystrix client?",id:"how-to-write-hystrix-client",children:[]},{value:"What are the common Hystrix Circuit Breaker configuration?",id:"what-are-the-common-hystrix-circuit-breaker-configuration",children:[]}],o={rightToc:c},l="wrapper";function p({components:e,...t}){return Object(n.b)(l,a({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"how-to-create-eureka-server"},"How to create Eureka Server?"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add the dependency of ",Object(n.b)("inlineCode",{parentName:"p"},"spring-cloud-starter-netflix-eureka-server"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Use @EnableEurekaServer"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",a({parentName:"pre"},{className:"language-java"}),"@SpringBootApplication\n@EnableEurekaServer\npublic class Application {\n\n    public static void main(String[] args) {\n        new SpringApplicationBuilder(Application.class).web(true).run(args);\n    }\n\n}\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Standalone Mode"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"server:\n  port: 8761\n\neureka:\n  instance:\n    hostname: localhost\n  client:\n    registerWithEureka: false\n    fetchRegistry: false\n    serviceUrl:\n      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/\n        ```\n    \n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Peer Aware Mode"),Object(n.b)("p",{parentName:"li"},"For Peer Aware mode, you run the same application twice with different profiles."),Object(n.b)("p",{parentName:"li"},"First Profile:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"  spring:\n    profiles: peer1\n  eureka:\n    instance:\n      hostname: peer1\n")),Object(n.b)("p",{parentName:"li"},"Second Profile:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"    spring:\n      profiles: peer2\n    eureka:\n      instance:\n        hostname: peer2\n\n")))))),Object(n.b)("h3",{id:"how-to-register-with-eureka"},"How to Register with Eureka?"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"You need to have ",Object(n.b)("inlineCode",{parentName:"li"},"spring-cloud-starter-netflix-eureka-client")," in you classpath"),Object(n.b)("li",{parentName:"ol"},"Giving Eureka Server address in application.yml ")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"eureka:\n  client:\n    serviceUrl:\n      defaultZone: http://localhost:8761/eureka/\n")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"If in Peer mode You can give multiple peer address:")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"eureka:\n  client:\n    serviceUrl:\n      defaultZone: https://peer1/eureka/,http://peer2/eureka/,http://peer3/eureka/\n")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"how-do-you-secure-eureka-sever"},"How do you secure Eureka Sever?"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Add ",Object(n.b)("inlineCode",{parentName:"li"},"spring-boot-starter-security")," to the class path"),Object(n.b)("li",{parentName:"ol"},"Web Security Config to your app for disabling csrf.")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),'@EnableWebSecurity\nclass WebSecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http.csrf().ignoringAntMatchers("/eureka/**");\n        super.configure(http);\n    }\n}\n')),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Provide Spring Security User name and password in application.yml")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"}),"spring:\n  security:\n    user:\n      name: admin\n      password: pwd\n")),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Change the default zone url accordingly.")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-yaml"})," defaultZone:  http://admin:pwd@localhost:8761/eureka/\n")),Object(n.b)("h3",{id:"how-to-enable-hystrix-circuit-breaker"},"How to enable Hystrix Circuit Breaker?"),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-java"}),"@Bean\npublic Customizer<HystrixCircuitBreakerFactory> defaultConfig() {\n    return factory -> factory.configureDefault(id -> HystrixCommand.Setter\n            .withGroupKey(HystrixCommandGroupKey.Factory.asKey(id))\n            .andCommandPropertiesDefaults(HystrixCommandProperties.Setter()\n            .withExecutionTimeoutInMilliseconds(4000)));\n}\n")),Object(n.b)("h3",{id:"how-to-write-hystrix-client"},"How to write hystrix client?"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Include ",Object(n.b)("inlineCode",{parentName:"li"},"spring-cloud-starter-netflix-hystrix")," in you classpath"),Object(n.b)("li",{parentName:"ol"},"Miminal Hystrix Client:")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-java"}),'@SpringBootApplication\n@EnableCircuitBreaker\npublic class Application {\n\n    public static void main(String[] args) {\n        new SpringApplicationBuilder(Application.class).web(true).run(args);\n    }\n\n}\n\n@Component\npublic class StoreIntegration {\n\n    @HystrixCommand(fallbackMethod = "defaultStores")\n    public Object getStores(Map<String, Object> parameters) {\n        //do stuff that might fail\n    }\n\n    public Object defaultStores(Map<String, Object> parameters) {\n        return /* something useful */;\n    }\n}\n')),Object(n.b)("h3",{id:"what-are-the-common-hystrix-circuit-breaker-configuration"},"What are the common Hystrix Circuit Breaker configuration?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"circuitBreaker.enabled"),Object(n.b)("li",{parentName:"ul"},"circuitBreaker.requestVolumeThreshold"),Object(n.b)("li",{parentName:"ul"},"circuitBreaker.sleepWindowInMilliseconds"),Object(n.b)("li",{parentName:"ul"},"circuitBreaker.errorThresholdPercentage"),Object(n.b)("li",{parentName:"ul"},"circuitBreaker.forceOpen"),Object(n.b)("li",{parentName:"ul"},"circuitBreaker.forceClosed")),Object(n.b)("p",null,"These above you can use with ",Object(n.b)("inlineCode",{parentName:"p"},"@HystrixProperty")," annotation."))}p.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n),i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},o=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),u=c(r),s=n,b=u[o+"."+s]||u[s]||p[s]||i;return r?a.a.createElement(b,Object.assign({},{ref:t},l,{components:r})):a.a.createElement(b,Object.assign({},{ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);