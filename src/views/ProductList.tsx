import ProductCard from "@/Components/ProductCard";
import P1 from "/public/P1.webp";
import Image, { StaticImageData } from "next/image";
import { Products } from "@/utils/mock";
import products from "/public/products.webp";
import Footer from "../Components/layout/Footer";
import P2 from "/public/P2.webp";
import P3 from "/public/P3.webp";
import { Input } from "@/components/ui/input"

const ProductList = () => {
  const productChecks = Products.slice(0, 3);
  return (
    <>
      <section className="px-20 justify-center h-1/2">
        <div
          className="text-center text-blue-700 font-bold text-sm  
             "
        >
          P R O M O T I O N S
        </div>

        <div
          className="text-center text-gray-900 font-bold text-4xl mt-2 mb-10
            "
        >
          Our Promotions Events
        </div>

        {/* Parent Container Flex */}
        <div className="flex w-full ">
          {/* Left Side Banner Container w-1/2  flex flex-col */}
          <div className="flex flex-col w-2/3 ">
            {/* Banner 1 */}
            <div className="bg-neutral-300 py-9 px-5 mb-4 h-44 flex-grow
             items-center relative">

              <div className="mt-9 ml-5">
             <div className="text-gray-900 font-bold text-3xl mt-2">
          GET UP TO 60%
         </div>

          <div className="text-gray-900 text-xl mt-2">
         For the summer season
         </div>
         
         <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
         <div className=" h-56 mb-4 mt-3 mr-12 
         ">
         <Image src={products} alt="products" className="w-full h-full" />
         </div>
         </div>
         </div>
         
         </div>
         


           
            {/* Banner 2 */}

            <div className="bg-neutral-800 py-9 px-5 h-48 text-center flex flex-col items-center
            ">
              <div className="text-neutral-100 font-bold text-4xl mt-2">
                GET UP TO 30% off
              </div>
              <div className=" text-neutral-100 text-lg mt-4">
                USE PROMO CODE
              </div>
              <div className="bg-neutral-600 w-96 items-center justify-center rounded-lg h-64
              py-1 ">
                <button className="rounded-xl">
                 <div className="text-white font-semibold text-lg rounded-xl
                 "> D I N E W E E K E N D S A L E</div>
                </button>
              </div>

            </div>
          </div>


          {/* Right SIde Banner Container w-1/2 flex */}
          <div className=" w-1/2 flex">
            {/* Banner 1 */}

           <div className="bg-orange-100 w-72 ml-8">
                   
                   <div className="ml-4 relative" style={{ transform: 'translateY(15px)' }} >
                    <div className="">Flex Sweatshirt</div>

                    <div className="flex flex-row absolute">
                      
                    <div className="text-lg relative z-10">$100.00</div>
                    <div className="ml-3 font-bold text-lg">$75.00</div>
                    </div>
                   </div>



                  <div className="mt-10">


                    
                <Image src={P2} alt="Product2" />
                </div>
           </div> 

            {/* Banner 2 */}
            <div className="bg-neutral-300 w-72 ml-4">
               
               
               <div className="ml-4 relative" style={{ transform: 'translateY(15px)' }} >
                    <div className="">Flex Sweatshirt</div>

                    <div className="flex flex-row absolute">
                      
                    <div className="text-lg relative z-10">$100.00</div>
                    <div className="ml-3 font-bold text-lg">$75.00</div>
                    </div>
                   </div>

               <div className="mt-9">
                <Image src={P3} alt="Product3" />
                </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div
          className="text-center text-blue-700 font-bold text-sm mt-28
           "
        >
          P R O D U C T S
        </div>

        <div
          className="text-center text-gray-900 font-bold text-4xl mt-2
            "
        >
          Check What We Have
        </div>
      </div>




      <div className="flex justify-evenly mt-10 py-6">
        {productChecks.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}
          />
        ))}

        {/*<ProductCard title="But" price={934} img={P1}/>
               <ProductCard title="Buy" price={834} img={P1}/>
               <ProductCard title="Why" price={734} img={P1}/>
                */}
      </div>


        <div className="text-5xl font-extrabold text-zinc-800 flex justify-end mt-40">
        Unique and Authentic Vintage<br/> Designer Jewellery
        </div>
      <div className="bg-gray-50">
      <div className='flex w-full '>
       <div className='flex w-1/2 relative'>
       <div className='text-8xl font-extrabold opacity-30 ml-20 z-0 mt-16'>
       Different<br/> from<br/> others
       </div>
       <div className='z-40 flex flex-col items-start justify-start absolute top-0 left-0 mt-16
        ml-20'>

        

      <div className='flex flex-wrap'>
       {/* 1st head*/}
      <div className='w-1/2'>
      <div className='mt-5 font-extrabold'>
      Using Good Quality Materials
      </div>
      <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
     </div>

     {/* 2nd head*/}
     <div className='w-1/2'>
     <div className='mt-5 font-extrabold'>
        100% Handmade Products 
      </div>
      <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
      </div>

      {/* 3rd head*/}
     <div className='w-1/2'>
     <div className='mt-5 font-extrabold'>
     Modern Fashion Design
      </div>
      <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
      </div>

      {/* 4th head*/}
     <div className='w-1/2'>
     <div className='mt-5 font-extrabold'>
     Discount for Bulk Orders
     </div>
     <div>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</div>
     </div>
     </div>
      


       </div>
  
 





       </div>

       <div className='flex w-1/2'>
        
        <div className='mt-14 flex'>
            <Image src={P1} alt="P1" className="ml-10  w-72" />
        </div>
            
            <div>
            <p className="mt-32 ml-12">
            This piece is ethically crafted in our small family-owned<br /> workshop in Peru with 
            unmatched attention to detail and care.<br /> The Natural color is the actual
            natural color of the fiber,<br /> undyed and 100% traceable.<br />
           </p>

           <div className='ml-12 mt-5'>
           <button
          type="button"
          className="text-white 
          bg-zinc-900 py-3.5 px-12 mt-4
          half-rounded mb-auto "
         >
          Start Shopping 
        </button>
           </div>
            </div>

        </div>

      </div>








      </div>



       
      <div className="relative mb-52 justify-center">
     <div className="z-10">
    
     <div className="font-extrabold text-4xl text-gray-800 text-center mt-40">
      Subscribe Our Newsletter</div>
  
     <div className=" text-center mt-6 text-base">Get the latest information and promo offers 
     directly</div>
     </div>
     <div className="absolute inset-0 flex items-center justify-center z-0 mt-28">
     <div className="text-9xl text-center font-extrabold mt-40 opacity-10 mb-64">
      Newsletter</div>
     </div>
     <div className="flex justify-center ">
     
     <Input className="w-80 border-spacing-0 border border-gray-950 mt-28" 
            placeholder="Input email address"/>

     </div>
     </div>





    </>
  );
};

export default ProductList;

