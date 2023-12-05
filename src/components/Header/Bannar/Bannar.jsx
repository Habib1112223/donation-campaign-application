// eslint-disable-next-line no-unused-vars
import React from 'react';
import './banner.css';


const Bannar = ({setSearchItem}) => {

      const handleSubmit = (e)=>{
            e.preventDefault();
            const searchValue = e.target.category.value;
            setSearchItem(searchValue);
      }

      return (
            <div className={`px-2 lg:px-0 banner`}>
                  <div className="pt-[120px] pb-[200px] flex justify-center items-center flex-col">
                <h1 className="text-[#0B0B0B] lg:text-5xl text-3xl text-center font-bold">I Grow By Helping People In Need</h1>
                <div className="mt-[40px]">
                  <form action="" onSubmit={handleSubmit}  className="pl-4 border-[#DEDEDE] border-2 rounded-lg bg-white">
                        <input className='lg:w-[360px] outline-none' name="category" type="text" placeholder='Search here' />
                        <button className='bg-[#FF444A] text-white py-4 px-7 rounded-r-lg text-base font-semibold' type="submit">Search</button>
                  </form>
                </div>
            </div>
            </div>
      );
};

export default Bannar;