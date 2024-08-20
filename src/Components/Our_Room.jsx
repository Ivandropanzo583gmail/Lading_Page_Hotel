import { FaInstagram,  FaTwitter, FaFacebookF, FaLinkedinIn  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect } from 'react';



import AOS from "aos";
import "aos/dist/aos.css";

const Our = () => {

    useEffect(() => {
        AOS.init({duration:1200})
      })
  return (
    <div>
        <div className='text-center mt-20'>
            <h1 className="text-blue-500 text-2xl">Our <span className="text-orange-500 text-2xl">Room</span> </h1>
        </div>
        <div className="mt-20 block md:flex justify-center items-center">
            
           <div className='columns-3'>
            <div className="bg-blue-50  md:w-72 md:h-96 rounded-lg shadow-lg "  data-aos="fade-up">
                    <img src=" ./Our Room/unsplash_6anudmpILw4.png" alt=" " className="pl-3 pt-3"/>
                    <h3 className="text-blue-500 pt-10">Robert Fox </h3> 
                    <p className="pt-3">managing director</p>
                    
                <div className='flex justify-center items-center '>
                        <p className="pt-3 pr-5">(316) 555-0116</p>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                                
                            <a href='#' className='text-white flex justify-center items-center'><FaInstagram/></a>   
                        </div>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                                
                            <a href='#' className='text-white flex justify-center items-center'><FaFacebookF/></a>   
                        </div>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                            
                            <a href='#' className='text-white flex justify-center items-center '><FaTwitter/></a>   
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50 md:w-72 md:h-96 rounded-lg shadow-lg"  data-aos="fade-up">
                    <img src=" ./Our Room/unsplash_WfV4KscvvBQ.png" alt=" " className="pl-3 pt-3"/>
                    <h3 className="text-blue-500 pt-10">Wade Warren </h3> 
                    <p className="pt-3">Chef</p>
                    
                <div className='flex justify-center items-center '>
                        <p className="pt-3 pr-5">(480) 555-0103</p>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                                
                            <a href='#' className='text-white flex justify-center items-center'><FaInstagram/></a>   
                        </div>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                                
                            <a href='#' className='text-white flex justify-center items-center'><FaFacebookF/></a>   
                        </div>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                            
                            <a href='#' className='text-white flex justify-center items-center '><FaTwitter/></a>   
                        </div>
                    </div>
                </div>
                <div className="bg-blue-50 md:w-72 md:h-96 rounded-lg shadow-lg" data-aos="fade-up">
                    <img src=" ./Our Room/unsplash_8YG31Xn4dSw.png" alt=" " className="pl-3 pt-3"/>
                    <h3 className="text-blue-500 pt-10">Jenny Wilson </h3> 
                    <p className="pt-3">Reception</p>
                    
                <div className='flex justify-center items-center '>
                        <p className="pt-3 pr-5">(239) 555-0108</p>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                                
                            <a href='#' className='text-white flex justify-center items-center'><FaInstagram/></a>   
                        </div>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                                
                            <a href='#' className='text-white flex justify-center items-center'><FaFacebookF/></a>   
                        </div>
                        <div className='bg-gray-500  w-8 h-8  rounded-sm pt-3 '>
                            
                            <a href='#' className='text-white flex justify-center items-center '><FaTwitter/></a>   
                        </div>
                    </div>
                </div>
           </div>
        </div>
   



    </div>
  );
};

export default Our;
