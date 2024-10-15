import { m } from 'framer-motion'
import { X } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface PropTypes {
  children: React.ReactNode
}
const ComeUpPageWrapper = ({ children }: PropTypes) => {
  const navigate = useNavigate();
  return (
    <main className='p-10 h-screen overflow-hidden '>
      <m.section
        initial={{ y: 1660 }}
        animate={{ y: 0 }}
        exit={{ y: 1660, opacity: 0 }}
        className='min-h-full relative'
        transition={{
          ease: "easeInOut",
          duration: '2',
          type: "spring",
          stiffness: 35,
          damping: 13
        }}
      >
        <div className='h-screen bg-white px-5 py-20 rounded-3xl   overflow-auto'>
          {children}
        </div>
      </m.section>
      <m.button
        onClick={() => navigate(-1)}
        className="z-50 fixed right-12 top-12 bg-black w-12 h-12 hover:scale-110 rounded-full grid place-items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}      >
        <X stroke="white" />
      </m.button>
    </main> 
  )
}

export default ComeUpPageWrapper
