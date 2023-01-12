import { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnOnclick = (event) => {
    const result = calculate(state, event.target.textContent);
    setState((state0) => ({
      ...state0,
      ...result,
    }));
  };

  const { total, next } = state;
  return (
    <div className="calculator">
      <div className="child display-result dark-grey">{next || total || 0}</div>
      <button type="button" className="child light-grey" onClick={btnOnclick}>AC</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>+/-</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>%</button>
      <button type="button" className="child orange" onClick={btnOnclick}>÷</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>7</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>8</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>9</button>
      <button type="button" className="child orange" onClick={btnOnclick}>x</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>4</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>5</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>6</button>
      <button type="button" className="child orange" onClick={btnOnclick}>-</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>1</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>2</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>3</button>
      <button type="button" className="child orange" onClick={btnOnclick}>+</button>
      <button type="button" className="child zero light-grey" onClick={btnOnclick}>0</button>
      <button type="button" className="child light-grey" onClick={btnOnclick}>.</button>
      <button type="button" className="child orange" onClick={btnOnclick}>=</button>
    </div>
  );
}
