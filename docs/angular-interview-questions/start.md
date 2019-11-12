---
id: start
title: Angular Interview Questions
sidebar_label: Basics
---

### What is Angular Framework?
Angular is a **TypeScript-based open-source** front-end platform that makes it easy to build applications with in web/mobile/desktop. The major features of this framework such as declarative templates, dependency injection, end to end tooling, and many more other features are used to ease the development.

 ### What is the difference between AngularJS and Angular?
Angular is a completely revived component-based framework in which an application is a tree of individual components.

Some of the major difference in tabular form

| AngularJS | Angular |
|---- | ---------
| It is based on MVC architecture  | This is based on Service/Controller |
| This uses use JavaScript to build the application| Introduced the typescript to write the application |
| Based on controllers concept| This is a component based UI approach|
| Not a mobile friendly framework| Developed considering mobile platform|
| Difficulty in SEO friendly application development| Ease to create SEO friendly applications|

### What is TypeScript?
TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. Angular built entirely in TypeScript and used as a primary language.
You can install it globally as
```
npm install -g typescript
```
Let's see a simple example of TypeScript usage,
```typescript
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Rahul";

document.body.innerHTML = greeter(user);
```
The greeter method allows only string type as argument.

### What are the key components of Angular?
Angular has the below key components:

1. **Component:** These are the basic building blocks of angular application to control HTML views.
2. **Modules:** An angular module is set of angular basic building blocks like component, directives, services etc. An application is divided into logical pieces and each piece of code is called as "module" which perform a single task.
3. **Templates:** This represent the views of an Angular application.
4. **Services:** It is used to create components which can be shared across the entire application.
5. **Metadata:** This can be used to add more data to an Angular class.

### What are directives?
Directives add behaviour to an existing DOM element or an existing component instance.
```typescript
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

Now this directive extends HTML element behavior with a yellow background as below
```html
<p myHighlight>Highlight me!</p>
```
---
### What are components?
Components are the most basic UI building block of an Angular app which formed a tree of Angular components. These components are subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.
Let's see a simple example of Angular component
```typescript
import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: ` <div>
      <h1>{{title}}</h1>
      <div>Learn Angular6 with examples</div>
   </div> `,
})

export class AppComponent {
   title: string = 'Welcome to Angular world';
}
```
---
### What are the differences between Component and Directive?
In a short note, A component(@component) is a directive-with-a-template.

Some of the major differences are mentioned in a tabular form

| Component | Directive |
|---- | ---------
| To register a component we use @Component meta-data annotation  | To register directives we use @Directive meta-data annotation |
| Components are typically used to create UI widgets| Directive is used to add behavior to an existing DOM element |
| Component is used to break up the application into smaller components| Directive is use to design re-usable components|
| Only one component can be present per DOM element | Many directives can be used per DOM element |
| @View decorator or templateurl/template are mandatory | Directive doesn't use View|

---

### What is a template?
A template is a HTML view where you can display data by binding controls to properties of an Angular component. You can store your component's template in one of two places. You can define it inline using the template property, or you can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator's templateUrl property.
**Using inline template with template syntax,**
```typescript
import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: '
      <div>
         <h1>{{title}}</h1>
         <div>Learn Angular</div>
      </div>
   '
})

export class AppComponent {
   title: string = 'Hello World';
}
```
**Using separate template file such as app.component.html**
```typescript
import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'
})

export class AppComponent {
   title: string = 'Hello World';
}
```

---

### What is a module?

Modules are logical boundaries in your application and the application is divided into separate modules to separate the functionality of your application.
Lets take an example of **app.module.ts** root module declared with **@NgModule** decorator as below,
```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule ({
   imports:      [ BrowserModule ],
   declarations: [ AppComponent ],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
The NgModule decorator has three options
1. The imports option is used to import other dependent modules. The BrowserModule is required by default for any web based angular application
2. The declarations option is used to define components in the respective module
3. The bootstrap option tells Angular which Component to bootstrap in the application

---

### What are lifecycle hooks available?
Angular application goes through an entire set of processes or has a lifecycle right from its initiation to the end of the application.
The representation of lifecycle in pictorial representation as follows,
![ScreenShot](images/lifecycle.png)


The description of each lifecycle method is as below,
1. **ngOnChanges:** When the value of a data bound property changes, then this method is called.
2. **ngOnInit:** This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.
3. **ngDoCheck:** This is for the detection and to act on changes that Angular can't or won't detect on its own.
4. **ngAfterContentInit:** This is called in response after Angular projects external content into the component's view.
5. **ngAfterContentChecked:** This is called in response after Angular checks the content projected into the component.
6. **ngAfterViewInit:** This is called in response after Angular initializes the component's views and child views.
7. **ngAfterViewChecked:** This is called in response after Angular checks the component's views and child views.
8. **ngOnDestroy:** This is the cleanup phase just before Angular destroys the directive/component.

---

12. ### What is a data binding?
    Data binding is a core concept in Angular and allows to define communication between a component and the DOM, making it very easy to define interactive applications without worrying about pushing and pulling data. There are four forms of data binding(divided as 3 categories) which differ in the way the data is flowing.
    1. **From the Component to the DOM:**
    **Interpolation:** {{ value }}: Adds the value of a property from the component
    ```html
    <li>Name: {{ user.name }}</li>
    <li>Address: {{ user.address }}</li>
    ```
    **Property binding:** [property]=”value”: The value is passed from the component to the specified property or simple HTML attribute
    ```html
    <input type="email" [value]="user.email">
    ```
    2. **From the DOM to the Component:**
    **Event binding: (event)=”function”:** When a specific DOM event happens (eg.: click, change, keyup), call the specified method in the component
    ```html
    <button (click)="logout()"></button>
    ```
    3. **Two-way binding:**
    **Two-way data binding:** [(ngModel)]=”value”: Two-way data binding allows to have the data flow both ways. For example, in the below code snippet, both the email DOM input and component email property are in sync
    ```html
    <input type="email" [(ngModel)]="user.email">
    ```

---

13. ### What is metadata?
    Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators
    1. **Class decorators**, e.g. @Component and @NgModule
    ```typescript
    import { NgModule, Component } from '@angular/core';

    @Component({
      selector: 'my-component',
      template: '<div>Class decorator</div>',
    })
    export class MyComponent {
      constructor() {
        console.log('Hey I am a component!');
      }
    }

    @NgModule({
      imports: [],
      declarations: [],
    })
    export class MyModule {
      constructor() {
        console.log('Hey I am a module!');
      }
    }
    ```
    2. **Property decorators** Used for properties inside classes, e.g. @Input and @Output
    ```typescript
    import { Component, Input } from '@angular/core';

    @Component({
        selector: 'my-component',
        template: '<div>Property decorator</div>'
    })

    export class MyComponent {
        @Input()
        title: string;
    }
    ```
    3. **Method decorators** Used for methods inside classes, e.g. @HostListener
    ```typescript
    import { Component, HostListener } from '@angular/core';

    @Component({
        selector: 'my-component',
        template: '<div>Method decorator</div>'
    })
    export class MyComponent {
        @HostListener('click', ['$event'])
        onHostClick(event: Event) {
            // clicked, `event` available
        }
    }
    ```
    4. **Parameter decorators** Used for parameters inside class constructors, e.g. @Inject
    ```typescript
    import { Component, Inject } from '@angular/core';
    import { MyService } from './my-service';

    @Component({
        selector: 'my-component',
        template: '<div>Parameter decorator</div>'
    })
    export class MyComponent {
        constructor(@Inject(MyService) myService) {
            console.log(myService); // MyService
        }
    }
    ```
---

### What is angular CLI?
Angular CLI(**Command Line Interface**) is a command line interface to scaffold and build angular apps using nodejs style (commonJs) modules.
You need to install using below npm command,
```
npm install @angular/cli@latest
```
Below are the list of few commands, which will come handy while creating angular projects
1. **Creating New Project:**
 
 ```bash
    ng new <project-name>
 ```
2. **Generating Components, Directives & Services:** 
```bash
    ng generate/g <feature-name>
```
The different types of commands would be,
* ng generate class my-new-class: add a class to your application
* ng generate component my-new-component: add a component to your application
* ng generate directive my-new-directive: add a directive to your application
* ng generate enum my-new-enum: add an enum to your application
* ng generate module my-new-module: add a module to your application
* ng generate pipe my-new-pipe: add a pipe to your application
* ng generate service my-new-service: add a service to your application
3. **Running the Project:** ng serve

---

15. ### What is the difference between constructor and ngOnInit?
    TypeScript classes has a default method called constructor which is normally used for the initialization purpose. Whereas ngOnInit method is specific to Angular, especially used to define Angular bindings. Even though constructor getting called first, it is preferred to move all of your Angular bindings to ngOnInit method.
    In order to use ngOnInit, you need to implement OnInit interface as below,
    ```typescript
    export class App implements OnInit{
      constructor(){
         //called first time before the ngOnInit()
      }

      ngOnInit(){
         //called after the constructor and called  after the first ngOnChanges()
      }
    }
    ```

---

### What is a service?
A service is used when a common functionality needs to be provided to various modules. Services allow for greater separation of concerns for your application and better modularity by allowing you to extract common functionality out of components.
Let's create a repoService which can be used across components,
```typescript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({ // The Injectable decorator is required for dependency injection to work
  // providedIn option registers the service with a specific NgModule
  providedIn: 'root',  // This declares the service with the root app (AppModule)
})
export class RepoService{
  constructor(private http: Http){
  }

  fetchAll(){
    return this.http.get('https://api.github.com/repositories');
  }
}
```
The above service uses Http service as a dependency.

---

### What is dependency injection in Angular?
Dependency injection (DI), is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself. Angular comes with its own dependency injection framework for resolving dependencies( services or objects that a class needs to perform its function).So you can have your services depend on other services throughout your application.

---

### How is Dependency Hierarchy formed?

---

### What is the purpose of async pipe?
The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.
Let's take a time observable which continuously updates the view for every 2 seconds with the current time.
```typescript
@Component({
  selector: 'async-observable-pipe',
  template: `<div><code>observable|async</code>:
       Time: {{ time | async }}</div>`
})
export class AsyncObservablePipeComponent {
  time = new Observable(observer =>
    setInterval(() => observer.next(new Date().toString()), 2000)
  );
}
```

---

### What is the option to choose between inline and external template file?
    You can store your component's template in one of two places. You can define it inline using the **template** property, or you can define the template in a separate HTML file and link to it in the component metadata using the **@Component** decorator's **templateUrl** property.
    The choice between inline and separate HTML is a matter of taste, circumstances, and organization policy. But normally we use inline template for small portion of code and external template file for bigger views. By default, the Angular CLI generates components with a template file. But you can override that with the below command,
    ```
    ng generate component hero -it
    ```

---

### What is the purpose of ngFor directive?
    We use Angular ngFor directive in the template to display each item in the list. For example, here we iterate over list of users,
    ```html
    <li *ngFor="let user of users">
      {{ user }}
    </li>
    ```
    The user variable in the ngFor double-quoted instruction is a **template input variable**

---

### What is the purpose of ngIf directive?
Sometimes an app needs to display a view or a portion of a view only under specific circumstances. The Angular ngIf directive inserts or removes an element based on a truthy/falsy condition. Let's take an example to display a message if the user age is more than 18,
```html
<p *ngIf="user.age > 18">You are not eligible for student pass!</p>
```
**Note:** Angular isn't showing and hiding the message. It is adding and removing the paragraph element from the DOM. That improves performance, especially in the larger projects with many data bindings.

---



### What is interpolation?

Interpolation is a special syntax that Angular converts into property binding. It’s a convenient alternative to property binding. It is represented by double curly braces({{}}). The text between the braces is often the name of a component property. Angular replaces that name with the string value of the corresponding component property.
Let's take an example,
```html
<h3>
  {{title}}
  <img src="{{url}}" style="height:30px">
</h3>
```
In the example above, Angular evaluates the title and url properties and fills in the blanks, first displaying a bold application title and then a URL.

---

### What are template expressions?
A template expression produces a value similar to any Javascript expression. Angular executes the expression and assigns it to a property of a binding target; the target might be an HTML element, a component, or a directive. In the property binding, a template expression appears in quotes to the right of the = symbol as in [property]="expression".
In interpolation syntax, the template expression is surrounded by double curly braces. For example, in the below interpolation, the template expression is {{username}},
```html
<h3>{{username}}, welcome to Angular</h3>
```
The below javascript expressions are prohibited in template expression
1. assignments (=, +=, -=, ...)
2. new
3. chaining expressions with ; or ,
4. increment and decrement operators (++ and --)

---

### What are template statements?
A template statement responds to an event raised by a binding target such as an element, component, or directive. The template statements appear in quotes to the right of the = symbol like **(event)="statement"**. Let's take an example of button click event's statement
```html
<button (click)="editProfile()">Edit Profile</button>
```
In the above expression, editProfile is a template statement. The below JavaScript syntax expressions are not allowed.
1. new
2. increment and decrement operators, ++ and --
3. operator assignment, such as += and -=
4. the bitwise operators | and &
5. the template expression operators
    --------------------------------------

---

### How do you categorize data binding types?

 Binding types can be grouped into three categories distinguished by the direction of data flow. They are listed as below,
 1. From the source-to-view
 2. From view-to-source
 3. View-to-source-to-view

 The possible binding syntax can be tabularized as below,

  | Data direction | Syntax | Type |
  |---- | --------- | ---- |
  | From the source-to-view(One-way)  | 1. {{expression}} 2. [target]="expression" 3. bind-target="expression" | Interpolation, Property, Attribute, Class, Style|
  | From view-to-source(One-way) | 1. (target)="statement" 2. on-target="statement" | Event |
  | View-to-source-to-view(Two-way)| 1. [(target)]="expression" 2. bindon-target="expression"| Two-way |

---

### What are pipes?
A pipe takes in data as input and transforms it to a desired output. For example, let us take a pipe to transform a component's birthday property into a human-friendly date using **date** pipe.
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  template: `<p>Birthday is {{ birthday | date }}</p>`
})
export class BirthdayComponent {
  birthday = new Date(1987, 6, 18); // June 18, 1987
}
```

---

### What is a parameterized pipe?
A pipe can accept any number of optional parameters to fine-tune its output. The parameterized pipe can be created by declaring the pipe name with a colon ( : ) and then the parameter value. If the pipe accepts multiple parameters, separate the values with colons. Let's take a birthday example with a particular format(dd/mm/yyyy):
```javascript
import { Component } from '@angular/core';

    @Component({
      selector: 'app-birthday',
      template: `<p>Birthday is {{ birthday | date:'dd/mm/yyyy'}}</p>` // 18/06/1987
    })
    export class BirthdayComponent {
      birthday = new Date(1987, 6, 18);
    }
```
**Note:** The parameter value can be any valid template expression, such as a string literal or a component property.

---

### How do you chain pipes?
You can chain pipes together in potentially useful combinations as per the needs. Let's take a birthday property which uses date pipe(along with parameter) and uppercase pipes as below
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  template: `<p>Birthday is {{  birthday | date:'fullDate' | uppercase}} </p>` // THURSDAY, JUNE 18, 1987
})
export class BirthdayComponent {
  birthday = new Date(1987, 6, 18);
}

```

---

### What is a custom pipe?
Apart from built-inn pipes, you can write your own custom pipe with the below key characteristics,
1. A pipe is a class decorated with pipe metadata **@Pipe** decorator, which you import from the core Angular library
   For example,
```javascript
    @Pipe({name: 'myCustomPipe'})
```
2. The pipe class implements the **PipeTransform** interface's transform method that accepts an input value followed by optional parameters and returns the transformed value.
   The structure of pipeTransform would be as below,
```javascript
interface PipeTransform {
  transform(value: any, ...args: any[]): any
}
```
3. The @Pipe decorator allows you to define the pipe name that you'll use within template expressions. It must be a valid JavaScript identifier.
```javascript
template: `{{someInputValue | myCustomPipe: someOtherValue}}`
```

---

### Give an example of custom pipe?
You can create custom reusable pipes for the transformation of existing value. For example, let us create a custom pipe for finding file size based on an extension,
```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customFileSizePipe'})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB'): string {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
}
```
Now you can use the above pipe in template expression as below,
```javascript
 template: `
    <h2>Find the size of a file</h2>
    <p>Size: {{288966 | customFileSizePipe: 'GB'}}</p>
  `
```

---

### What is the difference between pure and impure pipe?
  A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe. For example, any changes to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object). An impure pipe is called for every change detection cycle no matter whether the value or parameters changes. i.e, An impure pipe is called often, as often as every keystroke or mouse-move.

---

34. ### What is a bootstrapping module?
    Every application has at least one Angular module, the root module that you bootstrap to launch the application is called as bootstrapping module. It is commonly known as AppModule. The default structure of AppModule generated by AngularCLI would be as follows,
    ```javascript
    /* JavaScript imports */
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpClientModule } from '@angular/common/http';

    import { AppComponent } from './app.component';

    /* the AppModule class with the @NgModule decorator */
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

---




38. ### How can you read full response?
    The response body doesn't may not return full response data because sometimes servers also return special headers or status code which which are important for the application workflow. Inorder to get full response, you should use observe option from HttpClient,
    ```javascript
    getUserResponse(): Observable<HttpResponse<User>> {
      return this.http.get<User>(
        this.userUrl, { observe: 'response' });
    }
    ```
    Now HttpClient.get() method returns an Observable of typed HttpResponse rather than just the JSON data.

---

39. ### How do you perform Error handling?
    If the request fails on the server or failed to reach the server due to network issues then HttpClient will return an error object instead of a successful reponse. In this case, you need to handle in the component by passing error object as a second callback to subscribe() method.
    Let's see how it can be handled in the component with an example,
    ```javascript
    fetchUser() {
      this.userService.getProfile()
        .subscribe(
          (data: User) => this.userProfile = { ...data }, // success path
          error => this.error = error // error path
        );
    }
    ```
    It is always a good idea to give the user some meaningful feedback instead of displaying the raw error object returned from HttpClient.

---


51. ### What are angular elements?
    Angular elements are Angular components packaged as **custom elements**(a web standard for defining new HTML elements in a framework-agnostic way). Angular Elements hosts an Angular component, providing a bridge between the data and logic defined in the component and standard DOM APIs, thus, providing a way to use Angular components in `non-Angular environments`.

---

52. ### What is the browser support of Angular Elements?
    Since Angular elements are packaged as custom elements the browser support of angular elements is same as custom elements support. This feature is is currently supported natively in a number of browsers and pending for other browsers.

    | Browser | Angular Element Support |
    |---- | --------- |
    | Chrome | Natively supported|
    | Opera | Natively supported |
    | Safari| Natively supported |
    | Firefox | Natively supported from 63 version onwards. You need to enable dom.webcomponents.enabled and dom.webcomponents.customelements.enabled in older browsers |
    | Edge| Currently it is in progress|

---

53. ### What are custom elements?
    Custom elements (or Web Components) are a Web Platform feature which extends HTML by allowing you to define a tag whose content is created and controlled by JavaScript code. The browser maintains a `CustomElementRegistry` of defined custom elements, which maps an instantiable JavaScript class to an HTML tag. Currently this feature is supported by Chrome, Firefox, Opera, and Safari, and available in other browsers through polyfills.

---

54. ### Do I need to bootstrap custom elements?
    No, custom elements bootstrap (or start) automatically when they are added to the DOM, and are automatically destroyed when removed from the DOM. Once a custom element is added to the DOM for any page, it looks and behaves like any other HTML element, and does not require any special knowledge of Angular.

---

### Explain how custom elements works internally?
Below are the steps in an order about custom elements functionality,
1. **App registers custom element with browser:** Use the createCustomElement() function to convert a component into a class that can be registered with the browser as a custom element.
2. **App adds custom element to DOM:**  Add custom element just like a built-in HTML element directly into the DOM.
3. **Browser instantiate component based class:** Browser creates an instance of the registered class and adds it to the DOM.
4. **Instance provides content with data binding and change detection:** The content with in template is rendered using the component and DOM data.
The flow chart of the custom elements functionality would be as follows,
![CustomElement](images/customElement.png)

---

56. ### How to transfer components to custom elements?
    Transforming components to custom elements involves **two** major steps,
    1. **Build custom element class:** Angular provides the `createCustomElement()` function for converting an Angular component (along with its dependencies) to a custom element. The conversion process implements `NgElementConstructor` interface, and creates a constructor class which is used to produce a self-bootstrapping instance of Angular component.
    2. **Register element class with browser:** It uses `customElements.define()` JS function, to register the configured constructor and its associated custom-element tag with the browser's `CustomElementRegistry`. When the browser encounters the tag for the registered element, it uses the constructor to create a custom-element instance.
    The detailed structure would be as follows,
    ![CreateElement](images/createElement.png)

---

57. ### What are the mapping rules between Angular component and custom element?
    The Component properties and logic maps directly into HTML attributes and the browser's event system. Let us describe them in two steps,
    1. The createCustomElement() API parses the component input properties with corresponding attributes for the custom element. For example, component @Input('myInputProp') converted as custom element attribute `my-input-prop`.
    2. The Component outputs are dispatched as HTML Custom Events, with the name of the custom event matching the output name. For example, component @Output() valueChanged = new EventEmitter() converted as custom element with dispatch event as "valueChanged".

---

58. ### How do you define typings for custom elements?
    You can use the `NgElement` and `WithProperties` types exported from @angular/elements. Let's see how it can be applied by comparing with Angular component,
    The simple container with input property would be as below,
    ```javascript
    @Component(...)
    class MyContainer {
      @Input() message: string;
    }
    ```
    After applying types typescript validates input value and their types,
    ```javascirpt
    const container = document.createElement('my-container') as NgElement & WithProperties<{message: string}>;
    container.message = 'Welcome to Angular elements!';
    container.message = true;  // <-- ERROR: TypeScript knows this should be a string.
    container.greet = 'News';  // <-- ERROR: TypeScript knows there is no `greet` property on `container`.
    ```

---

59. ### What are dynamic components?
    Dynamic components are the components in which components location in the application is not defined at build time.i.e, They are not used in any angular template. But the component is instantiated and placed in the application at runtime.

---

60. ### What are the various kinds of directives?
    There are mainly three kinds of directives.
    1. **Components** — These are directives with a template.
    2. **Structural directives** — These directives change the DOM layout by adding and removing DOM elements.
    3. **Attribute directives** — These directives change the appearance or behavior of an element, component, or another directive.

---

61. ### How do you create directives using CLI?
    You can use CLI command `ng generate directive` to create the directive class file. It creates the source file(src/app/components/directivename.directive.ts), the respective test file(.spec.ts) and declare the directive class file in root module.

---

62. ### Give an example for attribute directives?
    Let's take simple highlighter behavior as a example directive for DOM element. You can create and apply the attribute directive using below steps,
    1. Create HighlightDirective class with the file name `src/app/highlight.directive.ts`. In this file, we need to import **Directive** from core library to apply the metadata and **ElementRef** in the directive's constructor to inject a reference to the host DOM element ,
    ```javascript
    import { Directive, ElementRef } from '@angular/core';

    @Directive({
      selector: '[appHighlight]'
    })
    export class HighlightDirective {
        constructor(el: ElementRef) {
           el.nativeElement.style.backgroundColor = 'red';
        }
    }
    ```
    2. Apply the attribute directive as an attribute to the host element(for example, <p></p>)
    ```javascript
        <p appHighlight>Highlight me!</p>
    ```
    3. Run the application to see the highlight behavior on paragraph element
    ```javascript
    ng serve
    ```

---


### What is the purpose of base href tag?
    The routing application should add <base/> element to the index.html as the first child in the <head/> tag inorder to indicate how to compose navigation URLs. If app folder is the application root then you can set the href value as below
    ```html
    <base href="/"/>
    ```

---


75. ### What is Angular Universal?
    Angular Universal is a server-side rendering module for Angular applications in various scenarios. This is a community driven project and available under @angular/platform-server package. Recently Angular Universal is integrated with Angular CLI.

---

76. ### What are different types of compilation in Angular?
    Angular offers two ways to compile your application,
    1. Just-in-Time (JIT)
    2. Ahead-of-Time (AOT)

---

77. ### What is JIT?
    Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands. i.e, the below commands used for JIT compilation,
    ```javascript
    ng build
    ng serve
    ```

---

78. ### What is AOT?
    Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. For AOT compilation, include the `--aot` option with the ng build or ng serve command as below,
    ```javascript
    ng build --aot
    ng serve --aot
    ```
    **Note:** The ng build command with the --prod meta-flag (`ng build --prod`) compiles with AOT by default.

---

### Why do we need compilation process?
The Angular components and templates cannot be understood by the browser directly. Due to that Angular applications require a compilation process before they can run in a browser. For example, In AOT compilation, both Angular HTML and TypeScript code converted into efficient JavaScript code during the build phase before browser runs it.

---

### What are the advantages with AOT?
Below are the list of AOT benefits,
1. **Faster rendering:** The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
2. **Fewer asynchronous requests:** It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
3. **Smaller Angular framework download size:** Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
4. **Detect template errors earlier:** Detects and reports template binding errors during the build step itself
5. **Better security:** It compiles HTML templates and components into JavaScript.  So there won't be any injection attacks.

---

### What are the ways to control AOT compilation?
You can control your app compilation in two ways
1. By providing template compiler options in the `tsconfig.json` file
2. By configuring Angular metadata with decorators

---

### What are the restrictions of metadata?
In Angular, You must write metadata with the following general constraints,
1. Write expression syntax with in the supported range of javascript features
2. The compiler can only reference symbols which are exported
3. Only call the functions supported by the compiler
4. Decorated and data-bound class members must be public.

---

### What are the two phases of AOT?
The AOT compiler works in three phases,
1. **Code Analysis:** The compiler records a representation of the source
2. **Code generation:** It handles the interpretation as well as places restrictions on what it interprets.
3. **Validation:** In this phase, the Angular template compiler uses the TypeScript compiler to validate the binding expressions in templates.

---

### Can I use arrow functions in AOT?
No, Arrow functions or lambda functions can’t be used to assign values to the decorator properties. For example, the following snippet is invalid:
```javascript
@Component({
  providers: [{
    provide: MyService, useFactory: () => getService()
  }]
})
```
To fix this, it has to be changed as following exported function:
```javascript
function getService(){
  return new MyService();
}

@Component({
  providers: [{
    provide: MyService, useFactory: getService
  }]
})
```
If you still use arrow function, it generates an error node in place of the function. When the compiler later interprets this node, it reports an error to turn the arrow function into an exported function.
**Note:** From Angular5 onwards, the compiler automatically performs this rewriting while emitting the .js file.

---

### What is the purpose of metadata json files?
The metadata.json file can be treated as a diagram of the overall structure of a decorator's metadata, represented as an abstract syntax tree(AST). During the analysis phase, the AOT collector scan the metadata recorded in the Angular decorators and outputs metadata information in .metadata.json files, one per .d.ts file.

---

### Can I use any javascript feature for expression syntax in AOT?
No, the AOT collector understands a subset  of (or limited) JavaScript features. If an expression uses unsupported syntax, the collector writes an error node to the .metadata.json file. Later point of time, the compiler reports an error if it needs that piece of metadata to generate the application code.

---

### What is folding?
The compiler can only resolve references to exported symbols in the metadata. Where as some of the non-exported members are folded while generating the code. i.e Folding is a process in which the collector evaluate an expression during collection and record the result in the .metadata.json instead of the original expression.
For example, the compiler couldn't refer selector reference because it is not exported
```javascript
let selector = 'app-root';
@Component({
  selector: selector
})
```
Will be folded into inline selector
```javascript
@Component({
      selector: 'app-root'
    })
```
Remember that the compiler can’t fold everything. For example, spread operator on arrays, objects created using new keywords and function calls.

---

### What are macros?
The AOT compiler supports macros in the form of functions or static methods that return an expression in a `single return expression`.
For example, let us take a below macro function,
```javascript
export function wrapInArray<T>(value: T): T[] {
  return [value];
}
```
You can use it inside metadata as an expression,
```javascript
@NgModule({
  declarations: wrapInArray(TypicalComponent)
})
export class TypicalModule {}
```
The compiler treats the macro expression as it written directly
```javascript
@NgModule({
  declarations: [TypicalComponent]
})
export class TypicalModule {}
```

---

### Give an example of few metadata errors?
Below are some of the errors encountered in metadata,
1. **Expression form not supported:** Some of the language features outside of the compiler's restricted expression syntax used in angular metadata can produce this error.
    Let's see some of these examples,
    ```javascript
    1. export class User { ... }
       const prop = typeof User; // typeof is not valid in metadata
    2. { provide: 'token', useValue: { [prop]: 'value' } }; // bracket notation is not valid in metadata
    ```
2. ** Reference to a local (non-exported) symbol:** The compiler encountered a referenced to a locally defined symbol that either wasn't exported or wasn't initialized.
    Let's take example of this error,
    ```javascript
    // ERROR
    let username: string; // neither exported nor initialized

    @Component({
      selector: 'my-component',
      template: ... ,
      providers: [
        { provide: User, useValue: username }
      ]
    })
    export class MyComponent {}
    ```
    You can fix this by either exporting or initializing the value,
    ```javascript
    export let username: string; // exported
    (or)
    let username = 'John'; // initialized
    ```
 3. **Function calls are not supported:** The compiler does not currently support function expressions or lambda functions. For example, you cannot set a provider's useFactory to an anonymous function or arrow function as below.
    ```javascript
     providers: [
        { provide: MyStrategy, useFactory: function() { ... } },
        { provide: OtherStrategy, useFactory: () => { ... } }
      ]
    ```
    You can fix this with exported function
    ```javascript
    export function myStrategy() { ... }
    export function otherStrategy() { ... }
    ... // metadata
    providers: [
        { provide: MyStrategy, useFactory: myStrategy },
        { provide: OtherStrategy, useFactory: otherStrategy },
    ```
 4. **Destructured variable or constant not supported:** The compiler does not support references to variables assigned by destructuring.
    For example, you cannot write something like this:
    ```javascript
    import { user } from './user';

    // destructured assignment to name and age
    const {name, age} = user;
    ... //metadata
    providers: [
        {provide: Name, useValue: name},
        {provide: Age, useValue: age},
      ]
    ```
    You can fix this by non-destructured values
    ```javscript
    import { user } from './user';
    ... //metadata
    providers: [
        {provide: Name, useValue: user.name},
        {provide: Age, useValue: user.age},
      ]
    ```

---

90. ### What is metadata rewriting?
    Metadata rewriting is the process in which the compiler converts the expression initializing the fields such as useClass, useValue, useFactory, and data into an exported variable, which replaces the expression. Remember that the compiler does this rewriting during the emit of the .js file but not in definition files( .d.ts file).

---

### How do you provide configuration inheritance?
Angular Compiler supports configuration inheritance through extends in the tsconfig.json on angularCompilerOptions. i.e, The configuration from the base file(for example, tsconfig.base.json) are loaded first, then overridden by those in the inheriting config file.
```javascript
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "experimentalDecorators": true,
    ...
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "preserveWhitespaces": true,
    ...
  }
}
```

---

### How do you specify angular template compiler options?
The angular template compiler options are specified as members of the **angularCompilerOptions** object in the tsconfig.json file. These options will be specified adjecent to typescript compiler options.
```javascript
{
  "compilerOptions": {
    "experimentalDecorators": true,
              ...
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "preserveWhitespaces": true,
              ...
  }
}
```

---

### How do you enable binding expression validation?
You can enable binding expression validation explicitly by adding the compiler option **fullTemplateTypeCheck** in the "angularCompilerOptions" of the project's tsconfig.json. It produces error messages when a type error is detected in a template binding expression.
For example, consider the following component:
```javascript
@Component({
  selector: 'my-component',
  template: '{{user.contacts.email}}'
})
class MyComponent {
  user?: User;
}
```
This will produce the following error:
```javascript
my.component.ts.MyComponent.html(1,1): : Property 'contacts' does not exist on type 'User'. Did you mean 'contact'?
```

---

94. ### What is the purpose of any type cast function?
    You can disable binding expression type checking using $any() type cast function(by surrounding the expression). In the following example, the error Property contacts does not exist is suppressed by casting user to the any type.
    ```javascript
      template: '{{$any(user).contacts.email}}'
    ```
    The $any() cast function also works with this to allow access to undeclared members of the component.
    ```javascript
       template: '{{$any(this).contacts.email}}'
    ```

---

95. ### What is Non null type assertion operator?
    You can use the non-null type assertion operator to suppress the Object is possibly 'undefined' error. In the following example, the user and contact properties are always set together, implying that contact is always non-null if user is non-null. The error is suppressed in the example by using contact!.email.
    ```javascript
    @Component({
      selector: 'my-component',
      template: '<span *ngIf="user"> {{user.name}} contacted through {{contact!.email}} </span>'
    })
    class MyComponent {
      user?: User;
      contact?: Contact;

      setData(user: User, contact: Contact) {
        this.user = user;
        this.contact = contact;
      }
    }
    ```

---

96. ### What is type narrowing?
    The expression used in an ngIf directive is used to narrow type unions in the Angular template compiler similar to if expression in typescript. So *ngIf allows the typeScript compiler to infer that the data used in the binding expression will never be undefined.
    ```javascript
    @Component({
      selector: 'my-component',
      template: '<span *ngIf="user"> {{user.contact.email}} </span>'
    })
    class MyComponent {
      user?: User;
    }
    ```

---

97. ### How do you describe various dependencies in angular application?
    The dependencies section of package.json with in an angular application can be divided as follow,
    1. **Angular packages:** Angular core and optional modules; their package names begin @angular/.
    2. **Support packages:** Third-party libraries that must be present for Angular apps to run.
    3. **Polyfill packages:** Polyfills plug gaps in a browser's JavaScript implementation.

---

98. ### What is zone?
    A Zone is an execution context that persists across async tasks. Angular relies on zone.js to run Angular's change detection processes when native JavaScript operations raise events

---

99. ### What is the purpose of common module?
    The commonly-needed services, pipes, and directives provided by @angular/common module. Apart from these HttpClientModule is available under @angular/common/http.

---

### What is codelyzer?
 Codelyzer provides set of tslint rules for static code analysis of Angular TypeScript projects. ou can run the static code analyzer over web apps, NativeScript, Ionic etc. Angular CLI has support for this and it can be use as below,
 ```bash
 ng new codelyzer
 ng lint
 ```

---





107. ### How to inject the dynamic script in angular?

     Using DomSanitizer we can inject the dynamic Html,Style,Script,Url.

     ```
     import { Component, OnInit } from '@angular/core';
     import { DomSanitizer } from '@angular/platform-browser';
     @Component({
        selector: 'my-app',
        template: `
            <div [innerHtml]="htmlSnippet"></div>
        `,
     })
     export class App {
            constructor(protected sanitizer: DomSanitizer) {}
            htmlSnippet: string = this.sanitizer.bypassSecurityTrustScript("<script>safeCode()</script>");
        }
     ```

---

 108. ### What is a service worker and its role in Angular?
      A service worker is a script that runs in the web browser and manages caching for an application. Starting from 5.0.0 version, Angular ships with a service worker implementation. Angular service worker is designed to optimize the end user experience of using an application over a slow or unreliable network connection, while also minimizing the risks of serving outdated content.

---

 109. ### What are the design goals of service workers?
      Below are the list of design goals of Angular's service workers,
      1. It caches an application just like installing a native application
      2. A running application continues to run with the same version of all files without any incompatible files
      3. When you refresh the application, it loads the latest fully cached version
      4. When changes are published then it immediately updates in the background
      5. Service workers saves the bandwidth by downloading the resources only when they changed.

---

 110. ### What are the differences between AngularJS and Angular with respect to dependency injection?
      Dependency injection is a common component in both AngularJS and Angular, but there are some key differences between the two frameworks in how it actually works.
    | AngularJS | Angular |
    |---- | ---------
    | Dependency injection tokens are always strings  | Tokens can have different types. They are often classes and sometimes can be strings. |
    | There is exactly one injector even though it is a multi-module applications | There is a tree hierarchy of injectors, with a root injector and an additional injector for each component. |

---

 111. ### What is Angular Ivy?
      Angular Ivy is a new rendering engine for Angular. You can choose to opt in a preview version of Ivy from Angular version 8.
      1. You can enable ivy in a new project by using the --enable-ivy flag with the ng new command

      ```bash
      ng new ivy-demo-app --enable-ivy
      ```
      2. You can add it to an existing project by adding `enableIvy` option in the `angularCompilerOptions` in your project's `tsconfig.app.json`.

      ```javascript
      {
        "compilerOptions": { ... },
        "angularCompilerOptions": {
          "enableIvy": true
        }
      }
      ```

---

 112. ### What are the features included in ivy preview?
      You can expect below features with Ivy preview,
      1. Generated code that is easier to read and debug at runtime
      2. Faster re-build time
      3. Improved payload size
      4. Improved template type checking

---

 113. ### Can I use AOT compilation with Ivy?
      Yes, it is a recommended configuration. Also, AOT compilation with Ivy is faster. So you need set the default build options(with in angular.json) for your project to always use AOT compilation.
      ```javascript
      {
        "projects": {
          "my-project": {
            "architect": {
              "build": {
                "options": {
                  ...
                  "aot": true,
                }
              }
            }
          }
        }
      }
      ```

---

 114. ### What is Angular Language Service?
      The Angular Language Service is a way to get completions, errors, hints, and navigation inside your Angular templates whether they are external in an HTML file or embedded in annotations/decorators in a string. It has the ability to autodetect that you are opening an Angular file, reads your `tsconfig.json` file, finds all the templates you have in your application, and then provides all the language services.

---

 115. ### How do you install angular language service in the project?
      You can install Angular Language Service in your project with the following npm command
      ```javascript
      npm install --save-dev @angular/language-service
      ```
      After that add the following to the "compilerOptions" section of your project's tsconfig.json
      ```javascript
      "plugins": [
          {"name": "@angular/language-service"}
      ]
      ```
      **Note:** The completion and diagnostic services works for .ts files only. You need to use custom plugins for supporting HTML files.

---

 116. ### Is there any editor support for Angular Language Service?
      Yes, Angular Language Service is currently available for Visual Studio Code and WebStorm IDEs. You need to install angular language service using an extension and devDependency respectively. In sublime editor, you need to install typescript which has has a language service plugin model.

---

### Explain the features provided by Angular Language Service?
Basically there are 3 main features provided by Angular Language Service,

1. **Autocompletion:** Autocompletion can speed up your development time by providing you with contextual possibilities and hints as you type with in an interpolation and elements.

![ScreenShot](images/language-completion.gif)

2. **Error checking:** It can also warn you of mistakes in your code.

![ScreenShot](images/language-error.gif)

3. **Navigation:** Navigation allows you to hover a component, directive, module and then click and press F12 to go directly to its definition.

![ScreenShot](images/language-navigation.gif)

---

### How do you add web workers in your application?
You can add web worker anywhere in your application. For example, If the file that contains your expensive computation is `src/app/app.component.ts`, you can add a Web Worker using `ng generate web-worker app` command which will create `src/app/app.worker.ts` web worker file. This command will perform below actions,
1. Configure your project to use Web Workers
2. Adds app.worker.ts to receive messages
```javascript
addEventListener('message', ({ data }) => {
const response = `worker response to ${data}`;
postMessage(response);
});
```
3. The component `app.component.ts` file updated with web worker file
```javascript
if (typeof Worker !== 'undefined') {
// Create a new
const worker = new Worker('./app.worker', { type: 'module' });
worker.onmessage = ({ data }) => {
  console.log('page got message: $\{data\}');
};
worker.postMessage('hello');
} else {
// Web Workers are not supported in this environment.
}
```
**Note:** You may need to refactor your initial scaffolding web worker code for sending messages to and from.

---

### What are the limitations with web workers?
You need to remember two important things when using Web Workers in Angular projects,
1. Some environments or platforms(like @angular/platform-server) used in Server-side Rendering, don't support Web Workers. In this case you need to provide a fallback mechanism to perform the computations to work in this environments.
2. Running Angular in web worker using `@angular/platform-webworker` is not yet supported in Angular CLI.

---

### What is Angular CLI Builder?
In Angular8, the CLI Builder API is stable and available to developers who want to customize the `Angular CLI` by adding or modifying commands. For example, you could supply a builder to perform an entirely new task, or to change which third-party tool is used by an existing command.

---

### What is a builder?
A builder function ia a function that uses the `Architect API` to perform a complex process such as "build" or "test". The builder code is defined in an npm package. For example, BrowserBuilder runs a webpack build for a browser target and KarmaBuilder starts the Karma server and runs a webpack build for unit tests.

---

### How do you invoke a builder?
The Angular CLI command `ng run` is used to invoke a builder with a specific target configuration. The workspace configuration file, `angular.json`, contains default configurations for built-in builders.

---

### How do you create app shell in Angular?
An App shell is a way to render a portion of your application via a route at build time. This is useful to first paint of your application that appears quickly because the browser can render static HTML and CSS without the need to initialize JavaScript. You can achieve this using Angular CLI which generates an app shell for running server-side of your app.
```javascript
ng generate appShell [options] (or)
ng g appShell [options]
```

---

### What are the case types in Angular?
Angular uses capitalization conventions to distinguish the names of various types. Angular follows the list of the below case types.

1. **camelCase :** Symbols, properties, methods, pipe names, non-component directive selectors, constants uses lowercase on the first letter of the item. For example, "selectedUser"
2. **UpperCamelCase (or PascalCase):** Class names, including classes that define components, interfaces, NgModules, directives, and pipes uses uppercase on the first letter of the item.
3. **dash-case (or "kebab-case"):** The descriptive part of file names, component selectors uses dashes between the words. For example, "app-user-list".
4. **UPPER_UNDERSCORE_CASE:** All constants uses capital letters connected with underscores. For example, "NUMBER_OF_USERS".

---

 ### What are the class decorators in Angular?
A class decorator is a decorator that appears immediately before a class definition, which declares the class to be of the given type, and provides metadata suitable to the type
The following list of decorators comes under class decorators,
1. @Component()
2. @Directive()
3. @Pipe()
4. @Injectable()
5. @NgModule()

---

### What are class field decorators?
The class field decorators are the statements declared immediately before a field in a class definition that defines the type of that field. Some of the examples are: @input and @output,
```javascript
@Input() myProperty;
@Output() myEvent = new EventEmitter();
```

---

### What is declarable in Angular?
Declarable is a class type that you can add to the declarations list of an NgModule. The class types such as components, directives, and pipes comes can be declared in the module.

---

### What are the restrictions on declarable classes?
Below classes shouldn't be declared,
1. A class that's already declared in another NgModule
2. Ngmodule classes
3. Service classes
4. Helper classes

---

 ### What is a DI token?
A DI token is a lookup token associated with a dependency provider in dependency injection system. The injector maintains an internal token-provider map that it references when asked for a dependency and the DI token is the key to the map. Let's take example of DI Token usage,
```javascript
const BASE_URL = new InjectionToken<string>('BaseUrl');
const injector =
 Injector.create({providers: [{provide: BASE_URL, useValue: 'http://some-domain.com'}]});
const url = injector.get(BASE_URL);
```

---

 ### What is Angular DSL?
  A domain-specific language (DSL) is a computer language specialized to a particular application domain. Angular has its own Domain Specific Language (DSL) which allows us to write Angular specific html-like syntax on top of normal html. It has its own compiler that compiles this syntax to html that the browser can understand. This DSL is defined in NgModules such as animations, forms, and routing and navigation.
  Basically you will see 3 main syntax in Angular DSL.
  1. `()`: Used for Output and DOM events.
  2. `[]`: Used for Input and specific DOM element attributes.
  3. `*`: Structural directives(*ngFor or *ngIf) will affect/change the DOM structure.

---



### What is Bazel tool?
Bazel is a powerful build tool developed and massively used by Google and it can keep track of the dependencies between different packages and build targets. In Angular8, you can build your CLI application with Bazel.
**Note:** The Angular framework itself is built with Bazel.

---

### What are the advantages of Bazel tool?
Below are the list of key advantages of Bazel tool,
1. It creates the possibility of building your back-ends and front-ends with the same tool
2. The incremental build and tests
3. It creates the possibility to have remote builds and cache on a build farm.

---

### How do you use Bazel with Angular CLI?
 The @angular/bazel package provides a builder that allows Angular CLI to use Bazel as the build tool.
 1. **Use in an existing applciation:** Add @angular/bazel using CLI
 ```javascript
 ng add @angular/bazel
 ```
 2. **Use in a new application:** Install the package and create the application with collection option
 ```javascript
 npm install -g @angular/bazel
 ng new --collection=@angular/bazel
 ```
 When you use ng build and ng serve commands, Bazel is used behind the scenes and outputs the results in dist/bin folder.

---

### How do you run Bazel directly?
 Sometimes you may want to bypass the Angular CLI builder and run Bazel directly using Bazel CLI. You can install it globally using @bazel/bazel npm package. i.e, Bazel CLI is available under @bazel/bazel package. After you can apply the below common commands,
 ```javascrippt
 bazel build [targets] // Compile the default output artifacts of the given targets.
 bazel test [targets] // Run the tests with *_test targets found in the pattern.
 bazel run [target]: Compile the program represented by target and then run it.
 ```

---
### What is platform in Angular?
 A platform is the context in which an Angular application runs. The most common platform for Angular applications is a web browser, but it can also be an operating system for a mobile device, or a web server. The runtime-platform is provided by the @angular/platform-* packages and these packages allow applications that make use of `@angular/core` and `@angular/common` to execute in different environments.
 i.e, Angular can be used as platform-independent framework in different environments, For example,
 1. While running in the browser, it uses `platform-browser` package.
 2. When SSR(server-side rendering ) is used, it uses `platform-server` package for providing web server implementation.

---

### What happens if I import the same module twice?
 If multiple modules imports the same module then angular evaluates it only once (When it encounters the module first time). It follows this condition even the module appears at any level in a hierarchy of imported NgModules.

---

### How do you select an element with in a component template?
 You can use `@ViewChild` directive to access elements in the view directly. Let's take input element with a reference,
 ```html
 <input #uname>
 ```
 and define view child directive and access it in ngAfterViewInit lifecycle hook
 ```javascript
 @ViewChild('uname') input;

 ngAfterViewInit() {
   console.log(this.input.nativeElement.value);
 }
 ```

---





### What is the purpose of differential loading in CLI?
 From Angular8 release onwards, the applications are built using differential loading strategy from CLI to build two separate bundles as part of your deployed application.
 1. The first build contains ES2015 syntax which takes the advantage of built-in support in modern browsers, ships less polyfills, and results in a smaller bundle size.
 2. The second build contains old ES5 syntax to support older browsers with all necessary polyfills. But this results in a larger bundle size.

 **Note:** This strategy is used to support multiple browsers but it only load the code that the browser needs.

---

### Is Angular supports dynamic imports?
 Yes, Angular 8 supports dynamic imports in router configuration. i.e, You can use the import statement for lazy loading the module using `loadChildren` method and it will be understood by the IDEs(VSCode and WebStorm), webpack, etc.
 Previously, you have been written as below to lazily load the feature module. By mistake, if you have typo in the module name it still accepts the string and throws an error during build time.
 ```javascript
 {path: ‘user’, loadChildren: ‘./users/user.module#UserModulee’},
 ```
 This problem is resolved by using dynamic imports and IDEs are able to find it during compile time itself.
 ```javascript
 {path: ‘user’, loadChildren: () => import(‘./users/user.module’).then(m => m.UserModule)};
 ```

---

### What is lazy loading?
 Lazy loading is one of the most useful concepts of Angular Routing. It helps us to download the web pages in chunks instead of downloading everything in a big bundle. It is used for lazy loading by asynchronously loading the feature module for routing whenever required using the property `loadChildren`. Let's load both `Customer` and `Order` feature modules lazily as below,
 ```javascript
 const routes: Routes = [
   {
     path: 'customers',
     loadChildren: () => import('./customers/customers.module').then(module => module.CustomersModule)
   },
   {
     path: 'orders',
     loadChildren: () => import('./orders/orders.module').then(module => module.OrdersModule)
   },
   {
     path: '',
     redirectTo: '',
     pathMatch: 'full'
   }
 ];
 ```

---

### What are workspace APIs?
 Angular 8.0 release introduces Workspace APIs to make it easier for developers to read and modify the angular.json file instead of manually modifying it. Currently, the only supported storage3 format is the JSON-based format used by the Angular CLI. You can enable or add optimization option for build target as below,
 ```javascript
 import { NodeJsSyncHost } from '@angular-devkit/core/node';
 import { workspaces } from '@angular-devkit/core';

 async function addBuildTargetOption() {
     const host = workspaces.createWorkspaceHost(new NodeJsSyncHost());
     const workspace = await workspaces.readWorkspace('path/to/workspace/directory/', host);

     const project = workspace.projects.get('my-app');
     if (!project) {
       throw new Error('my-app does not exist');
     }

     const buildTarget = project.targets.get('build');
     if (!buildTarget) {
       throw new Error('build target does not exist');
     }

     buildTarget.options.optimization = true;

     await workspaces.writeWorkspace(workspace, host);
 }

 addBuildTargetOption();
 ```

---
### How do you upgrade angular version?
The Angular upgrade is quite easier using Angular CLI `ng update` command as mentioned below. For example, if you upgrade from Angular 7 to 8 then your lazy loaded route imports will be migrated to the new import syntax automatically.
```bash
$ ng update @angular/cli @angular/core
```

---
### What is Angular Material?
 Angular Material is a collection of Material Design components for Angular framework following the Material Design spec. You can apply Material Design very easily using Angular Material. The installation can be done through npm or yarn,
 ```bash
 npm install --save @angular/material @angular/cdk @angular/animations
 (OR)
 yarn add @angular/material @angular/cdk @angular/animations
 ```
 It supports the most recent two versions of all major browsers. The latest version of Angular material is 8.1.1

---

### How do you upgrade location service of angularjs?
 If you are using `$location` service in your old AngularJS application, now you can use `LocationUpgradeModule`(unified location service) which puts the responsibilities of `$location` service to `Location` service in Angular. Let's add this module to `AppModule` as below,
 ```javascript
 // Other imports ...
 import { LocationUpgradeModule } from '@angular/common/upgrade';

 @NgModule({
   imports: [
     // Other NgModule imports...
     LocationUpgradeModule.config()
   ]
 })
 export class AppModule {}
 ```

---

### What is NgUpgrade?
NgUpgrade is a library put together by the Angular team, which you can use in your applications to mix and match AngularJS and Angular components and bridge the AngularJS and Angular dependency injection systems.

---

### How do you test Angular application using CLI?
 Angular CLI downloads and install everything needed with the Jasmine Test framework. You just need to run `ng test` to see the test results. By default this command builds the app in watch mode, and launches the `Karma test runner`. The output of test results would be as below,
 ```bash
 10% building modules 1/1 modules 0 active
 ...INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
 ...INFO [launcher]: Launching browser Chrome ...
 ...INFO [launcher]: Starting browser Chrome
 ...INFO [Chrome ...]: Connected on socket ...
 Chrome ...: Executed 3 of 3 SUCCESS (0.135 secs / 0.205 secs)
 ```
 **Note:** A chrome browser also opens and displays the test output in the "Jasmine HTML Reporter".

---

### How to use polyfills in Angular application?
 The Angular CLI provides support for polyfills officially. When you create a new project with the ng new command, a `src/polyfills.ts` configuration file is created as part of your project folder. This file includes the mandatory and many of the optional polyfills as JavaScript import statements. Let's categorize the polyfills,
 1. **Mandatory polyfills:** These are installed automatically when you create your project with ng new command and the respective import statements enabled in 'src/polyfills.ts' file.
 2. **Optional polyfills:** You need to install its npm package and then create import statement in 'src/polyfills.ts' file.
    For example, first you need to install below npm package for adding web animations (optional) polyfill.
    ```bash
     npm install --save web-animations-js
    ```
    and create import statement in polyfill file.
    ```javascript
    import 'web-animations-js';
    ```

---

### What are the ways to trigger change detection in Angular?
 You can inject either ApplicationRef or NgZone, or ChangeDetectorRef into your component and apply below specific methods to trigger change detection in Angular. i.e, There are 3 possible ways,
 1. ApplicationRef.tick(): Invoke this method to explicitly process change detection and its side-effects. It check the full component tree.
 2. NgZone.run(callback): It evaluate the callback function inside the Angular zone.
 3. ChangeDetectorRef.detectChanges(): It detects only the components and it's children.

---

### What are the differences of various versions of Angular?
There are different versions of Angular framework. Let's see the features of all the various versions,

1. Angular 1
    • Angular 1 (AngularJS) is the first angular framework released in the year 2010.
    • AngularJS is not built for mobile devices.
    • It is based on controllers with MVC architecture.
2. Angular 2
    • Angular 2 was released in the year 2016. Angular 2 is a complete rewrite of Angular1 version.
    • The performance issues that Angular 1 version had has been addressed in Angular 2 version.
    • Angular 2 is built from scratch for mobile devices unlike Angular 1 version.
    • Angular 2 is components based.
3. Angular 3
The following are the different package versions in Angular 2.
    • @angular/core v2.3.0
    • @angular/compiler v2.3.0
    • @angular/http v2.3.0
    • @angular/router v3.3.0
The router package is already versioned 3 so to avoid confusion switched to Angular 4 version and skipped 3 version.
4. Angular 4
    • The compiler generated code file size in AOT mode is very much reduced.
    • With Angular 4 the production bundles size is reduced by hundreds of KB’s.
    • Animation features are removed from angular/core and formed as a separate package.
    • Supports Typescript 2.1 and 2.2.
5. Angular 5
    • Angular 5 makes angular faster. It improved the loading time and execution time.
    • Shipped with new build optimizer.
    • Supports Typescript 2.5.
6. Angular 6
    • It is released in May 2018.
    • Includes Angular Command Line Interface (CLI), Component Development KIT (CDK), Angular Material Package.
7. Angular 7
    • It is released in October 2018.
    • TypeScript 3.1
    • RxJS 6.3
    • New Angular CLI
    • CLI Prompts capability provide an ability to ask questions to the user before they run. It is like interactive dialog between the           user and the CLI
    • With the improved CLI Prompts capability, it helps developers to make the decision. New ng commands ask users for routing and CSS           styles types(SCSS) and ng add @angular/material asks for themes and gestures or animations.

---

### What are the security principles in angular?
1.	You should avoid direct use of the DOM APIs.
2.  You should enable Content Security Policy (CSP) and configure your web server to return appropriate CSP HTTP headers.
3.  You should Use the offline template compiler.
4.  You should Use Server Side XSS protection.
5.  You should Use DOM Sanitizer.
6.  You should Preventing CSRF or XSRF attacks. 

---

### What is the reason to deprecate Web Tracing Framework?
Angular has supported the integration with the Web Tracing Framework (WTF) for the purpose of performance testing. Since it is not well maintained and failed in majority of the applications, the support is deprecated in latest releases.

---

### What is the reason to deprecate web worker packages?
Both @angular/platform-webworker and @angular/platform-webworker-dynamic are officially deprecated, the Angular team realized it's not good practice to run the Angular application on Web worker
---

### How do you find angular CLI version?
     Angular CLI provides it's installed version using below different ways using ng command
     ```bash
     ng v
     ng version
     ng -v
     ng --version
     ```
     and the output would be as below,
     ```bash
     Angular CLI: 1.6.3
     Node: 8.11.3
     OS: darwin x64
     Angular:
     ...
     ```

### What is the browser support for Angular?
 Angular supports most recent browsers which includes both desktop and mobile browsers.

 | Browser | Version |
 |---- | --------- |
 | Chrome | latest |
 | Firefox | latest |
 | Edge | 2 most recent major versions |
 | IE | 11, 10, 9 (Compatibility mode is not supported) |
 | Safari | 2 most recent major versions |
 | IE Mobile | 11 |
 | iOS | 2 most recent major versions |
 | Android | 7.0, 6.0, 5.0, 5.1, 4.4 |


### What is schematic?
    It's a scaffolding library that defines how to generate or transform a programming project by creating, modifying, refactoring, or moving files and code. It defines rules that operate on a virtual file system called a tree.
---

### What is rule in Schematics?
     In schematics world, it's a function that operates on a file tree to create, delete, or modify files in a specific manner.
---

### What is Schematics CLI?
     Schematics come with their own command-line tool known as Schematics CLI. It is used to install the schematics executable, which you can use to create a new schematics collection with an initial named schematic. The collection folder is a workspace for schematics. You can also use the schematics command to add a new schematic to an existing collection, or extend an existing schematic. You can install Schematic CLI globally as below,
     ```bash
     npm install -g @angular-devkit/schematics-cli
     ```
     
