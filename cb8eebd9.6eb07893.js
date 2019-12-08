(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(0);var o=n(329);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const a={id:"route",title:"Angular Router Interview Questions",sidebar_label:"Routes"},i=[{value:"What is Angular Router?",id:"what-is-angular-router",children:[]},{value:"What are the router imports?",id:"what-are-the-router-imports",children:[]},{value:"What is router outlet?",id:"what-is-router-outlet",children:[]},{value:"What are router links?",id:"what-are-router-links",children:[]},{value:"What are active router links?",id:"what-are-active-router-links",children:[]},{value:"What is router state?",id:"what-is-router-state",children:[]},{value:"What are router events?",id:"what-are-router-events",children:[]},{value:"What is activated route?",id:"what-is-activated-route",children:[]},{value:"How do you define routes?",id:"how-do-you-define-routes",children:[]},{value:"What is the purpose of Wildcard route?",id:"what-is-the-purpose-of-wildcard-route",children:[]},{value:"Do I need a Routing Module always?",id:"do-i-need-a-routing-module-always",children:[]},{value:"How do you detect route change in Angular?",id:"how-do-you-detect-route-change-in-angular",children:[]}],u={rightToc:i},s="wrapper";function l({components:e,...t}){return Object(o.b)(s,r({},u,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"what-is-angular-router"},"What is Angular Router?"),Object(o.b)("p",null,"Angular Router is a mechanism in which navigation happens from one view to the next as users perform application tasks. It borrows the concepts or model of browser's application navigation."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-are-the-router-imports"},"What are the router imports?"),Object(o.b)("p",null,"The Angular Router which represents a particular component view for a given URL is not part of Angular Core. It is available in library named ",Object(o.b)("inlineCode",{parentName:"p"},"@angular/router")," to import required router components. For example, we import them in app module as below,"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { RouterModule, Routes } from '@angular/router';\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-is-router-outlet"},"What is router outlet?"),Object(o.b)("p",null,"The RouterOutlet is a directive from the router library and it  acts as a placeholder that marks the spot in the template where the router should display the components for that outlet. Router outlet is used like a component,"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-html"}),"<router-outlet></router-outlet>\n\x3c!-- Routed components go here --\x3e\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-are-router-links"},"What are router links?"),Object(o.b)("p",null,"The RouterLink is a directive on the anchor tags give the router control over those elements. Since the navigation paths are fixed, you can assign string values to router-link directive as below,"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-html"}),'<h1>Angular Router</h1>\n<nav>\n  <a routerLink="/todosList" >List of todos</a>\n  <a routerLink="/completed" >Completed todos</a>\n</nav>\n<router-outlet></router-outlet>\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-are-active-router-links"},"What are active router links?"),Object(o.b)("p",null,"RouterLinkActive is a directive that toggles css classes for active RouterLink bindings based on the current RouterState. i.e, the Router will add CSS classes when this link is active and and remove when the link is inactive. For example, you can add them to RouterLinks as below"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-html"}),'<h1>Angular Router</h1>\n<nav>\n <a routerLink="/todosList" routerLinkActive="active">List of todos</a>\n <a routerLink="/completed" routerLinkActive="active">Completed todos</a>\n</nav>\n<router-outlet></router-outlet>\n')),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-is-router-state"},"What is router state?"),Object(o.b)("p",null,'RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data. You can access the current RouterState from anywhere in the application using the ',Object(o.b)("inlineCode",{parentName:"p"},"Router service")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"routerState")," property."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"@Component({templateUrl:'template.html'})\nclass MyComponent {\n  constructor(router: Router) {\n    const state: RouterState = router.routerState;\n    const root: ActivatedRoute = state.root;\n    const child = root.firstChild;\n    const id: Observable<string> = child.params.map(p => p.id);\n    //...\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-are-router-events"},"What are router events?"),Object(o.b)("p",null,"During each navigation, the Router emits navigation events through the Router.events property allowing you to track the lifecycle of the route. The sequence of router events is as below,\n1. NavigationStart,\n2. RouteConfigLoadStart,\n3. RouteConfigLoadEnd,\n4. RoutesRecognized,\n5. GuardsCheckStart,\n6. ChildActivationStart,\n7. ActivationStart,\n8. GuardsCheckEnd,\n9. ResolveStart,\n10. ResolveEnd,\n11. ActivationEnd\n12. ChildActivationEnd\n13. NavigationEnd,\n14. NavigationCancel,\n15. NavigationError\n16. Scroll"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-is-activated-route"},"What is activated route?"),Object(o.b)("p",null,"ActivatedRoute contains the information about a route associated with a component loaded in an outlet. It can also be used to traverse the router state tree. The ActivatedRoute will be injected as a router service to access the information. In the below example, you can access route path and parameters,"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"@Component({...})\nclass MyComponent {\n  constructor(route: ActivatedRoute) {\n    const id: Observable<string> = route.params.pipe(map(p => p.id));\n    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));\n    // route.data includes both `data` and `resolve`\n    const user = route.data.pipe(map(d => d.user));\n  }\n}\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"how-do-you-define-routes"},"How do you define routes?"),Object(o.b)("p",null," A router must be configured with a list of route definitions. You configures the router with routes via the ",Object(o.b)("inlineCode",{parentName:"p"},"RouterModule.forRoot()")," method, and adds the result to the AppModule's ",Object(o.b)("inlineCode",{parentName:"p"},"imports")," array."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"const appRoutes: Routes = [\n { path: 'todo/:id',      component: TodoDetailComponent },\n {\n   path: 'todos',\n   component: TodosListComponent,\n   data: { title: 'Todos List' }\n },\n { path: '',\n   redirectTo: '/todos',\n   pathMatch: 'full'\n },\n { path: '**', component: PageNotFoundComponent }\n];\n\n@NgModule({\n imports: [\n   RouterModule.forRoot(\n     appRoutes,\n     { enableTracing: true } // <-- debugging purposes only\n   )\n   // other imports here\n ],\n ...\n})\nexport class AppModule { }\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"what-is-the-purpose-of-wildcard-route"},"What is the purpose of Wildcard route?"),Object(o.b)("p",null,"If the URL doesn't match any predefined routes then it causes the router to throw an error and crash the app. In this case, you can use wildcard route. A wildcard route has a path consisting of two asterisks to match every URL.\nFor example, you can define PageNotFoundComponent for wildcard route as below"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"{ path: '**', component: PageNotFoundComponent }\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"do-i-need-a-routing-module-always"},"Do I need a Routing Module always?"),Object(o.b)("p",null,"No, the Routing Module is a design choice. You can skip routing Module (for example, AppRoutingModule) when the configuration is simple and merge the routing configuration directly into the companion module (for example, AppModule). But it is recommended when the configuration is complex and includes specialized guard and resolver services."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"how-do-you-detect-route-change-in-angular"},"How do you detect route change in Angular?"),Object(o.b)("p",null," In Angular7, you can subscribe to router to detect the changes. The subscription for router events would be as below,"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"this.router.events.subscribe((event: Event) => {})\n")),Object(o.b)("p",null," Let's take a simple component to detect router changes"),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-javascript"}),"import { Component } from '@angular/core';\nimport { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';\n\n@Component({\n    selector: 'app-root',\n    template: `<router-outlet></router-outlet>`\n})\nexport class AppComponent {\n\n    constructor(private router: Router) {\n\n        this.router.events.subscribe((event: Event) => {\n            if (event instanceof NavigationStart) {\n                // Show loading indicator and perform an action\n            }\n\n            if (event instanceof NavigationEnd) {\n                // Hide loading indicator and perform an action\n            }\n\n            if (event instanceof NavigationError) {\n                // Hide loading indicator and perform an action\n                console.log(event.error); // It logs an error for debugging\n            }\n        });\n   }\n}\n")),Object(o.b)("hr",null))}l.isMDXComponent=!0},329:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o),a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),c=i(n),d=o,p=c[u+"."+d]||c[d]||l[d]||a;return n?r.a.createElement(p,Object.assign({},{ref:t},s,{components:n})):r.a.createElement(p,Object.assign({},{ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);