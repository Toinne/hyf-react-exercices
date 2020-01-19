import React from 'react';

function App() {
    const result = 23434 * 0.345;
    return (
        <section>
            <h1>The Example App</h1>
            <NewsArticle />
            <p>
                Renders the value of a variable: <span>{result}</span>
            </p>
        </section>
    );
}

function NewsArticle() {
    return (
        <article>
            <h1>Article</h1>
        </article>
    )
}

export { App };