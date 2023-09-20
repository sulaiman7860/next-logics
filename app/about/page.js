"use client"
import { useState } from 'react';

function MyComponent() {
  // Step 3: Create state variables for your data
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [data, setData] = useState([]);

  // Step 4: Handle input changes and update state variables
  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };
  const handleInput3Change = (e) => {
    setInput3(e.target.value);
  };

  const handleSubmit = () => {
    // Step 5: Update the data array with new values
    setData([...data, { input1, input2, input3 }]);
    setInput1('');
    setInput2('');
    setInput3('');
  };

  return (
    <div className='container'>
      <h1>Input Form</h1>
      <input
        type="text"
        className='form-control'
        placeholder="Input 1"
        value={input1}
        onChange={handleInput1Change}
      /> <br />
      <input
        type="text"
        className='form-control'
        placeholder="Input 2"
        value={input2}
        onChange={handleInput2Change}
      /> <br />
      <input
        type="text"
        className='form-control'
        placeholder="Input 3"
        value={input3}
        onChange={handleInput3Change}
      /> <br />
      <button className='btn btn-success' onClick={handleSubmit}>Submit</button>

      <h2>Data List</h2>
      {/* Step 5: Use map to display the data */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h3>Input 1: {item.input1}</h3>
            <h3> Input 2: {item.input2}</h3>
            <h3> Input 2: {item.input3}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
