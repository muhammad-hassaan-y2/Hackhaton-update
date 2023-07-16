import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.webp'
import Link from 'next/link'
import P1 from '/public/P1.webp'


const Footer = () => {
  return (
    <div>

        
       
     
      






<section className="px-20 justify-center ">       

        {/* Parent Container Flex */}
        <div className="flex w-full mt-20">


          {/* Left Side Banner Container w-1/2  flex flex-col */}
          <div className="flex flex-col ">
            {/* Banner 1 */}
           
           <div>
           <Image src={logo} alt="logo" className="w-40" />
           </div>
           
           <div className='mt-10 font-medium text-gray-600'>
           Small, artisan label that offers a thoughtfully curated collection<br />
            of high quality everyday essentials made.
           </div>

         


           
            {/* Banner 2 */}
               
               <div>

               </div>
            
            </div>
              
              <div className='ml-32'>
              <div className='text-xl text-gray-600 font-bold'>Company</div> 
                <ul className='mt-3'>
                    <li className='mt-2 font-medium text-gray-600'>About</li>
                    <li className='mt-2 font-medium text-gray-600'>Terms of Use</li>
                    <li className='mt-2 font-medium text-gray-600'>Privacy Policy</li>
                    <li className='mt-2 font-medium text-gray-600'>How it Works</li>
                    <li className='mt-2 font-medium text-gray-600'>Contact Us</li>
                </ul>
              </div>





          {/* Right SIde Banner Container w-1/2 flex */}
          <div className=" w-auto flex ">
            {/* Banner 1 */}
            <div className='ml-40'>
                <div className='text-xl text-gray-600 font-bold'>
                   Support </div>
                <ul className='mt-3'>
                    <li className='mt-2 font-medium text-gray-600'>Support Carrer</li>
                    <li className='mt-2 font-medium text-gray-600'>24h Service</li>
                    <li className='mt-2 font-medium text-gray-600'>Quick Chat</li>
                </ul>
              </div>
            

            {/* Banner 2 */}

            <div className='ml-40'>
               <div className='text-xl text-gray-600 font-bold'>
                Contact</div>
                <ul className='mt-3'>
                    <li className='mt-2 font-medium text-gray-600'>Whatsapp</li>
                    <li className='mt-2 font-medium text-gray-600'>Support 24h</li>
                </ul>
              </div>
            
          </div>
        </div>
      </section>




      
      <div className='border-t border-gray-950 border-opacity-50 mt-36'></div>
    <div className="flex w-full ">
    
       <div className='ml-28 mt-6 mb-5 text-slate-700 text-lg'>
        Copyright © 2022 Dine Market</div> 


        {/* Right SIde Banner Container w-1/2 flex */}
       <div className=" w-auto flex ">
         {/* Banner 1 */}
        <div className='ml-96  mt-6 mb-5 text-slate-700 text-lg'>
    
         Design by.<span className='font-bold text-black'> Weird Design Studio</span>
         </div>
  

         {/* Banner 2 */}

        <div className='ml-96 mt-6 mb-5 text-slate-700 text-lg flex-row'>
     

           Code by.<span className='font-bold text-black'> shabrina12 on github</span> 
             </div>
  
           </div>
            </div>



            </div>
   
  )
}

export default Footer