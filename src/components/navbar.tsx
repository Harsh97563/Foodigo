import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Menu from "./menu";

export default function Navbar(){
    const [isActive, setIsActive] = useState(false)
    const location = useLocation()
    const pathname = location.pathname
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      }, []);
    return (

        <div className={`fixed z-50 transition-all duration-500 w-full ${isScrolled? " pt-0":"pt-12"} `}>
            <Menu active={isActive}/>
            <div className={`flex transition duration-500 h-full items-center justify-between md:justify-evenly p-4 w-full ${isScrolled? "bg-red-200 border-b border-red-600":""}`}>
                <div className=" w-[20vw] md:w-[8vw]">
                    <a href="/">
                    <img src="images/logo2.png" alt="" />
                    </a>
                </div>
                <div>
                    <ul className=" hidden md:flex space-x-6 text-gray-900">
                        <li className={`${pathname === '/'? "underline text-red-500": ""}`}><a href="/">Home</a></li>
                        <li className={`${pathname === '/menu'? "underline text-red-500": ""}`}><a href="/menu">Menu</a></li>
                        <li className={`${pathname === '/aboutus'? "underline text-red-500": ""}`}><a href="/aboutus">About Us</a></li>
                        <li className={`${pathname === '/order'? "underline text-red-500": ""}`}><a href="/order">Order Online</a></li>
                        <li className={`${pathname === '/reservation'? "underline text-red-500": ""}`}><a href="/reservation">Reservation</a></li>
                        <li className={`${pathname === '/contactus'? "underline text-red-500": ""}`}><a href="/contactus">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex space-x-2">
                    <button className="text-sm md:text-xl bg-red-500 p-2 rounded-xl px-4 md:px-6 text-white font-medium">Login</button>
                    <button
                    className="flex md:hidden" 
                    onClick={()=> setIsActive((prev) => !prev)}
                    >
                        {isActive ? <X width={30} height={30} /> :<MenuIcon width={30} height={30} />}
                        </button>
                </div>
            </div>
        </div>
    )
}