
import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(1)

  const handleIncreate = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <div className="App" style={ {padding: 30}}>
      <h1>{counter}</h1>
      <button onClick={handleIncreate}> Increate</button>


    </div>
  );
}

export default App;
