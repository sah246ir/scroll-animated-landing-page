import { m } from 'framer-motion'
import { X } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

interface PropTypes{
    children:React.ReactNode
}
const ComeUpPageWrapper = ({children}:PropTypes) => {
  const navigate = useNavigate();
  return (
    <main className='p-10 min-h-screen overflow- '>
      <m.section 
      initial={{y:1660}}
      animate={{y:0}}
      exit={{y:1660,opacity:0}}
      className='min-h-full bg-white rounded-3xl px-5 py-20 relative' 
      transition={{
        ease:"easeInOut",
        duration:'2',
        type:"spring",
        stiffness:35,
        damping:13
      }}
      >
        <button onClick={()=>navigate(-1)} className='absolute right-3 top-3 bg-black w-12 h-12 rounded-full grid place-items-center'>
            <X stroke='white'/>
        </button>
        {children}
      </m.section>
    </main>
  )
}

export default ComeUpPageWrapper
