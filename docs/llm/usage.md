---
sidebar_position: 2
---

# Usage

## OpenAI
Add `gem "ruby-openai", "~> 4.0.0"` to your Gemfile.

```ruby
openai = Langchain::LLM::OpenAI.new(api_key: ENV["OPENAI_API_KEY"])
```
You can pass additional parameters to the constructor, it will be passed to the OpenAI client:
```ruby
openai = Langchain::LLM::OpenAI.new(api_key: ENV["OPENAI_API_KEY"], llm_options: {uri_base: "http://localhost:1234"}) )
```
```ruby
openai.embed(text: "foo bar")
```
```ruby
openai.complete(prompt: "What is the meaning of life?")
```

## Cohere
Add `gem "cohere-ruby", "~> 0.9.3"` to your Gemfile.

```ruby
cohere = Langchain::LLM::Cohere.new(api_key: ENV["COHERE_API_KEY"])
```
```ruby
cohere.embed(text: "foo bar")
```
```ruby
cohere.complete(prompt: "What is the meaning of life?")
```

## HuggingFace
Add `gem "hugging-face", "~> 0.3.2"` to your Gemfile.
```ruby
hugging_face = Langchain::LLM::HuggingFace.new(api_key: ENV["HUGGING_FACE_API_KEY"])
```

## Replicate
Add `gem "replicate-ruby", "~> 0.2.2"` to your Gemfile.
```ruby
replicate = Langchain::LLM::Replicate.new(api_key: ENV["REPLICATE_API_KEY"])
```

## Google PaLM (Pathways Language Model)
Add `"google_palm_api", "~> 0.1.2"` to your Gemfile.
```ruby
google_palm = Langchain::LLM::GooglePalm.new(api_key: ENV["GOOGLE_PALM_API_KEY"])
```

## AI21
Add `gem "ai21", "~> 0.2.1"` to your Gemfile.
```ruby
ai21 = Langchain::LLM::AI21.new(api_key: ENV["AI21_API_KEY"])
```