import React, { useState } from 'react'

const Day2 = () => {
    let[input,SetInput]= useState({
        name:"",
        password:""
    })
    function fun1(e){
        let {name,value}= e.target
        SetInput({...input,[name]:value})
        console.log(input);
        
    }
  return (
    <div>
        <fieldset>
            <form>
        <input   name='name' value={input.name} onChange={fun1} type='text'  placeholder='Enter your name'/>
    <br/>
    <br/>
     <input   name='password' value={input.password} onChange={fun1} type='password'  placeholder='Enter your pssword'/>
    <br/>
    <br/>
    <button>submit</button>
    </form>
    </fieldset>
    </div>
  )
}

export default Day2
