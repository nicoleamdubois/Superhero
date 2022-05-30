import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    console.log(`COUNTDOWN: ${countDown}`);
    if (countDown > 0) {
      getTimeFromServer();
    }
  }, [countDown]);


  const getTimeFromServer = async () => {
    console.log('clicked!');
    try {
      console.log('calling fetch()!');
      let response = await fetch('/slow');
      let vals = await response.json();
      setCountDown(curVal => curVal - 1);
      return setData(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  };

  console.log("App(): about to render!!!");
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => setCount((curVal) => curVal + 1)}>
          click me
        </button>
        <button onClick={() => setCount2((curVal) => curVal + 1)}>
          click me2
        </button>
        <p>{data || 'no value yet'}</p>
      </header>
    </div>
  );
}

export default App;