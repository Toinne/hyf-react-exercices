import React from 'react';
import { App } from './jsx';
import { render } from '@testing-library/react';

// React is written in JSX
// https://reactjs.org/docs/introducing-jsx.html

// Fix the following tests
// For some tests you might need to adjust something in `jsx.js` others require you to fix the assertion.
// No need to change anything in tests that pass these are purely informative and are meant to teach you something.

test('Renders as html', async () => {
    // When rendering JSX is converted to HTML.
    render(<App />);

    expect(document.body.innerHTML).toContain('<div>');
});

test('App uses embedded expressions', async () => {
    // JSX allows for embedding an expression
    // https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx

    // Take a look at the implementation of App
    const { findByText } = render(<App />);

    const element = await findByText('My App');

    expect(element).toBeDefined();
});

test('App specifies attributes', async () => {
    // JSX attributes are slightly different than html attributes
    // https://reactjs.org/docs/introducing-jsx.html#specifying-attributes-with-jsx

    // Take a look at the implementation of App
    const { findByText } = render(<App />);

    const element = await findByText('My App');

    expect(element.className).toBeDefined();
    expect(element.className).toEqual('');
});

test('App renders with an input and label defining for', async () => {
    const { getByTestId } = render(<App />);

    const label = await getByTestId('label');

    expect(label.getAttribute('for')).toEqual('');
});

test('App prevents Injection Attacks', async () => {
    // React DOM escapes any values embedded in JSX
    // https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks

    const { getByTestId } = render(<App />);

    const element = await getByTestId('injection');

    expect(element.innerHTML).toEqual('');
});