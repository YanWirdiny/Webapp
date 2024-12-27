import logo from './logo.svg';
import './App.css';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>lahsjgwi</h1>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
