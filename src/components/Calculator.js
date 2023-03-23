import React from 'react';
import '../App.css';

const Calculator = () => (
  <div className="calculator">
    <div className="child display-result dark-grey">0</div>
    <button type="button" className="child light-grey">AC</button>
    <button type="button" className="child light-grey">+/-</button>
    <button type="button" className="child light-grey">%</button>
    <button type="button" className="child orange">&#x00F7;</button>
    <button type="button" className="child light-grey">7</button>
    <button type="button" className="child light-grey">8</button>
    <button type="button" className="child light-grey">9</button>
    <button type="button" className="child orange">&times;</button>
    <button type="button" className="child light-grey">4</button>
    <button type="button" className="child light-grey">5</button>
    <button type="button" className="child light-grey">6</button>
    <button type="button" className="child orange">-</button>
    <button type="button" className="child light-grey">1</button>
    <button type="button" className="child light-grey">2</button>
    <button type="button" className="child light-grey">3</button>
    <button type="button" className="child orange">+</button>
    <button type="button" className="child zero light-grey">0</button>
    <button type="button" className="child light-grey">.</button>
    <button type="button" className="child orange">=</button>
  </div>
);

export default Calculator;
