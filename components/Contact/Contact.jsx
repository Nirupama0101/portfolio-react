
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
 

   const onSubmit = async (event) => {
      event.preventDefault();
      // setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e8bd7e8d-d32d-4b1a-9363-2ce3d60b496d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
      //   setResult("Form Submitted Successfully");
        //event.target.reset();
        alert(response.message);
      // } else {
      //   console.log("Error", data);
      //   setResult(data.message);
      }
    };

    return (
    <div id="contact" className='contact'>
      <div className="contact-title">
         <h1>Get in touch</h1>
         <img src={theme_pattern} alt=""/>
      </div>

      <div className="contact-section">
         <div className="contact-left">
            <h1>Lets talk</h1>
            <p>I am currently available to take on new projects,so feel free
                to send me a message about anything that you want me to work on.
                You can contact any time.
                 </p>
            
           <div className="contact-details">
              <div className="contact-detail">
                   <img src={mail_icon} alt=""/><p>nirupamaprusty66204@gmail.com</p>
              </div>

              <div className="contact-detail">
                  <img src={call_icon} alt=""/><p>+7682-078-119</p>
              </div>

              <div className="contact-detail">
                 <img src={location_icon} alt=""/><p>Hyderabad,Telengana</p>
              </div>
           </div>
         </div>

         <form onSubmit={onSubmit} className='contact-right'>
             <label htmlFor="">Your Name</label>
             <input type="text"placeholder='Enter Your Name' name='name'/>
             <label htmlFor="">Email</label>
             <input type="email" placeholder='Enter Your Email' name='email'/>
             <label htmlFor="">Enter Your Message Here</label>
             <textarea name="message" rows="8">Enter your message</textarea>
             <button type="submit" className='contact-submit'>Submit Now</button>
         </form>
      </div>
    </div>
  )
}

export default Contact
