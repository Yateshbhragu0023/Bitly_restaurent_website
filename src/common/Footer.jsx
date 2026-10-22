import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo/logo-white.png"
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'


export default function Footer() {
  return (

    <footer className="bg-[#253a37] text-white py-12">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-2">
            {/* <div className="text-yellow-500 text-2xl">🍽️</div> */}
            <span className="text-2xl font-serif font-bold tracking-widest">
              <img src={logo} alt="" />
            </span>
          </div>
          <p className="mt-4 text-white/60">
            Crafting unforgettable dining experiences with a blend of tradition and
            modern flavors.
          </p>
          <div>
            <ul className='flex text-[16px] gap-3  py-3'>
              <li className='border rounded-full p-2 '>
                <FaFacebook />
              </li>
              <li className='border rounded-full p-2 '>
                <FaInstagram />
              </li>
              <li className='border rounded-full p-2 '>
                <FaTwitter />
              </li>
              <li className='border rounded-full p-2 '>
                <FaTelegram />
              </li>
            </ul>
          </div>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to={''} className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/about'} className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to={'/menu'} className="hover:text-yellow-400 transition">
                Menu
              </Link>
            </li>
            <li>
              <Link to={'/service'} className="hover:text-yellow-400 transition">
                Reservation
              </Link>
            </li>
            <li>
              <Link to={'/contact'} className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact Us</h3>
          <p className="text-white/60 mb-2">
            📍 123 Foodie Street, Dholpur, Rajasthan
          </p>
          <p className="text-white/60 mb-2">📞 +91 9694584432</p>
          <p className="text-white/60">✉️ Yatesh@bistly.in</p>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/50">
        © 2025 BISTLY. All rights reserved.
      </div>
    </footer>

  )
}
