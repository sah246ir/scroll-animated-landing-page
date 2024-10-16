import { m } from 'framer-motion'
import { X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface PropTypes {
  children: React.ReactNode
}
const ComeUpPageWrapper = ({ children }: PropTypes) => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false); // This will trigger the exit animation
     navigate(-1); // After the animation, navigate to the previous page
  };
  return (
    <main className='p-10 h-screen overflow-hidden '>
      <m.section
        initial={{ y: 1660 }}
        animate={{ y: 0 }}
        exit={{ y: 1660, opacity: 0 }}
        className='min-h-full relative'
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 35,
          damping: 13
        }}
      >
        <div className='h-screen bg-white px-5 py-20 rounded-3xl   overflow-auto'>
          {children}
        </div>
      </m.section>
     {isVisible && (
        <m.button
          onClick={handleClick}
          className="z-50 fixed right-12 top-12 bg-black w-12 h-12 hover:scale-110 rounded-full grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <X stroke="white" />
        </m.button>
      )}
    </main> 
  )
}

export default ComeUpPageWrapper
