import React from 'react';
import '../App.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  btnOnclick = (event) => {
    const result = calculate(this.state, event.target.textContent);
    this.setState((state0) => ({
      ...state0,
      ...result,
    }));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="child display-result dark-grey">{next || total || 0}</div>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>AC</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>+/-</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>%</button>
        <button type="button" className="child orange" onClick={this.btnOnclick}>÷</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>7</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>8</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>9</button>
        <button type="button" className="child orange" onClick={this.btnOnclick}>x</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>4</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>5</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>6</button>
        <button type="button" className="child orange" onClick={this.btnOnclick}>-</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>1</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>2</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>3</button>
        <button type="button" className="child orange" onClick={this.btnOnclick}>+</button>
        <button type="button" className="child zero light-grey" onClick={this.btnOnclick}>0</button>
        <button type="button" className="child light-grey" onClick={this.btnOnclick}>.</button>
        <button type="button" className="child orange" onClick={this.btnOnclick}>=</button>
      </div>
    );
  }
}
export default Calculator;
