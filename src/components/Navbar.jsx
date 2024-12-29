import React from 'react'
import Icon from '../assets/Icon.svg'
export const Navbar = () => {
    return (
        <nav className='bg-purple-400 flex justify-around items-center px-4 h-16 fixed w-full top-0 z-10 shadow-2xl'>
            <div className="logo font-bold text-3xl">
                <span className='text-purple-900'>&lt; </span>
                Pass
                <span className='text-purple-900'>OP/ &gt; </span>
            </div>
            <div className="">
                
            <img 
            width="48" 
            height="48" 
            src={Icon} 
            alt="github"
            title='Github'
            onClick={()=>window.open('https://github.com/mandeepsinghmankoo/')}
            />
                
            </div>

        </nav>
    )
}


export default Navbar