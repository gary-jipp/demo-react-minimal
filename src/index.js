import ReactDOM from 'react-dom';
import App from "App";

// Webpack won't be able to detect changes to App if in index.js
// App Needs to be its own App.js file for real development

ReactDOM.render(<App />, document.getElementById('root')
);
