import './App.css';
import { useState, useEffect } from 'react';
import Counter from './Counter';

function App() {

  let [counters, setCounters] = useState(JSON.parse(localStorage.getItem('counters')) || []);

  const addCounter = () => {
    setCounters(prevCounters => {
      return [...prevCounters, {[counters.length + 1]: 0}]
    })
  }

  const changeValue = (id, increase) => {
    setCounters(prevCounters => {
      const updated = prevCounters.map((i) => {
        if (Object.keys(i)[0] === id) {

          return {[id]: increase ? Object.values(i)[0] + 1 : Object.values(i)[0] - 1 }
        }
        return i;
      })
      return updated;
    })
  }

  const removeCounter = (id) => {
    setCounters(prevCounters => {
      const updated = prevCounters.filter((i) => Object.keys(i)[0] !== id)
      return updated;
    })
  }

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters])

  return (
    <div className="App">
      <button className="button" onClick={addCounter}>add counter</button>
      {counters.map((i) => <Counter value={Object.values(i)[0]} id={Object.keys(i)[0]} changeValue={changeValue}  removeCounter={removeCounter} />)}
    </div>
  );
}

export default App;
