import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner/>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Skill/>
            <Footer/>
            
        </div>
    );
};

export default Home;