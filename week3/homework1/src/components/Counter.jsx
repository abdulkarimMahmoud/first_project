import React from "react"
import {useState} from "react"

const Counter = ()=>{

 const [counter , setCounter] = useState(0)
 const [step , setStep] = useState(1)

 return(
    <div className="Counter">
    <h1>العداد المتقدم</h1>
    <h2 style={{marginTop:"-25px"}}>{counter}</h2>

    <div>
        <label>step:</label>
        <input style={{margin:"20px",marginTop:"-40px"}}
        type="number"
        value={step}
        onChange={(e)=>setStep(Number(e.target.value))}
        />
    </div>
    <button onClick={()=> setCounter(counter + step)}> + {step} </button>
    <button style={{marginLeft:"10px",marginRight:"10px"}} onClick={()=> setCounter(counter - step)}> - {step} </button>
    <button onClick={()=> setCounter(0)}>تصفير </button>




    </div>
 )


}
export default Counter