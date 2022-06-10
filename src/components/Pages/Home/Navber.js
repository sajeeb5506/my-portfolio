import React, { useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import './Navber.css'

const navigation = [
  { name: 'Home',  href: '#home', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects',href: '#projects', current: false },
  
  
  { name: 'Skill', href: '#skill', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navber = () => {

  const [navber,setNavber]=useState(false);

  const changebackground = ()=>{
    if(window.scrollY >= 70){
      setNavber(true);
    }
    else{
      setNavber(false);
    }
  }
window.addEventListener('scroll',changebackground);
    return (
        <Disclosure as="nav" className={navber? 'active bg-gray-900 ' : 'bg-gray-900'}>
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">

                  <h1 className="block lg:hidden h-8 w-auto  text-indigo-200 text-3xl font-extrabold"> SAJEEB SARKER</h1>
                  <h1 className="hidden lg:block h-8 w-auto  text-indigo-200 text-3xl font-extrabold"> SAJEEB SARKER</h1>

                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                
                    </div>
                  </div>
                </div>
               
                 <div className="hidden sm:block sm:ml-6">
                 
                 {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-indigo-200' : 'text-gray-300 hover:bg-indigo-200 hover:text-orange-600',
                            'px-3 py-2 rounded-md text-xl font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                   <Link to='/blog' className=' text-gray-300 hover:bg-indigo-200 hover:text-orange-600 px-3 py-2 rounded-md text-xl font-medium'>Blog</Link>
                    </div>
              </div>
            </div>
  
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
               
              {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-indigo-200 hover:text-orange-600',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                       <Link to='/blog'  className=' text-gray-300 hover:bg-indigo-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium'>Blog</Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
};

export default Navber;

