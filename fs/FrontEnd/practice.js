

// If, when running the newly created React project, you get a "digital envelope routines unsupported" error, this should be caused by your Node version.

// In such cases it will help to replace (in package.json) ...

// "start": "react-scripts start" 
// ... with ...

// "start": "react-scripts --openssl-legacy-provider start"
// ... and ...

// "build": "react-scripts build" 
// ... with ...

// "build": "react-scripts --openssl-legacy-provider build"


// In index.js, instead of the code shown in the video:

// import React from 'react';
// import ReactDOM from 'react-dom';
 
// import './index.css';
// import App from './App';
 
// ReactDOM.render(<App />, document.getElementById('root'));
// you'll face this kind of code (when creating a new React project):

// import React from 'react';
// import ReactDOM from 'react-dom/client';
 
// import './index.css';
// import App from './App';
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// As you can tell, it's almost the same code. It also still does the same thing: Tell React where to render the root component (<App/>). Everything I explain in the next videos still is valid and works in exactly the same way with React 18. It's just a small syntax change that was introduced.

// That's it though - all the other code you'll write and everything you'll learn is up-to-date with React 18, no changes are needed! You still build (functional) components, you still work with React Hooks - nothing about that changed.

// If you want to learn more about React 18, I got an article with a video where I walk you through this latest version: https://academind.com/tutorials/react-18-update-guide
