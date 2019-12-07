---
id: start
title: Redis Interview Questions
sidebar_label: Basics
---

### What is Redis?

Redis is an advanced key-value data store and cache. It has is also referred to as a data structure server as such the keys not only contains strings, but also hashes, sets, lists, and sorted sets. 

---

### What are the data types available in Redis
- LIST
- SET
- SORTED SET
- HASHES
- STRING
- STREAMS

### How to insert a record in Redis.


###  List Out The Operation Keys Of Redis?

Operation keys of Redis includes:

- TYPE key
- TTL key
- KEYS pattern
- EXPIRE key seconds
- EXPIREAT key timestamp
- EXISTS key
- DEL key

### How to set the expiration of keys in Redis.

- Method 1 using `EXPIRE`
    If you want your key `abc` to expire in 10 seconds then
    ```bash
    EXPIRE abc 10
    ```
    
- Method 2 Using `SETEX`
    This method will set the key with time. And its atomic.
    ```bash
    SETEX abc 10 "changed-value"
    ```
    
- Set with EX 
   ```bash
  SET anotherkey "will expire in a minute" EX 60
```

    


