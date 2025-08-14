import React, { useState } from 'react'

const Card = ({id, name, email, phone, address}) => {


  return (
    <>
    <div id='cardOuter'>
        <h3>Contact Card</h3>
        <text>user id : {id}</text> 
        <br />
        <text>user name : {name}</text> 
        <br />
        <text>user email : {email}</text> 
        <br />
        <text>user phone : {phone}</text> 
        <br />
        <text>user address : {address}</text> 
        <br />
        <button className='btn' id='ebtn'>Edit</button>
        <button className='btn' id='dbtn'>Delete</button>

    </div>
    </>
  )
}

export default Card