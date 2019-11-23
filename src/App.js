import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [isChecked, setIsChecked] = useState(false)

  const onChange = () => setIsChecked(!isChecked)

  return (
    <div className="App">
      <label>
        <input type="checkbox" checked={isChecked}
          onChange={onChange} />
        {isChecked ? props.labelOn :
          props.labelOff}
      </label>
    </div>
  );
}

export default App;
