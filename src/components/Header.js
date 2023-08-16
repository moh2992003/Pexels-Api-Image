import React, { useState, useEffect } from 'react';
import Menu from '../assests/Images/Logos/bars-solid.png';

const Header = () => {
    const ABOUT_URL = 'https://portoflio-f2869.web.app/';
    const CONTACT_URL = 'https://api.whatsapp.com/send?phone=0201006399253';

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    };
    

    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 #808080 z-10 text-white'>
            <div className='py-6 px-4'>
            <h1 className='sm:text-3xl md:text-4xl hover:text-pink-600 duration-200'>Mohamed Alkhyat</h1>
            </div>    
    
            <ul className='hidden md:flex lg:mr-15'>
                <li className='py-6 px-4 text-2xl hover:text-pink-600 duration-200'><a href={ABOUT_URL}>About</a></li>
                <li className='py-6 px-4 text-2xl hover:text-pink-600 duration-200'><a href={CONTACT_URL}>Contact</a></li>
            </ul>

            {/* Burger Icon */}
    
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <img src={Menu} onClick={handleClick} style={{ width: "25px", margin: "0 15px", cursor: 'pointer' }} /> : <img src={Menu} onClick={handleClick} style={{ width: "25px", margin: "0 15px", cursor: 'pointer' }} />}
            </div>

            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white"} >
                <li className='py-8 px-6 text-4xl hover:text-pink-600 duration-200'><a href='https://portoflio-f2869.web.app/'>About</a></li>
                <li className='py-8 px-6 text-4xl hover:text-pink-600 duration-200'><a href='https://api.whatsapp.com/send?phone=0201006399253'>Contact</a></li>
            </ul>
            </div>
  )
}

export default Header
