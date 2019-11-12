---
id: start
title: Elastic Search Interview Questions
---

### What is an index in ElasticSearch ? 
An index is similar to a table in relational databases. The difference is that relational databases would store actual values, which is optional in ElasticSearch. An index can store actual and/or analyzed values in an index.

---

### What is a document in ElasticSearch ? 
A document is similar to a row in relational databases. The difference is that each document in an index can have a different structure (fields), but should have same data type for common fields.
Each field can occur multiple times in a document with different data types. Fields can contain other documents too.

---

### What is an Analyzer in ElasticSearch ?
While indexing data in ElasticSearch, data is transformed internally by the Analyzer defined for the index, and then indexed. An analyzer is built of tokenizer and filters. Following types of Analyzers are available in ElasticSearch 1.10.
1. STANDARD ANALYZER
2. SIMPLE ANALYZER
3. WHITESPACE ANALYZER
4. STOP ANALYZER
5. KEYWORD ANALYZER
6. PATTERN ANALYZER
7. LANGUAGE ANALYZERS
8. SNOWBALL ANALYZER
9. CUSTOM ANALYZER


### What is an Analyzer in ElasticSearch ?
While indexing data in ElasticSearch, data is transformed internally by the Analyzer defined for the index, and then indexed. An analyzer is built of tokenizer and filters. Following types of Analyzers are available in ElasticSearch 1.10.
1. STANDARD ANALYZER
2. SIMPLE ANALYZER
3. WHITESPACE ANALYZER
4. STOP ANALYZER
5. KEYWORD ANALYZER
6. PATTERN ANALYZER
7. LANGUAGE ANALYZERS
8. SNOWBALL ANALYZER
9. CUSTOM ANALYZER
