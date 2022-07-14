
import { useState } from 'react';
import BigBox from './BigBox';
import Input from './Input';

function App() {

const [colorValue, setColorValue] = useState('')
const [hexValue, setHexValue] = useState('')


  return (
    <div className="App">
      
      <BigBox 
          colorValue={colorValue}
          hexValue={hexValue}
      />
      <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
          setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
