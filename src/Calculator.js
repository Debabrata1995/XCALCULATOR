import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      if (input === '') {
        setResult('Error');
      } else {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult('Error');
        }
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        readOnly
        style={{
          width: '160px',
          height: '30px',
          textAlign: 'right',
          fontSize: '18px',
          marginBottom: '10px'
        }}
      />
      <div style={{ fontSize: '24px', margin: '10px 0' }}>{result}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 50px)', gap: '10px', justifyContent: 'center' }}>
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((symbol) => (
          <button
            key={symbol}
            onClick={() => handleClick(symbol)}
            style={{
              width: '50px',
              height: '50px',
              fontSize: '20px',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
