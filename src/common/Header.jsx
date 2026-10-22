import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronDown } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../assets/Logo/logo-white.png"

export default function Header() {

    const [showmenu, setshowmenu] = useState(false)
    const [showsubmenu, setshowsubmenu] = useState(false)

    console.log(showsubmenu)

    const hidemenu = () => {
        setshowmenu(!showmenu)
    }

    const submenu = () => {
        setshowsubmenu(!showsubmenu)

    }
    const showmenu2 = (event) => {
        console.log(event)
    }

    return (

        <header className="bg-[#2c423f] text-white shadow-md sticky top-0 left-0 z-[9999]">
            <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
                <div className="flex justify-between items-center  py-2 md:py-4 ">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        {/* Replace with your SVG icon */}
                        {/* <div className="text-yellow-600 text-xl">🍽️</div>
                        <span className="text-2xl font-serif font-bold tracking-widest">BISTLY</span> */}
                        <Link to={'/'}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center relative">
                        <div className="relative group">
                            <Link to={'/'} className="hover:text-yellow-400 flex items-center gap-1 relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 group-hover:after:w-full">
                                Home <FaChevronDown className="text-sm" />
                            </Link>
                            {/* Submenu */}
                            <div className="absolute top-full py-6 left-0 w-40 bg-[#2c423f] text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                <Link to="" className="block px-4 py-2 hover:text-yellow-400">Home restaurent</Link>
                                <Link to="" className="block px-4 py-2 hover:text-yellow-400">Home cafe</Link>
                                <Link to="" className="block px-4 py-2 hover:text-yellow-400">Home desert</Link>
                            </div>
                        </div>
                        <Link to={'/contact'} className="hover:text-yellow-400 relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">About us</Link>

                        <div className="relative group">
                            <Link to={'/menu'} className="hover:text-yellow-400 flex items-center gap-1 relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 group-hover:after:w-full">
                                Menu <FaChevronDown className="text-sm" />
                            </Link>
                            {/* Submenu */}
                            <div className="absolute top-full py-4 left-0 w-40 bg-[#2c423f] text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                <Link to="/breakfast" className="block px-4 py-2 hover:text-yellow-400">Breakfast</Link>
                                <Link to="/lunch" className="block px-4 py-2 hover:text-yellow-400">Lunch</Link>
                                <Link to="/dinner" className="block px-4 py-2 hover:text-yellow-400">Dinner</Link>
                            </div>
                        </div>
                        <div className="relative group">
                            <Link to={'/menu'} className="hover:text-yellow-400 flex items-center gap-1 relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 group-hover:after:w-full">
                                pages <FaChevronDown className="text-sm" />
                            </Link>
                            {/* Submenu */}
                            <div className="absolute top-full py-4 left-0 w-40 bg-[#2c423f] text-white rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                <Link to="/breakfast" className="block px-4 py-2 hover:text-yellow-400">Breakfast</Link>
                                <Link to="/lunch" className="block px-4 py-2 hover:text-yellow-400">Lunch</Link>
                                <Link to="/dinner" className="block px-4 py-2 hover:text-yellow-400">Dinner</Link>
                            </div>
                        </div>

                        <Link to={'/contact'} className="hover:text-yellow-400 relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
                    </nav>
                    {/* Reservation Button */}
                    <div className="hidden md:block">
                        <a className="bg-yellow-600 hover:bg-yellow-500 text-white px-5 py-2 rounded-sm font-semibold text-sm">
                            RESERVATION
                        </a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={hidemenu} id="mobile-menu-button" className="focus:outline-none text-yellow-300 text-2xl">
                            ☰
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden py-5  transition-all duration-500 ease-in-out ${showmenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`} >
                    {/* {
                    showmenu && ( */}
                    <nav className="flex flex-col space-y-3 ">
                        <Link to={'/'} className="hover:text-yellow-400  ">
                            <span onClick={submenu} className='flex text-white items-center justify-between gap-1'>
                                Home
                                <span className='text-sm'><FaChevronDown /></span>
                            </span>
                            {/* submenu */}
                            <div className={`py-0 my-3 transition-all duration-500 ease-in-out ${showsubmenu ? "max-h-[300px] my-4 opacity-100 " : "max-h-0 my-0 opacity-0"}`} >
                                <ul className=' space-y-4 items-center '>
                                    <li className='border-t pt-2  border-t-white text-white hover:text-yellow-400 '>Home restaurent</li>
                                    <li className='border-t pt-2 border-t-white text-white hover:text-yellow-400'>Home cafe</li>
                                    <li className='border-t pt-2 border-t-white text-white hover:text-yellow-400'>Home desert</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to={'/about'} className="hover:text-yellow-400 flex items-center gap-1">About Us </Link>
                        <Link to={'/menu'} className="hover:text-yellow-400 ">
                            <span onClick={() => showmenu2(event)} className='flex items-center gap-1 justify-between'>
                                Menu<span className='text-sm'><FaChevronDown /></span>
                            </span>
                            <div className={`py-0 my-3 transition-all duration-500 ease-in-out ${showsubmenu ? "max-h-[300px] my-4 opacity-100 " : "max-h-0 my-0 opacity-0"}`} >
                                <ul className=' space-y-4 items-center '>
                                    <li className='border-t pt-2  border-t-white text-white hover:text-yellow-400 '>Lunch</li>
                                    <li className='border-t pt-2 border-t-white text-white hover:text-yellow-400'>Dinner</li>
                                    <li className='border-t pt-2 border-t-white text-white hover:text-yellow-400'>Fast food</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to={'/service'} className="hover:text-yellow-400 flex items-center gap-1">Pages<span className='text-sm'><FaChevronDown /></span></Link>
                        <Link to={'/contact'} className="hover:text-yellow-400">Contact</Link>
                        <Link className="mt-2 bg-yellow-600 text-white px-4 py-2 text-center rounded-sm font-semibold text-sm">RESERVATION</Link>
                    </nav>
                    {/* )
                } */}

                </div>
            </div>
        </header >
    )
}
