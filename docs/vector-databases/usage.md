---
sidebar_position: 2
---

# Usage

- Pick a vector database from list above and install the gem listed under Gem Requirements
- Set the environment variable(s) listed under ENV Requirements
- Instantiate the vector database class:

```ruby
weaviate = Langchain::Vectorsearch::Weaviate.new(
  url:         ENV["WEAVIATE_URL"],
  api_key:     ENV["WEAVIATE_API_KEY"],
  index_name:  "Documents",
  llm:         :openai,              # or :cohere, :hugging_face, :google_palm, or :replicate
  llm_api_key: ENV["OPENAI_API_KEY"] # API key for the selected LLM
)

# You can instantiate other supported vector databases the same way:

milvus = Langchain::Vectorsearch::Milvus.new(...)
qdrant = Langchain::Vectorsearch::Qdrant.new(...)
pinecone = Langchain::Vectorsearch::Pinecone.new(...)
chrome = Langchain::Vectorsearch::Chroma.new(...)
pgvector = Langchain::Vectorsearch::Pgvector.new(...)
```
