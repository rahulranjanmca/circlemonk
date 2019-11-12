---
id: security
title: Spring Security Interview Questions
sidebar_label: Security
---

### How to implement SSO with spring?
You need to have two app for SSO. You can achieve in one also with tweak.
1. Resource Server
    - You can use Either `EnableOAuth2Sso` or `EnableResourceServer ` annotation to achieve this.
    - You should extend `WebSecurityConfigurerAdapter` to give the logic for verification
2. Authorization Server
    - You can use `EnableAuthorizationServer` annotation
    - You should override `AuthorizationServerConfigurerAdapter` to give the defaults
    - You should override `AuthenticationProvider` to authenticate the user from database.

### What are the Spring Method Level Security Annotation And How to use it?

In order to enable Spring Method level Security, we need to annotate a @Configuration class with @EnableGlobalMethodSecurity.

- prePostEnabled : Determines if Spring Security’s pre post annotations [@PreAuthorize,@PostAuthorize] should be enabled.
- secureEnabled : Determines if Spring Security’s secured annotation [@Secured] should be enabled.
- jsr250Enabled : Determines if JSR-250 annotations [@RolesAllowed] should be enabled.






