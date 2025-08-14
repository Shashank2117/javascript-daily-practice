import React from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import './index.css'
import { useState } from 'react'

const App = () => {

  let [ show, setShow]  = useState(false)
// 
  const [contacts, setContacts] = useState([])

    const handleFormSubmit = (formData) => {
    const newContact = {
      ...formData,
      id: contacts.length + 1, 
    };
    setContacts([...contacts, newContact]);
    setShow(false);
    console.log(contacts);
  };
// 



  return (
    <>
    <h1 id='cm'>Contact Manager</h1>
    <br />
    <button id='bt1' onClick={()=>setShow(true)}>Add New Contact</button>

    {  show  &&  <Form onSubmit={handleFormSubmit} /> }
    <br />


{/*  */}
<div id='cardContainer'>
    {contacts.map((contact) => (
        <Card
          id={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          address={contact.address}
        />
      ))}
</div>

{/*  */}
    </>
  )
}

export default App
