---
sidebar_position: 2
---

# Concepts

## Processors

Processors load and parse/process various data types such as CSVs, PDFs, Word documents, HTML pages, and others.

## Chunkers

Chunkers split data based on various available options such as delimeters, chunk sizes or custom-defined functions. Chunkers are used when data needs to be split up before being imported in vector databases.

## Prompts

Prompts are structured inputs to the LLMs. Prompts provide instructions, context and other user input that LLMs use to generate responses.

## Large Language Models (LLMs)

LLM is a language model consisting of a neural network with many parameters (typically billions of weights or more), trained on large quantities of unlabeled text using self-supervised learning or semi-supervised learning.

## Vectorsearch Databases

Vector database is a type of database that stores data as high-dimensional vectors, which are mathematical representations of features or attributes. Each vector has a certain number of dimensions, which can range from tens to thousands, depending on the complexity and granularity of the data.

### Embedding

Word embedding or word vector is an approach with which we represent documents and words. It is defined as a numeric vector input that allows words with similar meanings to have the same representation. It can approximate meaning and represent a word in a lower dimensional space.

## Logging

LangChain.rb uses standard logging mechanisms and defaults to :debug level. Most messages are at info level, but we will add debug or warn statements as needed. To show all log messages:

```ruby
Langchain.logger.level = :info
```
