// import { useState } from 'react';
import BasicForm from './components/BasicForm';

import './assets/App.css';
import './assets/all.scss';
import Navbar from './components/Navbar';


function App() {

  // const [num, setNum] = useState(0);
  // const [text, setText] = useState("預設數值");


  return (
    <>
      {/* <div className="App">
        {num}
        <button type="button" onClick={() => setNum(num + 1)}>請按我</button>
        {text}
        <input type='text' defaultValue="請輸入數值" onChange={(e) => setText(e.target.value)} />

      </div> */}
      <Navbar />
      <BasicForm />
    </>

  );
}

export default App;
