import { useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import SectionHeading from '../../headings/SectionHeading'
import ApproachHeading from '../../headings/ApproachHeading'
import Button from '../../buttons/Button'
import { Link } from 'react-router-dom'
 

const ApprochSection = () => {
  const headings  = [
    "Discovery",
    "Deep Dive",
    "Question & Reflect",
    "Insight",
    "Conceptualise",
    "Proposal",
    "Blueprint",
    "Create",
    "Build",
    "Reveal",
    "Collaborate",
    "Adjust & Refine",
    "Support",
   "Evolve", ]

  const element = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target:element,
    offset: ['start .5', 'start start']
  })
  return (
    <section style={{marginInline:"auto"}} className='max-w-[85vw] p-5 py-12 flex flex-col items-end'>
      <SectionHeading className='ml-auto mr-auto'>Our approach</SectionHeading>
      
      <div ref={element} className="text-center mt-10 flex flex-wrap justify-center gap-4">
        {headings.map((head,i)=>{
          const start = i / headings.length;
          const end = start + (1 / headings.length)
          return(
            <ApproachHeading scrollYProgress={scrollYProgress} range={[start,end]}  >
              {head}
            </ApproachHeading> 
          )
        })}
      </div>

      <article className=' sm:w-[30em] mt-12 md:text-[1.7vw]  flex flex-col gap-8 items-start'>
        <p>Our approach is simple but powerful: we start by understanding your vision, listening closely and diving deep into the details. From there, we ask the right questions, reflect and let our intuition guide us toward innovative solutions. Ideas turn into actionable proposals, which evolve into strategic plans.</p>
        <p> With creativity and precision, we design, develop and bring your project to life. So, what’s stopping you? Turn in your vision and get ready for perfection.</p>
        <p>So before we take action,&nbsp;

        <Link to={"/contact-us"}>
          <Button> let's get to know each other.
          </Button>
        </Link>
        </p>
        <Link to={'/process'}>
          <Button className='text-xl'>Our approach
          </Button>
        </Link>
      </article>
    </section>
  )
}

export default ApprochSection
