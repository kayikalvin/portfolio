import React from 'react'
import {HiOutlineMail} from "react-icons/hi"
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Linksocial = () => {
  const links = [
    {
        id: 1,
        child: (
          <>
          Linkedin <FaLinkedin size={25}/>
          
          </>
        ),
        href: 'https://www.linkedin.com/in/alvin-kayi/',
        style:'rounded-tr-md'
        
    },
    {
      id: 2,
      child: (
        <>
        Github <FaGithub size={25}/>
        
        </>
      ),
      href: 'https://github.com/kayikalvin/',
      
      
  },
  {
    id: 3,
    child: (
      <>
      Mail <HiOutlineMail size={25}/>
      
      </>
    ),
    href: "mailto:kayikalvin@gmail.com",
  
    
},
{
  id: 4,
  child: (
    <>
    Resumee <BsFillPersonLinesFill size={25}/>
    
    </>
  ),
  href: './Alvinn kayi mwashi word resumee.pdf',
  style:'rounded-br-md',
  download:true,
  
},
   
   
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map(({id,child,href,style,download})=>(
          <li className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-800 ml-[-70px] shadow-xl shadow-cyan-300/30 hover:ml-[-10px] hover:rounded-md duration-300'+ "" + style} >
          <a href={href} className='flex justify-between items-center w-full font-bold text-white'
          download={download}
          target='_blank'
          rel='noreferrer'
          >
          
          {child}
          </a>
        </li>
        )
        
        
        
        )}
        
      </ul>
    </div>
  )
}

export default Linksocial