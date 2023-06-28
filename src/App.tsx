import React, { useState } from 'react';
import { Button, Button1, H1 } from './components/styled';





function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='Counter'>
      <H1>{count}</H1>
      <Button onClick={() => setCount(count + 1)}>увеличить</Button>
      <Button1 onClick={() => setCount(count - 1)}>уменьшить</Button1>


    </div>
  
 
  );
}



export default App;
