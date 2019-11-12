---
id: microservice
title: Java Microservice Interview Questions
sidebar_label: Microservice
---

### What is Microservice Architecture?

Microservices is an architectural style which structures and application as a collection of loosely coupled, independently maintainable, testable and deployable services which are organized around business capabilities. 

If you have a business focus and you want to solve a use case or a problem efficiently without the boundaries of technology, want to scale an independent service infinitely, highly available stateless services which are easy to maintainable and managed as well as independently testable then we would go ahead and implement Microservice architecture.

### What is Service Discovery?

In a cloud environment where docker images are dynamically deployed on any machine or IP + Port combination, it becomes difficult for dependent services to update at runtime. Service discovery is created due to that purpose only.

Service discovery is one of the services running under microservices architecture, which registers entries of all of the services running under the service mesh. All of the actions are available through the REST API. So whenever the services are up and running, the individual services registers themselves to service discovery service and service discovery services maintains heartbeat to make sure that those services are alive. That also serves the purpose of monitoring services as well. Service discovery also helps in distributing requests across services deployed in a fair manner.

---

### What are the advantages and disadvantages of microservices?

- Microservices Advantages
    - Smaller code base is easy to maintain.
    - Easy to scale as individual component.
    - Technology diversity i.e. we can mix libraries, databases, frameworks etc.
    - Fault isolation i.e. a process failure should not bring whole system down.
    - Better support for smaller and parallel team.
    - Independent deployment
    - Deployment time reduce
- Microservices Disadvantages
    - Difficult to achieve strong consistency across services
    - ACID transactions do not span multiple processes.
    - Distributed System so hard to debug and trace the issues
    - Greater need for end to end testing
    - Required cultural changes in across teams like Dev and Ops working together even in same team.

---

### What do you mean by Domain Driver Design?

### What is Bounded Context?

Bounded Context is a central pattern in Domain-Driven Design. In Bounded Context, everything related to the domain is visible within context internally but opaque to other bounded contexts. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships.

Monolithic Conceptual Model Problem 

A single conceptual model for the entire organization is very tricky to deal with. The only benefit of such a unified model is that integration is easy across the whole enterprise, but the drawbacks are many, for example:

- At first, it's very hard to build a single model that works for the entire organization.
- It's hard for others (teams) to understand it.
- It's very difficult to change such a shared model to accommodate the new business requirements. The impact of such a change will be widespread across team boundaries.
- Any large enterprise needs a model that is either very large or abstract.
- Meaning of a single word may be different in different departments of an organization, so it may be really difficult to come up with a single unified model. Such a model, even if created, will lead to a lot of confusion across the teams.


### What is Compensating transaction or Saga Pattern?


### What is Circuit breaker pattern?

---

### What are the deployment strategy you can think in Microservice Deployment?

- Multiple Service Instance Per Host.
- Single Service Instance Per Host
    - Single Instance Per VM
    - Single Instance Per Container
- Serverless Deployment


### What are the testing technique available to you?

- Service Component Test
- Consumer-driven contract test
- Consumer-side contract test

### What do you mean by Decompose by Subdomain?

Define services corresponding to Domain-Driven Design (DDD) subdomains. DDD refers to the application’s problem space - the business - as the domain. A domain is consists of multiple subdomains. Each subdomain corresponds to a different part of the business.

Subdomains can be classified as follows:

- **Core -** key differentiators for the business and the most valuable part of the application
- **Supporting -** related to what the business does but not a differentiator. These can be implemented in-house or outsourced.
- **Generic -** not specific to the business and are ideally implemented using off the shelf software
    
### What do you mean by Decompose by Business Capability?
