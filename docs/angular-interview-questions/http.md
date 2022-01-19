---
id: http
title: Angular Http Interview Questions
sidebar_label: Http
---

### What is HttpClient and its benefits?
Most of the Front-end applications communicate with backend services over HTTP protocol using either XMLHttpRequest interface or the fetch() API. Angular provides a simplified client HTTP API known as **HttpClient** which is based on top of XMLHttpRequest interface. This client is avaialble from `@angular/common/http` package.
You can import in your root module as below,
```javascript
import { HttpClientModule } from '@angular/common/http';
```

The major advantages of HttpClient can be listed as below,
1. Contains testability features
2. Provides typed request and response objects
3. Intercept request and response
4. Supports Observalbe APIs
5. Supports streamlined error handling

---


### Explain on how to use HttpClient with an example?
Below are the steps need to be followed for the usage of HttpClient.
1. Import HttpClient into root module:
```javascript
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  ......
  })
 export class AppModule {}
```
2. Inject the HttpClient into the application:
Let's create a userProfileService(userprofile.service.ts) as an example. It also defines get method of HttpClient
```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const userProfileUrl: string = 'assets/data/profile.json';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get(this.userProfileUrl);
  }
}
```
3. Create a component for subscribing service:
Let's create a component called UserProfileComponent(userprofile.component.ts) which inject UserProfileService and invokes the service method,
```javascript
fetchUserProfile() {
  this.userProfileService.getUserProfile()
    .subscribe((data: User) => this.user = {
        id: data['userId'],
        name: data['firstName'],
        city:  data['city']
    });
}
```
Since the above service method returns an Observable which needs to be subscribed in the component.

---

### How do you pass headers for HTTP client?
 You can directly pass object map for http client or create HttpHeaders class to supply the headers.
 ```javascript
 constructor(private _http: HttpClient) {}
 this._http.get('someUrl',{
    headers: {'header1':'value1','header2':'value2'}
 });

 (or)
 let headers = new HttpHeaders().set('header1', headerValue1); // create header object
 headers = headers.append('header2', headerValue2); // add a new header, creating a new object
 headers = headers.append('header3', headerValue3); // add another header

 let params = new HttpParams().set('param1', value1); // create params object
 params = params.append('param2', value2); // add a new param, creating a new object
 params = params.append('param3', value3); // add another param

 return this._http.get<any[]>('someUrl', { headers: headers, params: params })
 ```

---
