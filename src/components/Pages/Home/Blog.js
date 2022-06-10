import React from 'react';
import './Blog.css';
import Typical from 'react-typical'
const Blog = () => {
    return (
<div className='bg-gray-900'><button class="submit-btn"> <a href="https://sajeeb-portfolio.netlify.app/">Back to home Page ... </a></button>
        <div class="hero min-h-screen ">
        
  <div class="hero-content text-center">
    <div class="max-w-md">
     
    <h1 class="text-5xl font-bold mb-12 text-red-500">
      <Typical
                   loop={Infinity}
                   steps={[
                       'Coming Soon...',
                       2000,
                       'Please wait a few days...',
                       2000,
                     
                   ]}
                   
                   ></Typical>
        
        </h1>
      
     
      <p class="py-6"></p>
      
    </div>
  </div>

</div>

</div>
     
  
    );
};

export default Blog;