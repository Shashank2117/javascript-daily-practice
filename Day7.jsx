import React from 'react'
import {useReducer, useState} from 'react'
import './Day7CSS.css'

const Day7 = () => {

  function reducer(data, action) {

    if(action.type=="inc"){
            return data+1;
        }
        else if(action.type=="dec"){
            return data-1;
        }
        else if(action.type=="res"){
            return 0;
        }
        else{
            return data;
        }
  }
  

  let [count, dispatch] = useReducer(reducer, 0.00)
  // let [count, setCount] = useState(0)


  return (
    <>
        <div>
          <h1>Count : {count}</h1>
          <button onClick={()=>dispatch({type:"inc"})}>Incriment</button>
          <button onClick={()=>dispatch({type:"dec"})}>Decriment</button>
          <button onClick={()=>dispatch({type:"res"})}>Reset</button>
        </div>
    </>
    
  )
}

export default Day7