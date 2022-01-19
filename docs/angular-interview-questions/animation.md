---
id: animation
title: Angular Animation Interview Questions
sidebar_label: Animation
---

### What is angular animation?
Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are **@angular/animations** and **@angular/platform-browser** and these dependencies are automatically added to your project when you create a project using Angular CLI.

---

### What are the steps to use animation module?
 You need to follow below steps to implement animation in your angular project,

 1. **Enabling the animations module:** Import BrowserAnimationsModule to add animation capabilities into your Angular root application module(for example, src/app/app.module.ts).
 ```javascript
 import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 @NgModule({
   imports: [
     BrowserModule,
     BrowserAnimationsModule
   ],
   declarations: [ ],
   bootstrap: [ ]
 })
 export class AppModule { }
 ```
 2. **Importing animation functions into component files:** Import required animation functions from @angular/animations in component files(for example, src/app/app.component.ts).
 ```javascript
 import {
   trigger,
   state,
   style,
   animate,
   transition,
   // ...
 } from '@angular/animations';
 ```
 3. **Adding the animation metadata property:** add a metadata property called animations: within the @Component() decorator in component files(for example, src/app/app.component.ts)
 ```javascript
 @Component({
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css'],
   animations: [
     // animation triggers go here
   ]
 })
 ```

---

### What is State function?
Angular's state() function is used to define different states to call at the end of each transition. This function takes two arguments: a unique name like open or closed and a style() function.
For example, you can write a open state function
```javascript
state('open', style({
height: '300px',
opacity: 0.5,
backgroundColor: 'blue'
})),
```

---

### What is Style function?
The style function is used to define a set of styles to associate with a given state name. You need to use it along with state() function to set CSS style attributes. For example, in the close state, the button has a height of 100 pixels, an opacity of 0.8, and a background color of green.
```javascript
state('close', style({
height: '100px',
opacity: 0.8,
backgroundColor: 'green'
})),
```
**Note:** The style attributes must be in camelCase.

---

### What is the purpose of animate function?
 Angular Animations are a powerful way to implement sophisticated and compelling animations for your Angular single page web application.

```javascript
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
selector: 'app-animate',
templateUrl: `<div [@changeState]="currentState" class="myblock mx-auto"></div>`,
styleUrls: `.myblock {
    background-color: green;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    margin: 5rem;
    }`,
animations: [
    trigger('changeState', [
    state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
    })),
    state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
    })),
    transition('*=>state1', animate('300ms')),
    transition('*=>state2', animate('2000ms'))
    ])
]
})
export class AnimateComponent implements OnInit {

    @Input() currentState;

    constructor() { }

    ngOnInit() {
    }
}
```

---
### What is transition function?
 The animation transition function is used to specify the changes that occur between one state and another over a period of time. It accepts two arguments: the first argument accepts an expression that defines the direction between two transition states, and the second argument accepts an animate() function.
 Let's take an example state transition from open to closed with an half second transition between states.

 ```javascript
 transition('open => closed', [
   animate('500ms')
 ]),
 ```

---
