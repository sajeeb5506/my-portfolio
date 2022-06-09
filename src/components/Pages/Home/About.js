import React from 'react';
import './About.css'
const About = () => {
    return (
        <div class="  px-8 ">
           <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 text-center'>About Me</h1>
           <div className="flex items-center justify-between about-div ">
               
                   <div className="">
                <h1 className='text-4xl tracking-tight font-extrabold text-gray-900  mb-5'>Education</h1>
                  <h2 className='text-3xl font-sans font-bold' >SSC 2017(science)</h2>
                  <p className='text-2xl font-serif font-bold text-orange-600 mb-5'>Sobuj School Kanan & college </p>
                  <h2 className='text-3xl font-sans font-bold'>HSC 2019(science)</h2>
                  <p className='text-2xl font-serif font-bold text-orange-600 mb-5'>Islamia Govt College</p>
                  <h2 className='text-3xl font-sans font-bold'>BBA 2019-20 sessoin(Physics Department)</h2>
                  <p className='text-2xl font-serif font-bold text-orange-600 mb-5'>National University, Gazipur , Bangladesh</p>
                  <h2 className='text-3xl font-sans font-bold'>Programming</h2>
                  <p className='text-2xl font-serif font-bold text-orange-600 mb-5'>Programming Hero , Youtube , Google</p>
                  </div>
               
             
                   <div className="">
              <h1  className='text-4xl tracking-tight font-extrabold text-gray-900  mb-5'> Programming Skill</h1>
              <h2 className='text-2xl font-serif font-bold text-orange-600 '>html</h2>
              <p><progress class="progress progress-success w-56" value="90" max="100"></progress>   </p>
              <h2 className='text-2xl font-serif font-bold text-orange-600'>Css</h2>
              <p><progress class="progress progress-success w-56" value="70" max="100"></progress></p>
              <h2 className='text-2xl font-serif font-bold text-orange-600'>JavaScript</h2>
              <p><progress class="progress progress-success w-56" value="65" max="100"></progress></p>
              <h2 className='text-2xl font-serif font-bold text-orange-600'>React</h2>
              <p><progress class="progress progress-success w-56" value="70" max="100"></progress></p>
              <h2 className='text-2xl font-serif font-bold text-orange-600'>Node Js</h2>
              <p><progress class="progress progress-success w-56" value="60" max="100"></progress></p>
              <h2 className='text-2xl font-serif font-bold text-orange-600'>MongoDb</h2>
              <p><progress class="progress progress-success w-56" value="65" max="100"></progress></p>
              <h2 className='text-2xl font-serif font-bold text-orange-600'>Firebase</h2>
              <p><progress class="progress progress-success w-56" value="70" max="100"></progress></p>
              </div>
       
      </div>
        
                
        
      </div>
      
    );
};

export default About;