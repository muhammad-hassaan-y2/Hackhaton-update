import React from 'react';
import { ShoppingCart, ShoppingBag, Search } from "lucide-react";


const Searchbar = () => {
  return (
    
    <div className='flex justify-between items-center border'>
     <Search /> <input placeholder="What are you looking for" className='px-16' />
    </div>
  );
};

export default Searchbar;
