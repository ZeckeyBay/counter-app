
import React, {useState,useEffect} from "react"


function Counter() {
  const [count,setCount] = useState(0);
  const [amount,setAmount] = useState(1);

  useEffect(()=>{
    let interval = setInterval(() =>{
    //console.log("interval");
    setCount((prev) => prev + 1);
  },1000);

  return() => clearInterval(interval);
},[]);


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