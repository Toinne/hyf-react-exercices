import React from 'react';
import { App } from './props';
import { render } from '@testing-library/react';

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen
// https://reactjs.org/docs/components-and-props.html

// Fix the following tests
// For some tests you might need to adjust something in `props.js` others require you to fix the assertion.
// No need to change anything in tests that pass these are purely informative and are meant to teach you something.

test('The component App uses and renders with props', async () => {
    const { getByTestId } = render(<App title="My App" />);

    const element = await getByTestId('title');

    expect(element.innerHTML).toEqual('My App');
});

test('The component App uses and renders with other props', async () => {
    const { getByTestId } = render(<App title="My Other App" />);

    const element = await getByTestId('title');

    expect(element.innerHTML).toEqual('My Other App');
});


test('Given and additional props renders with description', async () => {
    const { getByTestId } = render(<App title="My App" />);

    const element = await getByTestId('description');

    expect(element).toBeDefined();
});

test('Render with a state object using the spread operator ', async () => {
    const state = {
        title: 'My App',
    };

    const { getByTestId } = render(<App {...state} />);

    const element = await getByTestId('title');

    expect(element.innerHTML).toEqual('My App');
});

test('Renders articles ', async () => {
    const state = {
        title: 'My App',
        articles: [
            {
                title: '10 Amazing Things you did not know about React'
            },
            {
                title: 'Discover the Best Javascript Framework'
            },
            {
                title: 'This simple trick will teach you everything about React'
            },
        ]
    };

    const { findAllByTestId } = render(<App {...state} />);

    const elements = await findAllByTestId('news-article');

    expect(elements.length).toEqual(3);
});

test('Renders articles with title ', async () => {
    const state = {
        title: 'My App',
        articles: [
            {
                title: '10 Amazing Things you did not know about React'
            },
            {
                title: 'Discover the Best Javascript Framework'
            },
            {
                title: 'This simple trick will teach you everything about React'
            },
        ]
    };

    const { findByText } = render(<App {...state} />);

    const article1 = await findByText('10 Amazing Things you did not know about React');
    const article2 = await findByText('Discover the Best Javascript Framework');
    const article3 = await findByText('This simple trick will teach you everything about React');

    expect(article1).toBeDefined();
    expect(article2).toBeDefined();
    expect(article3).toBeDefined();
});