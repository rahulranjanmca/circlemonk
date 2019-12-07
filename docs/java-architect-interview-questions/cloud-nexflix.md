---
id: cloud-netflix
title: Java Microservice Interview Questions
sidebar_label: Cloud Netflix
---

### How to create Eureka Server?
1. Add the dependency of `spring-cloud-starter-netflix-eureka-server`.
1. Use @EnableEurekaServer
    ```java
    @SpringBootApplication
    @EnableEurekaServer
    public class Application {
    
        public static void main(String[] args) {
            new SpringApplicationBuilder(Application.class).web(true).run(args);
        }
    
    }
    ```
1. 
    - Standalone Mode
        ```yaml
        server:
          port: 8761
        
        eureka:
          instance:
            hostname: localhost
          client:
            registerWithEureka: false
            fetchRegistry: false
            serviceUrl:
              defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
                ```
            
    - Peer Aware Mode
      
      For Peer Aware mode, you run the same application twice with different profiles.
      
      First Profile:
      ```yaml
        spring:
          profiles: peer1
        eureka:
          instance:
            hostname: peer1
      ```
      Second Profile:
        ```yaml
            spring:
              profiles: peer2
            eureka:
              instance:
                hostname: peer2
    
        ```

### How to Register with Eureka?

1. You need to have `spring-cloud-starter-netflix-eureka-client` in you classpath
2. Giving Eureka Server address in application.yml 
```yaml
eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/
```
3. If in Peer mode You can give multiple peer address:
```yaml
eureka:
  client:
    serviceUrl:
      defaultZone: https://peer1/eureka/,http://peer2/eureka/,http://peer3/eureka/
```

---

### How do you secure Eureka Sever?
1. Add `spring-boot-starter-security` to the class path
2. Web Security Config to your app for disabling csrf.
```yaml
@EnableWebSecurity
class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().ignoringAntMatchers("/eureka/**");
        super.configure(http);
    }
}
```
3. Provide Spring Security User name and password in application.yml
```yaml
spring:
  security:
    user:
      name: admin
      password: pwd
```
4. Change the default zone url accordingly.
```yaml
 defaultZone:  http://admin:pwd@localhost:8761/eureka/
```

### How to enable Hystrix Circuit Breaker?

```java
@Bean
public Customizer<HystrixCircuitBreakerFactory> defaultConfig() {
    return factory -> factory.configureDefault(id -> HystrixCommand.Setter
            .withGroupKey(HystrixCommandGroupKey.Factory.asKey(id))
            .andCommandPropertiesDefaults(HystrixCommandProperties.Setter()
            .withExecutionTimeoutInMilliseconds(4000)));
}
```

### How to write hystrix client?
1. Include `spring-cloud-starter-netflix-hystrix` in you classpath
2. Miminal Hystrix Client:
```java
@SpringBootApplication
@EnableCircuitBreaker
public class Application {

    public static void main(String[] args) {
        new SpringApplicationBuilder(Application.class).web(true).run(args);
    }

}

@Component
public class StoreIntegration {

    @HystrixCommand(fallbackMethod = "defaultStores")
    public Object getStores(Map<String, Object> parameters) {
        //do stuff that might fail
    }

    public Object defaultStores(Map<String, Object> parameters) {
        return /* something useful */;
    }
}
```

### What are the common Hystrix Circuit Breaker configuration?
- circuitBreaker.enabled
- circuitBreaker.requestVolumeThreshold
- circuitBreaker.sleepWindowInMilliseconds
- circuitBreaker.errorThresholdPercentage
- circuitBreaker.forceOpen
- circuitBreaker.forceClosed

These above you can use with `@HystrixProperty` annotation.


