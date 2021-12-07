import ReactDOM from 'react-dom';

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