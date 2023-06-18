---
sidebar_position: 1
---

# Intro

Langchain.rb provides a common interface to interact with all supported vector databases.

List of supported vector databases:

| Name     | ENV Requirements                                     | Gem Requirements                |
| -------- | ---------------------------------------------------- | ------------------------------- |
| Chroma   | ENV["CHROMA_URL"]                                    | gem "chroma-db", "~> 0.3.0"     |
| Milvus   | ENV["MILVUS_URL"]                                    | gem "milvus", "~> 0.9.0"        |
| Pinecone | ENV["PINECONE_API_KEY"], ENV["PINECONE_ENVIRONMENT"] | gem "pinecone", "~> 0.1.6"      |
| Qdrant   | ENV["QDRANT_URL"], ENV["QDRANT_API_KEY"]             | gem "qdrant-ruby", "~> 0.9.0"   |
| Weaviate | ENV["WEAVIATE_URL"], ENV["WEAVIATE_API_KEY"]         | gem "weaviate-ruby", "~> 0.8.0" |
| Pgvector | ENV["POSTGRES_URL"]                                  | gem "pgvector", "~> 0.2"        |
