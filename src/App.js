
import { useState } from 'react';
import BigBox from './BigBox';
import Input from './Input';

function App() {

const [colorValue, setColorValue] = useState('')


  return (
    <div className="App">
      
      <BigBox 
          colorValue={colorValue}
      />
      <Input 
          colorValue={colorValue}
          setColorValue={setColorValue}
      />
    </div>
  );
}

export default App;
