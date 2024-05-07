import React from 'react'
import "./Contactus.css"

export default function Contactus() {
  return (
    <div className='form'>
        <form autoComplete='off'>
            <label htmlFor="name">Name </label>
                <input type="text" name="name" placeholder="Enter Your Name" id="name"/>
            
            <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" id="email"/>
            
            <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" placeholder="Enter Your Subject" id="subject"/>
            
            <label htmlFor="textarea">Message</label>
                <textarea rows="6" id="teaxtarea" placeholder='Enter Your message'></textarea>
            <button className='btn' type="submit">Submit</button>
        </form>
    </div>
  )
}
