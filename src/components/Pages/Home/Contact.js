import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

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
        <div className=' bg-slate-500 mb-5'>
            <h1 className='text-center font-sans font-bold text-2xl mb-5'>Contact Me</h1>
            <form onSubmit={sendEmail} className='flex justify-center items-center flex-col '>
                <input class="input input-bordered input-info w-full max-w-xs mb-5" type="text" name='name' placeholder='your name' required />
                <input class="input input-bordered input-info w-full max-w-xs mb-5" type="email" name='email' placeholder='your email' required/>
              <textarea class="input input-bordered input-info w-full max-w-xs mb-5" typeof='textarea ' name='message' placeholder='Massage' required></textarea>
              <button class="btn  btn-primary mb-5" type='submit' value='send '>send</button>
            </form>
        </div>
    );
};

export default Contact;