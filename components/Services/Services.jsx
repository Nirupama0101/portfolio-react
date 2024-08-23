
import './Services.css';
import theme_patern from '../../assets/theme_pattern.svg';
import service_data from '../../assets/services_data.js';
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
       <div className="services-title">
         <h1>My Services</h1>
         <img src={theme_patern} alt=''/>
       </div>

       <div className="service-container">
          {service_data.map((service,index)=>{
            return <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

            <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt=''/>
            </div>
            </div>
          })}
       </div>
    </div>
  )
}

export default Services
