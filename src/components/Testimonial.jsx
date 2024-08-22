import React from 'react'
import Card from './Card'

import Googlesvg from '../images/Google.svg';
import Microsoftsvg from '../images/Microsoft.svg';
import Linkedinsvg from '../images/linkedin.svg';
import VectorEdusvg from '../images/VectorEdu.svg';
import PersonalisedLimg from '../images/PersonalizedLearn.svg';
import Affordabilityimg from '../images/Affordability.svg';
import IndustryPatnerimg from '../images/IndustryPatner.svg';
import InnovativeTechimg from '../images/InnovativeTech.svg';
import PersonalizedLearnimg from '../images/PersonalizedLearn.svg';
import Analyticsimg from '../images/Analytics.svg';
import imgpng from '../images/img.png';

import Avtar1 from '../images/avatar1.png';
import Avtar2 from '../images/avatar2.png';
import Avtar3 from '../images/avatar3.png';



const Testimonial = () => {
  return (
    <div className="company_containor">
      <h1 className="company_tittle">Trusted by the best</h1>
      <div className="companygrid">
        <div className="companylogo">
          <img src={Googlesvg} className="svg_logo" />
          <span className="logo_txt">Google </span>
        </div>
        <div className="companylogo">
            <img src={Microsoftsvg}className="svg_logo"/>
            <span className="logo_txt">Microsoft </span>


        </div>
        <div className="companylogo">
            <img src={Linkedinsvg} className="svg_logo"/>
            <span className="logo_txt">Linkedin </span>


        </div>
        <div className="companylogo">
            <img src={VectorEdusvg} className="svg_logo"/>
            <span className="logo_txt">Vector </span>


        </div>
      </div>
      <div className="part3">
        <div className="Featurecontainor">
          <div className="featurecontent">
              <div className="main_info">
                  
                      <h2 className="main_tittle">our competative advantages</h2>
                  
                  
              </div>
              <div className="feature_grid">
                    
                     <div className="feature_card">
                      <div className="icon_containor">
                          <img className="feature_svg" src={PersonalisedLimg}/>
                      </div>
                      
                      <div className="feature_tittle">
                          <h4>
                              Personalised learning
                          </h4>
                          <div className="feature_description"> 
                              <p className="main_descrip">offer tailored learning experince through Ai and machine learning to cater to individualstudents need</p>
                          </div>
                         
                      </div>
  
                     </div>
                     
                     <div className="feature_card">
                      <div className="icon_containor">
                          <img className="feature_svg" src={Affordabilityimg} />
                      </div>
                      
                      <div className="feature_tittle">
                          <h4>
                              Affordability
                          </h4>
                          <div className="feature_description">
                              <p>
                                  prove high quality education at an affordabele price point making it accesible to broder audience
                              </p>
                          </div>
  
                      </div>
  
                     </div>
                     
                     <div className="feature_card">
                      <div className="icon_containor">
                          <img className="feature_svg" src={IndustryPatnerimg} />
                      </div>
                      
                      <div className="feature_tittle">
                          <h4>
                              Industry and partnership
                          </h4>
                          <div className="feature_description">
                              <p>
                                  collobrate with well known companies and instituion to offer acceredited course and certification adding credibility to offering
                              </p>
                          </div>
  
                      </div>
  
                     </div>
                      
                      <div className="feature_card">
                          <div className="icon_containor">
                              <img className="feature_svg" src={InnovativeTechimg} />
                          </div>
                          
                          <div className="feature_tittle">
                              <h4>
                                  innovative technology
                              </h4>
                              <div className="feature_description">
                                  <p>
                                      utilize cutting edge technology such as arguemnted reality or virtual reality to create innovative learing experinces
                                   </p>
                              </div>
      
                          </div>
      
                         </div>
                      <div className="feature_card">
                      <div className="icon_containor">
                          <img className="feature_svg" src={PersonalizedLearnimg}/>
                      </div>
                      
                      <div className="feature_tittle">
                          <h4>
                              Response support
                          </h4>
                          <div className="feature_description">
                              <p>
                                  provide exceptional customer  support and assistance to student and educator
                               </p>
                          </div>
  
                      </div>
  
                     </div>
                       <div className="feature_card">
                      <div className="icon_containor">
                          <img className="feature_svg" src={Analyticsimg} />
                      </div>
                      
                      <div className="feature_tittle">
                          <h4>
                              Analytics and insights
                          </h4>
                         <div className="feature_description">
                          <p>
                              offer detailed program tracking and analytics to help student and teacher monitor and performance and make data based decision
                           </p>
                         </div>
  
                      </div>
  
                     </div>
  
  
              </div>
          </div>
  
      </div>
      
      </div>
      <div className="testimonial-container">
        <div className="testimonial-content">
            <h2 className="testimonial-title">
                What Others Say About Us
            </h2>
            <div className="testimonial-grid">  
                <Card content="“StudySync transformed our family's learning journey. Safe, interactive, and progress tracking features are invaluable for parents.”" src={Avtar1} name="Sarah Johnson" desc="8th Grade English Teacher" />
                <Card content="“StudySync transformed our family's learning journey. Safe, interactive, and progress tracking features are invaluable for parents.”" src={Avtar2} name="Sarah Johnson" desc="8th Grade English Teacher" />
                <Card content="“StudySync transformed our family's learning journey. Safe, interactive, and progress tracking features are invaluable for parents.”" src={Avtar3} name="Sarah Johnson" desc="8th Grade English Teacher" />
                
            </div>
        </div>
    </div>

      
      <div className="newsletter_containor">
          <div className="news_content">
           <div className="left">
             <img src={imgpng} loading=" lazy" alt="newsletter_image" />
           </div>
           <div className="right">
             <div className="news_info">
               <h3 className="news_tittle"> Get the latest update</h3>
               <p className="news_description"> Sign up for our newsletter</p>
             </div>
             <form className="news_form">
               <input className="new_email" placeholder=" Email"/>
               <button className="news_send_button">
                 send
               </button>
             </form>
             <div className="privacy_policy">
               By signing up to our new letter you agree to ours
               <a className="news_link"> Term and service</a>
               and
               <a className="news_link"> privacy policy</a>
             </div>
           </div>
          </div>
       </div>
       </div>
  )
}

export default Testimonial