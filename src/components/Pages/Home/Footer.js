import React from 'react';
import './Footer.css'

import indin from '../../img/icons8-linkedin-circled.gif'
import facebk from '../../img/icons8-facebook.gif'
import github from '../../img/icons8-github.gif'
import up from '../../img/icons8-scroll-up.gif'

const Footer = () => {
    return (
<footer class="footer items-center text-xl font-bold p-12  text-neutral-content px-18">
  <div class="items-center grid-flow-col">
   
    <p>Copyright © 2022 - Sajeeb Portfolio</p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  {/* <img src={github} alt="" />
   <img src={linkedin} alt="" />
   <img src={facebook} alt="" /> */}


<a   href="https://www.linkedin.com/in/md-sajeeb-sarker/"><img className='social-icon' src={indin} alt="" /></a>   
<a  href="https://github.com/sajeeb5506"><img className='social-icon' src={github} alt="" /></a>   
<a   href="https://www.facebook.com/profile.php?id=100073040528993"><img className='social-icon' src={facebk} alt="" /></a>   
<a   href="#home"><img className='social-icon' src={up} alt="" /></a>   

  

  </div>
</footer>
    );
};

export default Footer;