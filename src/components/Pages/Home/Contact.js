import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './Contact.css';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tkljnrl', 'template_j5wxefp', e.target, 'tZ-9k7w37zvCQBt_F')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          Swal.fire(
           
            'Thanks for informing me!',
            'success'
          )
          e.target.reset();
      };
    return (
        // <div className='' id='contact'>
        //     <h1 className='text-center font-sans font-bold text-2xl  text-orange-600 mb-10'>Contact Me</h1>
        //     <form onSubmit={sendEmail} className='flex justify-center items-center flex-col '>
        //         <input class="input input-bordered input-info w-full max-w-xs mb-5" type="text" name='name' placeholder='your name' required />
        //         <input class="input input-bordered input-info w-full max-w-xs mb-5" type="email" name='email' placeholder='your email' required/>
        //       <textarea class="input input-bordered input-info w-full max-w-xs mb-5" typeof='textarea ' name='message' placeholder='Massage' required></textarea>
        //       <button class=" send-btn mb-5" type='submit' value='send '>Send</button>
        //     </form>

         
        // </div>
           <div className='mx-auto pb-8' id='contact'>
       <form class="form " onSubmit={sendEmail}>
      <div class="title">Contact</div>
      <div class="subtitle">For More info!</div>

      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" "  name='name' required />
        <div class="cut cut-short"></div>
        <label  class="placeholder">Name</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="email" placeholder=" " name='email' required/>
        <div class="cut cut-short"></div>
        <label  class="placeholder">Email</label>
      </div>
      <div class="input-container ic1">
        <input  id="lastname" class="input" type="text" placeholder=" "name='message' required/>
        <div class="cut "></div>
        <label  class="placeholder">Massage</label>
      </div>
      <button type='submit' class="submit-btn">submit</button>
    </form>
           </div>
    );
};

export default Contact;