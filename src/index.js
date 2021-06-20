import React from 'react';
import ReactDOM from 'react-dom';

// Note that Webpack won't be able to detect changes to App if its inside of index.js
// Move App to its own App.js file for real development
function App() {

  return (
    <div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root')
);
