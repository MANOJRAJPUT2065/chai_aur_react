import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter]=useState(1);


let addValue=()=>{
  
if(counter>20){
  return;
}else{
setCounter(counter+1)
}
}
let removeValue=()=>{
  
if(counter<0){
  return;
}else{
setCounter(counter-1);
}
}
  return (
    <>

<h1>Chai aur React with Hith Hitesh Sir</h1>
<h2>Counter Value:1</h2>
<button onClick={addValue}>Add value:</button>
<br />
<button onClick={removeValue}>Remove Value</button>
<p>Footer:{counter}</p>
    </>
  )
}

export default App
