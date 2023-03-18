import React from "react";
import './contact.css';
import {AiFillFacebook} from 'react-icons/ai';
import {TbArrowBigRightLines} from 'react-icons/tb';
import {AiFillLinkedin} from 'react-icons/ai';



// To add Emailjs to recieve the email as the sender sends th email

const Contact = () => {
 return (  
  <section id="contact" className="contact section container">
    <div className="sectionTitle">
    <span className="titleNumber">03.</span>
    <h5 className="titleText">Contact
    <div className="underline"><span></span></div></h5>
   </div>


   <div className="contactContainer grid">
    <div className="socialContacts grid">
     <h3>Talk to me</h3>

     <div className="cards grid">
      <div className="card">
       <div>
       <AiFillFacebook className="icon" />
       </div>
       <h4>Facebook</h4>
       <span className="userName">@devabdulsaboor</span>
       <div>
        <a href="https://www.facebook.com/devabdulsaboor" className="flex">
         Send Message <TbArrowBigRightLines className="icon" />
        </a>
       </div>
      </div>

      <div className="card">
       <div>
       <AiFillLinkedin className="icon" />
       </div>
       <h4>LinkedIn</h4>
       <span className="userName">@devabdulsaboor</span>
       <div>
        <a href="https://www.linkedin.com/in/devabdulsaboor" className="flex">
         Send Message <TbArrowBigRightLines className="icon" />
        </a>
       </div>
      </div>


      {/* To be Edited in future */}

{/* 
      <div className="card">
       <div>
       <AiFillFacebook className="icon" />
       </div>
       <h4>Facebook</h4>
       <span className="userName">@devabdulsaboor</span>
       <div>
        <a href="https://www.facebook.com/devabdulsaboor" className="flex">
         Send Message <TbArrowBigRightLines className="icon" />
        </a>
       </div>
      </div> */}



     </div>
    </div>

    <div className="form grid">
     <h3>Send me an email</h3>

     <form action="">
      <input type="text" placeholder="Enter your Name" name="name" />
    
      <input type="text" placeholder="Enter your Email" email="email" />

      <textarea name="message" placeholder="Enter your Message"></textarea>

      <button className="formBtn" type="submit" name="submit">Send Email</button>

      </form>

     

    
    </div>
   </div>

  </section>
 );
}
 


export default Contact;