(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{271:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return c}));a(0);var i=a(329);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const r={id:"microservice",title:"Java Microservice Interview Questions",sidebar_label:"Microservice"},o=[{value:"What is Microservice Architecture?",id:"what-is-microservice-architecture",children:[]},{value:"What do you mean by Cloud Native Application?",id:"what-do-you-mean-by-cloud-native-application",children:[]},{value:"How will you pass the unique id for logging?",id:"how-will-you-pass-the-unique-id-for-logging",children:[]},{value:"What is Service Discovery?",id:"what-is-service-discovery",children:[]},{value:"What are the advantages and disadvantages of microservices?",id:"what-are-the-advantages-and-disadvantages-of-microservices",children:[]},{value:"What do you mean by Domain Driver Design?",id:"what-do-you-mean-by-domain-driver-design",children:[]},{value:"What is Bounded Context?",id:"what-is-bounded-context",children:[]},{value:"What is Compensating transaction or Saga Pattern?",id:"what-is-compensating-transaction-or-saga-pattern",children:[]},{value:"What is Circuit breaker pattern?",id:"what-is-circuit-breaker-pattern",children:[]},{value:"What are the deployment strategy you can think in Microservice Deployment?",id:"what-are-the-deployment-strategy-you-can-think-in-microservice-deployment",children:[]},{value:"What are the testing technique available to you?",id:"what-are-the-testing-technique-available-to-you",children:[]},{value:"What do you mean by Decompose by Subdomain?",id:"what-do-you-mean-by-decompose-by-subdomain",children:[]},{value:"What do you mean by Decompose by Business Capability?",id:"what-do-you-mean-by-decompose-by-business-capability",children:[]}],s={rightToc:o},l="wrapper";function c({components:e,...t}){return Object(i.b)(l,n({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"what-is-microservice-architecture"},"What is Microservice Architecture?"),Object(i.b)("p",null,"Microservices is an architectural style which structures and application as a collection of loosely coupled, independently maintainable, testable and deployable services which are organized around business capabilities. "),Object(i.b)("p",null,"If you have a business focus and you want to solve a use case or a problem efficiently without the boundaries of technology, want to scale an independent service infinitely, highly available stateless services which are easy to maintainable and managed as well as independently testable then we would go ahead and implement Microservice architecture."),Object(i.b)("h3",{id:"what-do-you-mean-by-cloud-native-application"},"What do you mean by Cloud Native Application?"),Object(i.b)("p",null,"App should have alteast below things"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Containerized"),Object(i.b)("li",{parentName:"ul"},"DevOps"),Object(i.b)("li",{parentName:"ul"},"Microservice"),Object(i.b)("li",{parentName:"ul"},"CI/CD")),Object(i.b)("h3",{id:"how-will-you-pass-the-unique-id-for-logging"},"How will you pass the unique id for logging?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"One can be Writing a filter for corelation id generation"),Object(i.b)("li",{parentName:"ol"},"Write Your own wrapper around RestTemplate so that it posts with correlation id every time.")),Object(i.b)("h3",{id:"what-is-service-discovery"},"What is Service Discovery?"),Object(i.b)("p",null,"In a cloud environment where docker images are dynamically deployed on any machine or IP + Port combination, it becomes difficult for dependent services to update at runtime. Service discovery is created due to that purpose only."),Object(i.b)("p",null,"Service discovery is one of the services running under microservices architecture, which registers entries of all of the services running under the service mesh. All of the actions are available through the REST API. So whenever the services are up and running, the individual services registers themselves to service discovery service and service discovery services maintains heartbeat to make sure that those services are alive. That also serves the purpose of monitoring services as well. Service discovery also helps in distributing requests across services deployed in a fair manner."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"what-are-the-advantages-and-disadvantages-of-microservices"},"What are the advantages and disadvantages of microservices?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Microservices Advantages",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Smaller code base is easy to maintain."),Object(i.b)("li",{parentName:"ul"},"Easy to scale as individual component."),Object(i.b)("li",{parentName:"ul"},"Technology diversity i.e. we can mix libraries, databases, frameworks etc."),Object(i.b)("li",{parentName:"ul"},"Fault isolation i.e. a process failure should not bring whole system down."),Object(i.b)("li",{parentName:"ul"},"Better support for smaller and parallel team."),Object(i.b)("li",{parentName:"ul"},"Independent deployment"),Object(i.b)("li",{parentName:"ul"},"Deployment time reduce"))),Object(i.b)("li",{parentName:"ul"},"Microservices Disadvantages",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Difficult to achieve strong consistency across services"),Object(i.b)("li",{parentName:"ul"},"ACID transactions do not span multiple processes."),Object(i.b)("li",{parentName:"ul"},"Distributed System so hard to debug and trace the issues"),Object(i.b)("li",{parentName:"ul"},"Greater need for end to end testing"),Object(i.b)("li",{parentName:"ul"},"Required cultural changes in across teams like Dev and Ops working together even in same team.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"what-do-you-mean-by-domain-driver-design"},"What do you mean by Domain Driver Design?"),Object(i.b)("h3",{id:"what-is-bounded-context"},"What is Bounded Context?"),Object(i.b)("p",null,"Bounded Context is a central pattern in Domain-Driven Design. In Bounded Context, everything related to the domain is visible within context internally but opaque to other bounded contexts. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships."),Object(i.b)("p",null,"Monolithic Conceptual Model Problem "),Object(i.b)("p",null,"A single conceptual model for the entire organization is very tricky to deal with. The only benefit of such a unified model is that integration is easy across the whole enterprise, but the drawbacks are many, for example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"At first, it's very hard to build a single model that works for the entire organization."),Object(i.b)("li",{parentName:"ul"},"It's hard for others (teams) to understand it."),Object(i.b)("li",{parentName:"ul"},"It's very difficult to change such a shared model to accommodate the new business requirements. The impact of such a change will be widespread across team boundaries."),Object(i.b)("li",{parentName:"ul"},"Any large enterprise needs a model that is either very large or abstract."),Object(i.b)("li",{parentName:"ul"},"Meaning of a single word may be different in different departments of an organization, so it may be really difficult to come up with a single unified model. Such a model, even if created, will lead to a lot of confusion across the teams.")),Object(i.b)("h3",{id:"what-is-compensating-transaction-or-saga-pattern"},"What is Compensating transaction or Saga Pattern?"),Object(i.b)("h3",{id:"what-is-circuit-breaker-pattern"},"What is Circuit breaker pattern?"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"what-are-the-deployment-strategy-you-can-think-in-microservice-deployment"},"What are the deployment strategy you can think in Microservice Deployment?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Multiple Service Instance Per Host."),Object(i.b)("li",{parentName:"ul"},"Single Service Instance Per Host",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Single Instance Per VM"),Object(i.b)("li",{parentName:"ul"},"Single Instance Per Container"))),Object(i.b)("li",{parentName:"ul"},"Serverless Deployment")),Object(i.b)("h3",{id:"what-are-the-testing-technique-available-to-you"},"What are the testing technique available to you?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Service Component Test"),Object(i.b)("li",{parentName:"ul"},"Consumer-driven contract test"),Object(i.b)("li",{parentName:"ul"},"Consumer-side contract test")),Object(i.b)("h3",{id:"what-do-you-mean-by-decompose-by-subdomain"},"What do you mean by Decompose by Subdomain?"),Object(i.b)("p",null,"Define services corresponding to Domain-Driven Design (DDD) subdomains. DDD refers to the application\u2019s problem space - the business - as the domain. A domain is consists of multiple subdomains. Each subdomain corresponds to a different part of the business."),Object(i.b)("p",null,"Subdomains can be classified as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Core -")," key differentiators for the business and the most valuable part of the application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Supporting -")," related to what the business does but not a differentiator. These can be implemented in-house or outsourced."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Generic -")," not specific to the business and are ideally implemented using off the shelf software\n")),Object(i.b)("h3",{id:"what-do-you-mean-by-decompose-by-business-capability"},"What do you mean by Decompose by Business Capability?"))}c.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var i=a(0),n=a.n(i),r=n.a.createContext({}),o=function(e){var t=n.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=o(e.components);return n.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(a[i]=e[i]);return a}(e,["components","mdxType","originalType","parentName"]),u=o(a),d=i,b=u[s+"."+d]||u[d]||c[d]||r;return a?n.a.createElement(b,Object.assign({},{ref:t},l,{components:a})):n.a.createElement(b,Object.assign({},{ref:t},l))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);