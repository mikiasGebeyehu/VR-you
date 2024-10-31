import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from '../assets/logo.png'
import { navItems } from '../constants'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className='flex justify-between m-2 backdrop-blur-lg border-b border-neutral-700/800 sticky top-0 z-50'>
        <div className=' flex items-center flex-shrink-0 '>
            <img src={logo} alt="logo" width={30} height={30} className=""/>
            <p className='text-xl tracking-tight justify-center  '>VirtuaIR</p>
        </div>

        <div className='hidden lg:flex'>
            {navItems.map((navItem) => (
                <a href={navItem.href} className='p-5'>{navItem.label}</a>
            ))}
        </div>

        <div className='hidden lg:flex justify-center '>
            <a href=""><button className='border-2 px-3 py-2 m-2'>Sign In</button></a> 
            <a href=""><button className='bg-gradient-to-r from-orange-500 to-orange-900 p-2 rounded-md m-2'>Create an Acount</button></a>
        </div>

        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ?<X />: <Menu />}
            </button>

            {mobileDrawerOpen && (
                <div className="w-full fixed justify-center z-20 flex items-center right-0 p-12 bg-black/40 backdrop-blur-md rounded-full">
                  <div className="flex-col ">
                    <div className="flex items-center ml-12 px-12 ">
                        <ul className="flex-col items-center">
                          {navItems.map((navItem) => (
                             <a href=""> <li className="mt-5">{navItem.label}</li></a>
                          ))}
                        </ul>
                    </div>
                    
                    <div className='mt-5'>
                        <a href=""><button className='border-2 px-3 py-2 m-2'>Sign In</button></a> 
                        <a href=""><button className='bg-gradient-to-r from-orange-500 to-orange-900 p-2 rounded-md m-2'>Create an Acount</button></a>
                    </div>

                  </div>
                 
                </div>
              
            )}
        </div>

    </nav>
  )
}

export default Navbar
