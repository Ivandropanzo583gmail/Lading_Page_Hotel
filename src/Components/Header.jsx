import React, { useState } from 'react';
import {FaInstagram,  FaTwitter, FaFacebookF,  FaYoutube, FaBars, FaTimes} from 'react-icons/fa';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return(
        <div>
        <div className="bg-cover md:h-64 h-96 w-screen bg-[url('./unsplash_kKvQJ6rK6S4.png')] ">
            <nav className=" text-white px-6 py-3">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        
                    </div>
                    <div className="hidden md:flex ">
                        <div className=" absolute left-20 top-10 columns-8">
                            <ul className="text-gray-300 ">
                                <li><a href="#" className='hover:text-gray-400'>Home </a>  </li>
                                <li><a href="#" className='hover:text-gray-400'>Rooms & Sultes </a>  </li>
                                <li><a href="#" className='hover:text-gray-400'>Services </a>  </li>
                                <li><a href="#" className='hover:text-gray-400 text-white'><button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transform transition duration-500 hover:scale-110 hover:bg-blue-700">
      About Us
    </button> </a>  </li>
                                <li><a href={"/Cabeçalho"} className='hover:text-gray-400'>Booking </a>  </li>
                            </ul>
                        </div>
                        <div className='absolute right-20 columns-5 top-10 min-md:hidden'>
                        
                        <a href='#' className='text-white'><FaInstagram/></a>
                        <a href="#" className="text-white"><FaFacebookF /></a>
                        <a href="#" className="text-white"><FaYoutube /></a>
                        <a href="#" className="text-white"><FaTwitter /></a>
                </div>
                    </div>
                
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-3 space-y-2 bg-blue-500">
                        <a href="/" className="block text-center hover:text-gray-400">Home</a>
                        <a href="/about" className="block text-center hover:text-gray-400">Rooms & Sultes </a>
                        <a href="/services" className="block text-center hover:text-gray-400">Services</a>
                        <a href="/projects" className="block text-center hover:text-gray-400">About</a>
                        <a href="/contact" className="block text-center hover:text-gray-400">Booking</a>
                    </div>
                )}
            </nav>
            <div className="flex justify-center items-center">
                <h1 className="text-orange-500 text-2xl md:absolute md:top-32 absolute top-52 "> About Us</h1>
                <div className="flex justify-center items-center ">
                    <ul className="text-white md:absolute md:top-40 columns-3 absolute top-64">
                        <li><a href="#" className='hover:text-gray-400'>Home</a> </li>
                        <li><a href="#" className='hover:text-gray-400'>Services </a> </li>
                        <li><a href="#" className='hover:text-gray-400'>Restuarant </a> </li>
                    </ul>
                </div>
             

               
            </div>
            

        </div>
    </div>
    )
}