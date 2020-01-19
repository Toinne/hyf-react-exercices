# React exercices

## Getting started

### Node

Make sure you have [Node](https://nodejs.org/en/) installed.
If not https://nodejs.org/en/download/.

### Yarn

[Yarn](https://yarnpkg.com/lang/en/) is a package manager. 
Similar to [npm](https://www.npmjs.com/). As this package manager is recommended by [create-react-app](https://create-react-app.dev/) we will use it throughout the exercises.

- Install yarn https://yarnpkg.com/en/docs/install
- After yarn is installed navigate to the root of this project and run `yarn install`

[Yarn](https://yarnpkg.com/lang/en/) will install the dependencies defined in [package.json](./package.json).

## Exercises

### Create-react-app

If you take a look at [package.json](./package.json) you will see a dependency on `react-scripts`.
This package includes scripts and configuration used by Create React App.
Create React App provides us with every tool and a prebuild configuration we need to start developing with React.
Includes but not limited to:
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- ... 

Take a look at the exercise [create-react-app.js](./src/create-react-app.js)

### JSX

The recommended way of writing React is in JSX.    
JSX is a syntax extension to JavaScript. 
JSX may remind you of a template language, but it comes with the full power of JavaScript.

https://reactjs.org/docs/introducing-jsx.html      

Take a look at the exercise [jsx.js](./src/jsx.js)
              
### Creating React Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation

https://reactjs.org/docs/components-and-props.html

Take a look at the exercise [component.js](./src/component.js)

### Mounting Components

We of course want to create a web page with our component.
For this we to render our component to a page.

https://reactjs.org/docs/rendering-elements.html

Take a look at the exercise [index.js](./src/index.js)

### Props

You can render a component with properties or props.

Take a look at the exercise [props.js](./src/props.js)
