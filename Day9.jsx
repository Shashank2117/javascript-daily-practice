import React from 'react'
import Custom from './Custom.jsx'

const Day9 = () => {
      let {count,incriment,decriment,reset} = Custom()
  return (
    <>
    {/* <Custom/> */}
    <h1>{count}</h1>
    <button onClick={()=>incriment()}>Incriment</button>
    <button onClick={()=>decriment()}>Decriment</button>
    <button onClick={()=>reset()}>Reset</button>

    </>
  )
}

export default Day9