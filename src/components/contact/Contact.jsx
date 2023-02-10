import React from 'react'
import "./contact.scss"
import { useState } from 'react'
export default function Contact() {
  
  const [message,setMessage] = useState("")
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMessage("Thanks! I'll reply ASAP :)")
  }
  return (
    <div className='contact' id='contact'>

      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="">
          <input type="text" placeholder="Email"/>
          <textarea placeholder='message'></textarea>
          <button type='submit' onClick={handleSubmit}>Submit</button>
          <span>{message}</span>
        </form>
      </div>
    </div>
  )
}
