

import './About.css';
import theme_patern from '../../assets/theme_pattern.svg';
import profile from '../../assets/nirupama.jpeg';

const About = () => {
  return (
    <div id="about" className="about">
       <div className="about-title">
         <h1>About me</h1>
         <img src={theme_patern} alt=""/>
        </div>        
         <div className='about-sections'>

            <div className="about-left">
               <img src={profile} alt=""/>
            </div>
          
           <div className='about-right'>
              <div className="about-para">
                <p>I am confident in my ability to deliver high-quality code and exceptional
                   user experiences.I am constantly seeking 
                    new challenges to further enhance my skills.</p>
               <p>I am drawn to the opportunity to work with a talented team
                   of developers who share the same passion for innovation and
                    excellence. I believe that my skills and experience 
                    align perfectly with the requirements of this role, 
                    and I am confident that I can make a significant impact on your projects.
                  </p> 
              </div>
          
              <div className="about-skills">
                 <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"80%"}}></hr></div>

                 <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}></hr></div>

                 <div className="about-skill"><p>Reactjs</p><hr style={{width:"70%"}}></hr></div>

                 <div className="about-skill"><p>Nodejs</p><hr style={{width:"60%"}}></hr></div>

                 <div className='about-skill'><p>MongoDB</p><hr style={{width:"70%"}}></hr></div>
              </div>

           </div>
        </div>
           <div className="about-acheivements">
              <div className="about-acheivement">
                 <h1>Fresher</h1>
              </div>
              <hr/>
              <div className='about-acheivement'>
                 <h1>4+</h1>
                 <p>PROJECT COMPLETED</p>
              </div>
           </div>

         </div>
    
    
  )
}

export default About
