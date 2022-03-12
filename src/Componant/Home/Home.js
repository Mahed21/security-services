import React from 'react';
import img from '../../security_service.png'
import img2 from '../../security-guard-services-500x500.jpg'
import img3 from '../../swaraj-men-management-pvt-ltd-sabarmati-ahmedabad-security-services-ljlrleqgi3.jpg'
import logo from '../../1-rem.png'
import banner from '../../secu-svg.jpg'
import './Home.css'

const Home = () => {

    return (
   <div className='mt-5'>
           
      <div className='container'>
      <div className='row'>
            <div className='col-lg-6 col-12 mb-2'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>


            <div className='col-lg-6 col-12 mt-3'>
            
             <img src={logo} className="d-block w-100 mx-auto  img-fluid " alt=""/>
             <h5 className='text-center mt-5'>Safe the people and properties</h5>
              <div className='text-center mt-3'><h2 className='profile-text mt-3 ps-4 pe-4'>PROFILE</h2></div> 
             
            </div>
            

        </div>
        </div>
       


        {/* Our security Training Include */}
        <div className='container  mb-3'>
          <div className='container'>
         
          
          <h3 className='mt-5 mb-3'>Our security Training Include</h3>
          
        <div className='row'>
          
          <div className='col-lg-4 col-12 security col1'>
            <h5 className=''>1. Basic Knowledge & Idea on Security</h5>
            <h5 className=''>2. Sense Of Duties & responsibility</h5>
            <h5 className=''>3. Personal hygine</h5>
            <h5  className=''>4. Conduct & behavior</h5>
            <h5  className=''>5. Physical Training & fitness</h5>
          

          </div>
          <div className='col-lg-4 col-12 security col1'>
            <h5 className= ''>6. Case & Safty</h5>
            <h5 className=''>7. Vehicles Control</h5>
            <h5 className=''>8. Maintain Register & record</h5>
            <h5 className=''>9. Time & bearing</h5>
            <h5 className=''>10. Discipline</h5>

          </div>
          <div className='col-lg-4 col-12'>

         
         </div>
          
         

          </div>
          </div>
          {/* Why choose us */}

          <div className='container'>
          <h3 className='mt-5 text-center'>Why Choose Us</h3>
           <div className='border mx-auto mb-2'></div>
           <div className='border1 mx-auto mb-2'></div>
           <div className='border2 mx-auto mb-2'></div>
          <div className='row row-cols-lg-2 row-cols-1 mt-4'>
          
          <div className='col1'>
            <h3>Inspection & Supervisor</h3>
            <h5>Regular Inspection and supervisor will be arranged by us to ensure proper services. Our inspection and supervisor are well trained and mainly they are from Military background</h5>

             </div>
          <div className='col1'>
            
            <h3>Verification of Individual</h3>
            <h5>Verification from police authority and by oue own arrangement is ensured before we put someone on duty</h5>

           </div>
          
          

          </div>
          <div className='row-cols-lg-2 row cols-12 mt-4'>
          <div className='col1'>
             <h3>Reserve and replacement</h3>
            <h5>Our maintain reserve for replacement incase of any unauthorized 
              absenteeism. We shall not allow any of our client to face such problems.
            </h5>

          </div>
          <div className='col1'>
             <h3>Payment System</h3>
            <h5>Cheque or pay order in any schedule bank in Bangladesh through by the company's account.</h5>

          </div>

          </div>

          </div>
          </div>
      
      
             


        {/* Contact  section*/}

        </div>
        

         
         


    );
};

export default Home;