import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 data-testid="app-header-h1" >DENEME TITLE</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a data-testid = "app-header-a"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type='checkbox' data-testid ="app-header-checkbox" />
        <input type='text' data-testid='app-header-text'  />
      </header>
    </div>
  );
}

export default App;
