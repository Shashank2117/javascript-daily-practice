import React from 'react'
import { useState } from 'react'

const Form = ({ onSubmit }) => {

  let [details, setDetails] = useState({
    name :"",
    email:"",
    phone:"",
    address:""
  })

  let handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setDetails((prev) => ({
      ...prev,
      [name]: value      //input se aayi value isme aayegi
    }));
}

   let handleSubmit = (e)=>{
    e.preventDefault()
    onSubmit(details);         // send to App.jsx
    setDetails({ name: "", email: "", phone: "", address: "" }); // reset form
    
   }


  return (
    <>
    <div id='formDiv'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="one">Name : </label>
            <input type="text" name='name' id="one" placeholder="Enter Name" onChange={handleChange} required/>
            <br />
            <label htmlFor="one">Email : </label>
            <input type="email" name='email' id="two" placeholder="Enter Email" onChange={handleChange} required/>
            <br />
            <label htmlFor="three">Phone : </label>
            <input type="number" name='phone' id="three" placeholder="Phone Number" onChange={handleChange} required/>
            <br />
            <label htmlFor="four">Address : </label>
            <input type="text" name='address' id="four" placeholder="Enter Address" onChange={handleChange} required/>
            <br />
            <input type="submit" id="bt2" />
        </form>
    </div>
    

    </>
  )
}

export default Form