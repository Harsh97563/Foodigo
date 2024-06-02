
import { useLocation } from "react-router-dom";


export default function Menu({active}: any){
    const isActive = active
    const location = useLocation()
    const pathname = location.pathname
    return (
      <div
        className={`fixed md:hidden top-0 w-[65vw] space-y-5 transition-all duration-300 bg-red-400 h-full ${
          isActive ? "left-0 bg-red-200" : "-left-72"
        }`}
      >
        <div className={`fixed top-5 transition-all ${
          isActive ? "left-5 duration-500" : "-left-72 duration-300 "
        }`}>
            <img width={150} src="images/logo2.png" alt="" />
        </div>
        <ul className="flex flex-col text-white w-full pt-10 text-xl text-center space-y-5 ">
          <li className={`${pathname === "/" ? " text-black" : ""}`}>
            <a href="/">Home</a>
          </li>
          <li
            className={`${
              pathname === "/menu" ? "underline text-red-500" : ""
            }`}
          >
            <a href="/menu">Menu</a>
          </li>
          <li
            className={`${
              pathname === "/aboutus" ? "underline text-red-500" : ""
            }`}
          >
            <a href="/aboutus">About Us</a>
          </li>
          <li
            className={`${
              pathname === "/order" ? "underline text-red-500" : ""
            }`}
          >
            <a href="/order">Order Online</a>
          </li>
          <li
            className={`${
              pathname === "/reservation" ? "underline text-red-500" : ""
            }`}
          >
            <a href="/reservation">Reservation</a>
          </li>
          <li
            className={`${
              pathname === "/contactus" ? "underline text-red-500" : ""
            }`}
          >
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
      </div>
    );
}