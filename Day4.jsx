// import React from 'react'
// import Dummy from './Dummy'

// const Day4 = ({data}) => {
//     // console.log(a );
//   return (
//     <div>{data}
//     {/* <Dummy/> */}
//     </div>
//   )
// }

// export default Day4












// import React, { useState } from 'react'
// import './Day4CSS.css'

// const Day4 = () => {
//    let [input,SetInput]=      useState("")
//    let [data,SetData]=      useState([])
   
//    function fun1() {
//     if (input.trim() !== '') {
//       SetData([...data, input]);
//       SetInput('');
//     }
//   }

//   function handleDelete(indexToDelete) {
//     const newData = data.filter((_, index) => {index !== indexToDelete});
//     SetData(newData);
//   }

//   return (
//     <div>
//       <h1 style={{color:'black',marginLeft:'45%'}}>TODO List</h1>
//         <input   name='input' value={input}    onChange={(e)=>{SetInput(e.target.value)}} placeholder='Enter something' />
//         <button  onClick={fun1}>click</button>
//         <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {item}{' '}
//             <button onClick={() => handleDelete(index)} style={{ color: 'red' }}>
//               x
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Day4












