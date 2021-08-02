import ReactDOM from 'react-dom';

// Webpack won't be able to detect changes to App if in index.js
// Move App to its own App.js file for real development
function App() {

  return (
    <div>
      Hello World
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// JQuery equivalant
// const app = <div>Hello World</div>;
// $("#root").append(app)