import { useEffect, useState } from 'react';
import './App.css';

function Counter({value, id, changeValue, removeCounter}) {
  let [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <div className={`counter ${isMounted ? 'visible' : ''}`} >
      <button className='counter-button' onClick={() => changeValue(id, false)}>-</button>
      <span className='value'>{value}</span>
      <button className='counter-button' onClick={() => changeValue(id, true)}>+</button>
      <button className='counter-button' onClick={() => removeCounter(id)}>remove</button>
    </div>
  );
}

export default Counter;
