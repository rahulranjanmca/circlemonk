---
id: cloud-aws
title: Java Spring Cloud AWS Interview Questions
sidebar_label: AWS
---

### What is the Dependency You need for Spring Cloud Server?


---

### What do you mean by Config First Bootstrap?

The default behavior for any application that has the Spring Cloud Config Client on the classpath is as follows: When a config client starts, it binds to the Config Server (through the spring.cloud.config.uri bootstrap configuration property) and initializes Spring Environment with remote property sources.

The net result of this behavior is that all client applications that want to consume the Config Server need a bootstrap.yml (or an environment variable) with the server address set in spring.cloud.config.uri (it defaults to "http://localhost:8888").


### What do you mean by Discovery First Bootstrap?


