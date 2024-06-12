import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  const clear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="calculator">
      <h2 className="calculator-title">Simple Calculator</h2>
      <div className="display">
        <input type="text" value={input} readOnly />
        <span>{output}</span>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        <button className="clear" onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className="equal" onClick={() => handleButtonClick('=')}>=</button>
        <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
