import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner/>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;