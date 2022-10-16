
import React, {useState} from "react"


function Counter() {
  const [count,setCount] = useState(0);
  const [amount,setAmount] = useState(1);
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=> setCount(count+amount)}  >Increment</button>
    <button onClick={() => setCount(0)}>Reset</button>
    <hr></hr>
    Amount: {amount}
    <br></br>
    <button onClick={()=> setAmount(1)}  >+1</button>
    <button onClick={()=> setAmount(3)}  >+3</button>
    <button onClick={()=> setAmount(5)}  >+5</button>
    <button onClick={()=> setAmount(10)}  >+10</button>
    </div>
   
  )
}

export default Counter