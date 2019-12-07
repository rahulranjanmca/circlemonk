---
id: start
title: Jpa Interview Questions
---

### What is JPA?

---
### Does JPA performs the actual task like access, persist and manage data?

No, JPA is only a specification. The ORM tools like Hibernate, EcpliseLink, iBatis, and TopLink implements the JPA specification and perform these type of tasks.

---

# How to define composite key in jpa?
Two ways:

1.  The IdClass Annotation

```java
public class AccountId implements Serializable {
    private String accountNumber;
 
    private String accountType;
 
    // default constructor
 
    public AccountId(String accountNumber, String accountType) {
        this.accountNumber = accountNumber;
        this.accountType = accountType;
    }
 
    // equals() and hashCode()
}
```

And Entity Class:

```java
@Entity
@IdClass(AccountId.class)
public class Account {
    @Id
    private String accountNumber;
 
    @Id
    private String accountType;
 
    // other fields, getters and setters
}
```

2. The EmbeddedId Annotation

    ```java
    
    @Embeddable
    public class BookId implements Serializable {
        private String title;
        private String language;
     
        // default constructor
     
        public BookId(String title, String language) {
            this.title = title;
            this.language = language;
        }
     
        // getters, equals() and hashCode() methods
    }
    ```
The Enitty Class:

```java
@Entity
public class Book {
    @EmbeddedId
    private BookId bookId;
 
    // constructors, other fields, getters and setters
}
```

### How to call a function in JPA?

- Using native query
- Using JPQL. using function
- Using criteria
    - if you want to use in where clause, `CriteriaBuilder.function`.
 
### How will you define ManyToMany relationship in JPA?



