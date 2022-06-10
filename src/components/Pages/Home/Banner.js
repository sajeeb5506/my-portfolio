import React from 'react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import './Banner.css';

import indin from '../../img/icons8-linkedin-circled.gif'
import facebk from '../../img/icons8-facebook.gif'
import github from '../../img/icons8-github.gif'
import up from '../../img/icons8-scroll-up.gif'

import Typical from 'react-typical'

const Banner = () => {
    return (
        <div className="relative  overflow-hidden" id='home'>
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            {/* <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg> */}
  
      
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-indigo-200 sm:text-5xl md:text-6xl ">
                  <span className="block xl:inline">Hello, I'M <span className=' text-orange-600'>SAJEEB</span>, </span>
                  {' '}
            
                  <span className="block  text-orange-600 xl:inline">
                  <Typical
                   loop={Infinity}
                   steps={[
                       'React Developer ',
                       2000,
                       'Full Stack Developer',
                       2000,
                       'MERN Developer',
                       2000,
                   ]}
                   
                   ></Typical>
                      
                       </span>

                </h1>
                <p className="mt-3 text-base text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-bold text-indigo-200">
                Knack of building applications with front and back end operations.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/contact"
                      className="resume-btn w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Hire Me
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a 
                    target='_blank'
                      href="https://drive.google.com/file/d/1c3-J2y-kfj2fymMziB0Zo1CMkfrcn2Hc/view"
                      className=" resume-btn w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Get Resume
                    </a>
                  </div>
                   
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* <img
            className="h-48 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full  "
            src="https://i.ibb.co/LzNGWnP/coding.jpg"
            alt=""
          /> */}
          <div className=" flex items-center justify-center gap-10 banner-icone">
          <a   href="https://www.linkedin.com/in/md-sajeeb-sarker/"><img className='social-icon' src={indin} alt="" /></a>   
                  <a  href="https://github.com/sajeeb5506"><img className='social-icon' src={github} alt="" /></a>   
                  <a   href="https://www.facebook.com/profile.php?id=100073040528993"><img className='social-icon' src={facebk} alt="" /></a>   
                  <a   href="#contact"><img className='social-icon' src={up} alt="" /></a> 
          </div>
        </div>
      </div>
    )
        
    
};

export default Banner;



