import { useEffect } from 'react';

import axios from 'axios';
import logo from './assets/logo.svg';
import './assets/App.css';
import './assets/all.scss';


function App() {

  useEffect(() => {
    (async () => {
      const path = process.env.REACT_APP_API_URL
      const result = await axios.get(path);
      console.log(result.data)
  })();
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
