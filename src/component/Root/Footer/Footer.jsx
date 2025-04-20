import React from 'react';
import Menu from '../Header/Menu/Menu';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <img
            className="w-32 md:w-52 filter invert"
            src="https://i.ibb.co.com/BVVzfDPk/Frame-1.png"
            alt="Logo"
          />
          <Menu />
          <div className="flex justify-center gap-6 text-white text-2xl mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-blue-500 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 transition" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="hover:text-red-600 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-blue-400 transition" />
                </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
