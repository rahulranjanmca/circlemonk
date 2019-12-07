---
id: start
title: Spring Interview Questions
sidebar_label: Basics
---

### What do you mean by Dependency Injection?

### Can you inject Prototype Bean into Singleton Bean?

### Can you create custom scope bean in Spring?

### How will you handle exception in Spring?

A simple exception handler in spring-

```java
@Configuration
@ControllerAdvice(basePackages="com.canigenus")
@SuppressWarnings({ "rawtypes", "unchecked" })
public class GlobalRestControllerExceptionHandler {
    
	@ExceptionHandler(Exception.class)
	@ResponseBody
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
	public String handleException(Exception e) {
		return e.getMessage();
	}
	
}
	
```

### If you have 2 beans of same interface, How will you try to inject one bean in one constroller, and 2nd bean in 2nd controller?




