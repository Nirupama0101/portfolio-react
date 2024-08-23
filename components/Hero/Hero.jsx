
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css';
import profile_img from '../../assets/nirupama.jpeg'
import resume from '../../assets/niru.pdf';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt=''/>
      <h1><span>I am Nirupama Prusty,</span><br/>Frontend Devloper.</h1>
      <p>I am writing to express my strong interest in the Entry Level Frontend Developer position. 
        I am excited about the opportunity to contribute to your team and help create immersive digital experiences.</p>

    <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href={resume}>My Resume</a></div>
    </div>
    </div>
  )
}

export default Hero
