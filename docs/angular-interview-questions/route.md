---
id: route
title: Angular Router Interview Questions
sidebar_label: Routes
---

### What is Angular Router?
Angular Router is a mechanism in which navigation happens from one view to the next as users perform application tasks. It borrows the concepts or model of browser's application navigation.

---

### What are the router imports?
The Angular Router which represents a particular component view for a given URL is not part of Angular Core. It is available in library named `@angular/router` to import required router components. For example, we import them in app module as below,
```javascript
import { RouterModule, Routes } from '@angular/router';
```

---

### What is router outlet?
The RouterOutlet is a directive from the router library and it  acts as a placeholder that marks the spot in the template where the router should display the components for that outlet. Router outlet is used like a component,
```html
<router-outlet></router-outlet>
<!-- Routed components go here -->
```

---

### What are router links?
The RouterLink is a directive on the anchor tags give the router control over those elements. Since the navigation paths are fixed, you can assign string values to router-link directive as below,
```html
<h1>Angular Router</h1>
<nav>
  <a routerLink="/todosList" >List of todos</a>
  <a routerLink="/completed" >Completed todos</a>
</nav>
<router-outlet></router-outlet>
```

---

### What are active router links?
RouterLinkActive is a directive that toggles css classes for active RouterLink bindings based on the current RouterState. i.e, the Router will add CSS classes when this link is active and and remove when the link is inactive. For example, you can add them to RouterLinks as below
 ```html
<h1>Angular Router</h1>
<nav>
  <a routerLink="/todosList" routerLinkActive="active">List of todos</a>
  <a routerLink="/completed" routerLinkActive="active">Completed todos</a>
</nav>
<router-outlet></router-outlet>
```

---

### What is router state?
RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data. You can access the current RouterState from anywhere in the application using the `Router service` and the `routerState` property.
```javascript
@Component({templateUrl:'template.html'})
class MyComponent {
  constructor(router: Router) {
    const state: RouterState = router.routerState;
    const root: ActivatedRoute = state.root;
    const child = root.firstChild;
    const id: Observable<string> = child.params.map(p => p.id);
    //...
  }
}
```

---

### What are router events?
During each navigation, the Router emits navigation events through the Router.events property allowing you to track the lifecycle of the route. The sequence of router events is as below,
1. NavigationStart,
2. RouteConfigLoadStart,
3. RouteConfigLoadEnd,
4. RoutesRecognized,
5. GuardsCheckStart,
6. ChildActivationStart,
7. ActivationStart,
8. GuardsCheckEnd,
9. ResolveStart,
10. ResolveEnd,
11. ActivationEnd
12. ChildActivationEnd
13. NavigationEnd,
14. NavigationCancel,
15. NavigationError
16. Scroll

---

### What is activated route?
ActivatedRoute contains the information about a route associated with a component loaded in an outlet. It can also be used to traverse the router state tree. The ActivatedRoute will be injected as a router service to access the information. In the below example, you can access route path and parameters,
```javascript
@Component({...})
class MyComponent {
  constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));
  }
}
```

---

### How do you define routes?
 A router must be configured with a list of route definitions. You configures the router with routes via the `RouterModule.forRoot()` method, and adds the result to the AppModule's `imports` array.
 ```javascript
const appRoutes: Routes = [
  { path: 'todo/:id',      component: TodoDetailComponent },
  {
    path: 'todos',
    component: TodosListComponent,
    data: { title: 'Todos List' }
  },
  { path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
 ```

---

### What is the purpose of Wildcard route?
If the URL doesn't match any predefined routes then it causes the router to throw an error and crash the app. In this case, you can use wildcard route. A wildcard route has a path consisting of two asterisks to match every URL.
For example, you can define PageNotFoundComponent for wildcard route as below
```javascript
{ path: '**', component: PageNotFoundComponent }
```

---

### Do I need a Routing Module always?
No, the Routing Module is a design choice. You can skip routing Module (for example, AppRoutingModule) when the configuration is simple and merge the routing configuration directly into the companion module (for example, AppModule). But it is recommended when the configuration is complex and includes specialized guard and resolver services.

---

### How do you detect route change in Angular?
 In Angular7, you can subscribe to router to detect the changes. The subscription for router events would be as below,
 ```javascript
 this.router.events.subscribe((event: Event) => {})
 ```
 Let's take a simple component to detect router changes
 ```javascript
 import { Component } from '@angular/core';
 import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

 @Component({
     selector: 'app-root',
     template: `<router-outlet></router-outlet>`
 })
 export class AppComponent {

     constructor(private router: Router) {

         this.router.events.subscribe((event: Event) => {
             if (event instanceof NavigationStart) {
                 // Show loading indicator and perform an action
             }

             if (event instanceof NavigationEnd) {
                 // Hide loading indicator and perform an action
             }

             if (event instanceof NavigationError) {
                 // Hide loading indicator and perform an action
                 console.log(event.error); // It logs an error for debugging
             }
         });
    }
 }
 ```

---
