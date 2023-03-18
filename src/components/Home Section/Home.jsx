import React from "react";
import './home.css';
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import {TbArrowBigRightLine} from "react-icons/tb";
import {TbChevronsDown} from "react-icons/tb";

const Home = () => {
 return (  
  <section id="home" className="home section">


   {/* This Div will only be visible at wider screen */}
    
   <div className="leftIcons">
    <div className="socials grid">
     <a href="" target="_blank">
     <AiFillGithub className="icon" />
     </a>

     <a href="" target="_blank">
     <AiFillLinkedin className="icon" />
     </a>

     <a href="" target="_blank">
     <AiFillTwitterCircle className="icon" />
     </a>
     <div className="line"></div>
    </div>
    </div> 
   

  {/* Home Content */}

  <div className="container homeContainer">
  <span className="introText">
   Hi my name is,
  </span>
  <h1 className="title">Abdul Saboor</h1>

  <span className="subTitle">
   I Develop Scalable Web Based Applications and Designs.
  </span>

  <p className="homeParagraph">
   I Code within required coding standards and styles to serve the exact need.
  </p>

  <div className="lowerHomeSection">
   <button className="contactBtn">
    <a href="#contact" className="flex">
     Contact Me <TbArrowBigRightLine className="icon" />
    </a>
   </button>

   <div className="scrollDiv">
    <a href="#about" className="flex">
     <h6 className="scroll">Scroll Down</h6> <TbChevronsDown className="icon" />
    </a>
   </div>
  </div>
  </div>


  {/* Right Div with Email address (it will also be available at wider screen) */}

   <div className="rightEmail">
   <div>
    <div className="emailAddress">
     <a href="https://mailto:youremail@gmail.com" target="_blank">Your Email@gmail.com</a>
    </div>

    <div className="line">

    </div>
   </div>
  </div>
 



  </section>
 );
}
 


export default Home;