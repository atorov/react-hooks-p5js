# Using React with p5.js

![alt application screenshot](https://github.com/atorov/react-hooks-p5js/blob/master/src/assets/demo/screencast.gif)
![alt application screenshot](https://github.com/atorov/react-hooks-p5js/blob/master/src/assets/demo/screencast-2.gif)

This project demonstrates how to combine React (including the latest features such as **hooks and context**) and p5.js:

- Multiple p5 sketches on a same screen;
- Multiple instances of one sketch mounted in a same component;
- Mount sketches in different points of the DOM tree;
- Dynamically switch on/off sketches;
- p5.js libraries support (p5.sound example)
- Bidirectional communication between the main React app and sketches;
- Using the latest React features:
  - memo()
  - useContext()
  - useEffect()
  - useReducer()
- Hot Module Replacement (HMR): exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
  - Retain application state which is lost during a full reload;
  - Save valuable development time by only updating what's changed.

---

Check the online version [here](http://react-hooks-p5js.surge.sh/).

The basic idea is that the p5.js sketch is wrapped in a React component. The data that comes into the sketch is passed on to this component as props. Callbacks are used to return information back from the sketch to the application.

---

Another examples, build on the same concept but using class-based components, can be found [here](https://github.com/atorov/react-p5js) and [here](https://github.com/atorov/fractal-tree-simulator).

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.

## Syntax Highlighting and Displaying Lint Output in the Editor

Тhe most popular editors should be covered and your editor should report the linting warnings.

## Adding a Router and Redux

[React Router](https://reacttraining.com/react-router/) is the most popular option.

[Redux](https://redux.js.org/) is a predictable state container for JavaScript apps.

React Router and Redux can easily be added to the project.

---

[React](https://reactjs.org/) is one of the most popular JavaScript libraries for creating single page applications.

[p5.js](https://p5js.org/) is a JavaScript library with a full set of drawing functionality.
