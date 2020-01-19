import React from 'react';
import {Import, optionalChaining} from './create-react-app';
import './create-react-app.css';

// The goal of these tests is to familiarize you with create-react-app
// To understand the folder structure, the transpiling, dependency management, ... inside create-react-app

test('Getting started', () => {
  // Get this test to run by installing dependencies with yarn
  // Install yarn https://yarnpkg.com/en/docs/install#mac-stable
  // run `yarn install`
  // run `yarn run test`
  expect(React).toEqual(React);
});

test('Exports & Imports: exporting objects', () => {
  // In the file create-react-app.js export an object called Import
  expect(Import).toBeDefined();
});

test('Exports & Imports: named imports', () => {
  // Add a new import statement at the top of this file
  // This should import all objects from the file 'create-react-app`
  expect(AllObjects).toBeDefined();
  expect(AllObjects).toHaveProperty('Import')
});

test('Exports & Imports: importing css assets', () => {
  // You can also import css check the `import './create-react-app.css';` statement at the top
  // Styles within this file will applied when rendering your application
  // This test is purely informative
  expect(true).toBeTruthy()

});

test('Babel', () => {
  // Within create react app Babel is included
  // Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript

  // The config in create-react-app allows you for instance to already use optional chaining
  const result = optionalChaining({});

  // This test is purely informative
  expect(result).toEqual(undefined);
});