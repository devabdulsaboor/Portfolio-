import React from "react";
import './skills.css';
import {TbBrandReactNative} from 'react-icons/tb';
import {IoLogoJavascript} from 'react-icons/io';
import {IoLogoSass} from 'react-icons/io';
import {SiCss3} from 'react-icons/si';
import {FaHtml5} from 'react-icons/fa';
import {CgFigma} from 'react-icons/cg';
import {SiAdobexd} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';

const Skills = () => {
 return (  
  <section id="skill" className="skills container section">
   <div className="sectionTitle">
   <div className="sectionTitle">
    <span className="titleNumber">02.</span>
    <h5 className="titleText">Skills
    <div className="underline"><span></span></div></h5>
   </div>
   </div>

  {/* Skills Container */}

  <div className="skillsContainer Grid">
  {/*  Single Group Of skills */}
  <div className="skillGroup">
   <div className="groupTitle">
    <h2 className="title">Web Development</h2>
    <span className="subTitle"> 6 Months Of Experience</span>
   </div>
    
   <div className="generalSkills">
   {/* Single Skill Div */}
   <div className="singleSkill">
    <div className="iconBox flex">
    <TbBrandReactNative className="icon" />
    </div>
    <span className="skillName">React</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <IoLogoJavascript className="icon" />
    </div>
    <span className="skillName">Javascript</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <SiCss3 className="icon" />
    </div>
    <span className="skillName">CSS</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <IoLogoSass className="icon" />
    </div>
    <span className="skillName">Sass</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <FaHtml5 className="icon" />
    </div>
    <span className="skillName">HTML</span>
   </div>

 
   </div> 
  </div>

  <div className="skillGroup">
   <div className="groupTitle">
    <h2 className="title">UI/UX Design</h2>
    <span className="subTitle"> 6 Months Of Experience</span>
   </div>
    
   <div className="generalSkills">
   {/* Single Skill Div */}
   <div className="singleSkill">
    <div className="iconBox flex">
    <CgFigma className="icon" />
    </div>
    <span className="skillName">Figma</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <SiAdobexd className="icon" />
    </div>
    <span className="skillName">XD</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <SiAdobephotoshop className="icon" />
    </div>
    <span className="skillName">Photoshop</span>
   </div>

   </div> 
  </div>
{/* 
  <div className="skillGroup">
   <div className="groupTitle">
    <h2 className="title">Other Skills</h2>
    <span className="subTitle"> 6 Months Of Experience</span>
   </div>
    
   <div className="generalSkills">
   {/* Single Skill Div 
   <div className="singleSkill">
    <div className="iconBox flex">
    <TbBrandReactNative className="icon" />
    </div>
    <span className="skillName">React</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <IoLogoJavascript className="icon" />
    </div>
    <span className="skillName">Git</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <SiCss3 className="icon" />
    </div>
    <span className="skillName">CSS</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <IoLogoSass className="icon" />
    </div>
    <span className="skillName">Sass</span>
   </div>

   <div className="singleSkill">
    <div className="iconBox flex">
    <FaHtml5 className="icon" />
    </div>
    <span className="skillName">HTML</span>
   </div>

 
   </div> 
 </div> */}


  </div>

  </section>
 );
}
 


export default Skills;