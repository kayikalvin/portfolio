import React from 'react'


const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link: 'experience'
    },
    {
        id: 5,
        link: 'contacts'
    },
    
]



const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
        <h1 className='text-5xl font-signature ml-2'>Kalvoh</h1>

        <ul className='flex'>
            {links.map(({id,link}) => (
             <li
                key={id}
                className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200'>
                {link}
             </li>
        ))}
        </ul>
    </div>
  )
}

export default NavBar