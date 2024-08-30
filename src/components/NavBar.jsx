import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State to track the active link

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  // Function to handle link click and set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (nav) setNav(false); // Close mobile menu on link click
  };

  return (
    <div className='flex justify-between items-center w-full h-30 px-4 py-4 text-white fixed bg-black'>
      <h1 className='text-6xl font-signature ml-2'>Kalvoh</h1>
      
      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`text-xl px-4 cursor-pointer capitalize font-semibold ${
              activeLink === link ? 'text-cyan-500' : 'text-gray-400'
            } hover:scale-105 duration-200`}
            onClick={() => handleLinkClick(link)}
          >
            <Link to={link} smooth duration={400} offset={-70}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl ${
                activeLink === link ? 'text-cyan-500' : 'text-gray-400'
              }`}
              onClick={() => {
                handleLinkClick(link);
                // Trigger the scrolling action manually
                document.querySelector(`.${link}`).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              <Link to={link} smooth duration={400} offset={-70}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
