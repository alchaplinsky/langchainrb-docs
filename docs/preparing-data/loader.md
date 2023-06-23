---
sidebar_position: 2
---

# Loader

Need to read data from various sources? Load it up.

Just call `Langchan::Loader.load` with the path to the file or a URL you want to load.

```ruby
Langchain::Loader.load('/path/to/file.pdf')
```

or

```ruby
Langchain::Loader.load('https://www.example.com/file.pdf')
```

## Supported Formats


| Format | Pocessor                     |       Gem Requirements       |
| ------ | ---------------------------- | :--------------------------: |
| docx   | Langchain::Processors::Docx  |   `gem "docx", "~> 0.8.0"`   |
| html   | Langchain::Processors::HTML  | `gem "nokogiri", "~> 1.13"`  |
| pdf    | Langchain::Processors::PDF   | `gem "pdf-reader", "~> 1.4"` |
| text   | Langchain::Processors::Text  |                              |
| JSON   | Langchain::Processors::JSON  |                              |
| JSONL  | Langchain::Processors::JSONL |                              |
| csv    | Langchain::Processors::CSV   |                              |
| xlsx   | Langchain::Processors::Xlsx  |   `gem "roo", "~> 2.10.0"`   |