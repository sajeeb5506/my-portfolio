import React from 'react';
const products = [
    {
      id: 1,
      name: 'ITATOOLS',
      link: 'https://tool-manufacturers.web.app/',
      imageSrc: ' https://i.ibb.co/qgLX35H/tools-pmg.png',
      imageAlt: "web-img",
      technologies: ' React Js, Node, Express, MongoDB, Firebase Hosting and Authentication,Heroku, Tailwind CSS, DaisyUI, React Router, React Responsive Carousel, React Hook Form, and   React Query.',
      features: ' Less than the minimum order quantity when the buyer buys their product And cannot order more than the total amount. Buyers can e-pay their products online if they want At the same time the order can be canceled.An admin panel has been created on this website. ',
    },
//    Admin can make any user admin if he wants. They Can see all users and delete users. Admin can delete products if payment is notcompleted successfully.
    {
      id: 2,
      name: 'CAR DEALER',
      link: 'https://car-dealer-cccff.web.app/',
      imageSrc: 'https://raw.githubusercontent.com/sajeeb5506/tool-manufacturers-cleint/main/src/assets/img/cardeler.jpg',
      imageAlt: "web-img",
      technologies: ' React Js, Node, Express, MongoDB, Firebase Hosting and Authentication, Heroku,React Router, and React hot toast.',
      features: 'Less than the minimum order quantity when the buyer buys their product And cannot order more than the total amount. Buyers can e-pay their products online if they want At the same time the order can be canceled. The seller will not be able to manage his items without logging in.The website is Responsive for mobile devices.',
    },
    {
      id: 3,
      name: 'WEDDING PHOTOGRAPGY',
      link: 'https://wedding-photography-71a28.web.app/',
     
      imageSrc: 'https://i.ibb.co/dKGD6wq/wedingph.png',
      imageAlt: "web-img",
      technologies: ' React Js, Firebase Hosting and Authentication, and React Router.',
      features: 'You can buy photography packages through this website for different Ceremonies. You must be logged in to book packages. If the booking is done without login then it will take you to the login page. The website is Responsive for mobile devices.',
    },

  
    // More products...
  ]
const Projects = () => {

    return (
        <div className="" id='projects' >
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-orange-600 text-center">Projects</h2>
  
          <div className="my-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mt-12">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full "
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-3xl  text-indigo-200 mb-2 font-serif">
                       {product.name}
                     
                    </h3>
                    <p className="text-sm font-medium text-indigo-200 mb-2"><span className='text-orange-600 font-bold'>Technologies Used: </span> {product.technologies}</p>
                    <p className="text-sm font-medium text-indigo-200"><span className='text-orange-600 font-bold'>Features: </span> {product.features}</p>
                    <a href={product.link} target='_blank'>
                       {/* <span aria-hidden="true" className="absolute inset-0" />  */}
                        <button class="send-btn mt-5">Live</button>
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Projects;