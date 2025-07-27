import React, { useEffect, useState } from 'react'
import './Day5CSS.css'

const Day5 = () => {

    // let [count ,SetCount]=useState(0);

    let [input ,SetInput]=useState([]);

    useEffect(()=>{
        console.log("hello");
        fetch('https://jsonplaceholder.typicode.com/todos').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data)
            // console.log(input);
            
        })
        
    },[])
    

    // deleting boxes
    function d(index) {
        let newArr = input.filter(()=>{
            return 
        })
    }

    

  return (
    <>
        {/* <button onClick={()=>SetCount(count+1)}> count {count} </button> */}

        <h1 id='oneHead'><i>Hello, fetching API </i> </h1>
        <div id='parent'>
        {
            
            input.map((a)=>{
                // console.log(a);
                
                return(
                    
                    <div id='oneDiv' >
                        <h4>{a.title}</h4>
                        <h5>User id : {a.id}</h5>
                        <button onClick={()=>dataSave(a)}>Add</button>
                        <button onClick={()=>deleteFromLocalS(a.id)}>Delete</button>

                        
                    </div>
                    
                    
                
                )
            })
        }
        </div>
    </>
  )
}

export default Day5