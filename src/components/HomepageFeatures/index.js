import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrate with LLM',
    Svg: require('@site/static/img/undraw_typing.svg').default,
    description: (
      <>
        <div className="mb-2">Choose the LLM provider you'll be using:</div>
        <ul className="feature-list">
          <li>OpenAI</li>
          <li>Goole PaLM 2</li>
          <li>Cohere</li>
          <li>HuggingFace</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Use with Vector Search Databases',
    Svg: require('@site/static/img/undraw_server_cluster.svg').default,
    description: (
      <>
       <div className="mb-2">Pick the vector search database you'll be using:</div>
       <ul className="feature-list">
          <li>Weaviate</li>
          <li>Chroma</li>
          <li>Pinecone</li>
          <li>Pgvector</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Easy data loading',
    Svg: require('@site/static/img/undraw_text_files.svg').default,
    description: (
      <>
        <div className="mb-2">Load text data with ease from:</div>
        <ul className="feature-list">
          <li>URL</li>
          <li>PDF</li>
          <li>JSON</li>
          <li>CSV</li>
        </ul>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
