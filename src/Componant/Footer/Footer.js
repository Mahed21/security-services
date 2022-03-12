import React from 'react';
import './footer.css'




const Footer = () => {
    return (
        <div className='footer'>
            <div className='mt-5 container pt-5'>
          <div className='row row-cols-lg-2 row-cols-1'>
            <div className='col'>
            <h4 className='text-center head'>Sylhet Office</h4>
              <p className='text-center'>Nobarun 39, Sunapara, Shahjalal Uposhhor, Main Road, Sylhet.</p>
              <p className='text-center'>Mobile: 01733-820640/01775-174909 </p>
              <p className='text-center'>Email: bestonesspsyl@gmail.com</p>
            </div>

            <div className='col'>
              <h3 className='text-center head'>Head Office</h3>
              <p className='text-center'>2|2, R.K. Mission Road, Ittefaq moor</p>
            <p className='text-center'>(2nd Floor) (Near of Inqilab Bhaban), Motijheel, Dhaka-1203.</p>
            <p className='text-center'>Phone: 02-7125573, Mobile: 01723-911091</p>
            <p className='text-center'><i className="fa-solid fa-envelope-dot"></i>Email: bestonesspl20@gmail.com</p>
            </div>
          </div>
      </div>
            <h6 className="pt-3 pb-3 text-center">
           
                Safe The people and Properties
            </h6>
        
           
        </div>
    );
};

export default Footer;