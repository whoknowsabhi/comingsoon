import React from 'react';
import logo from '../assets/images/2.gif';
import robot from '../assets/images/brobo.webp';
import backgroundVideo from '../assets/images/bgvideo.mp4'

function ComingSoon() {
  return (
    <>
      <section className='coming '>
      <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 object-cover w-full h-full z-[-1]"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
        
        
        <div className="container">
          
          <div className="flex flex-col lg:flex-row  items-center">
            <div className="lg:w-1/2">
                  <div className="logo-wrapper mt-0">
                    <img
                      src={logo}
                      alt="logo"
                    />
                </div>
              
          
                <div className="text-info  ">
                 
                  <h2 className=' leading-tight font-extrabold tracking-wider text-5xl md:text-7xl text-[#4feaff] '>COMING <span className="soon  text-7xl md:text-9xl">S00N
                    </span></h2>
               
                
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className='  flex items-center'>
              <img className=' h-auto w-auto robot'
                      src={robot}
                      alt="robot"
                    />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComingSoon;
