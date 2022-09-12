import React from 'react'
import './final.css'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';


const Final = () => {
    const history = useNavigate();
  return (
    <div>
    <div className="supermain">
    
    <div className='mains'>
      
    <motion.div animate={{y:60, scale:1}} initial={{scale: 0}} transition={{delay: 0.3}} whileHover={{scale:1.1}} >
      <h1 className="ti text-gradient">HURRAY!!! YOU HAVE SUCCESSFULLY ADDED YOUR PRODUCTS OUR E-XCHANGER WILL REACH YOUR DESTINATION WITHIN 24 HOURS.</h1>
      
    </motion.div>

    
    </div>
    <h2 className='head' onClick={() => history("/")}>HOME PAGE</h2>
   </div>
   </div>
  )
}

export default Final
