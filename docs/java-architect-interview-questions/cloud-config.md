---
id: cloud-config
title: Spring Cloud Config Interview Questions
sidebar_label: Cloud Config
---

### How do you create config server?

You need to include `spring-cloud-config-server` in you build. And then in your application.yml

```yaml
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/spring-cloud-samples/config-repo
          basedir: target/config

```

### What do you mean by Config First Bootstrap?

The default behavior for any application that has the Spring Cloud Config Client on the classpath is as follows: When a config client starts, it binds to the Config Server (through the spring.cloud.config.uri bootstrap configuration property) and initializes Spring Environment with remote property sources.

The net result of this behavior is that all client applications that want to consume the Config Server need a bootstrap.yml (or an environment variable) with the server address set in spring.cloud.config.uri (it defaults to "http://localhost:8888").


### What do you mean by Discovery First Bootstrap?


### How does Push Notifications and Spring Cloud Bus work?

As you include `spring-cloud-config-monitor` dependency `/monitor` endpoint gets enabled. You can add a webhook pointing to this domain, so that config server properties gets refreshed.

Include the `spring-cloud-bus` in you client project. `RefreshRemoteApplicationEvent` is trasmited with you server and client and client props gets refreshed.

### How does client refreshes the property?

When ever you include a `spring-cloud-cofig` 


