import React from 'react';

function App(props) {
    return (
        <section>
            <h1 data-testid="title">{props.title}</h1>
            {props.addDescription === true ? <p data-testid="description">This is a description of my app</p> : null}
            {props.articles ? props.articles.map(article => <NewsArticle />) : null}
        </section>
    );
}

function NewsArticle() {
    return (
        <article data-testid="news-article">
            <h1>Article</h1>
        </article>
    );
}

export { App };