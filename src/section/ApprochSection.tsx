import React, { useRef } from 'react'
import SectionHeading from '../components/headings/SectionHeading'
import ApproachHeading from '../components/headings/ApproachHeading'
import { useScroll } from 'framer-motion'
import Button from '../components/buttons/Button'

const ApprochSection = () => {
  const headings  = [
    "Meeting",
    "Listen",
    "Q-- R",
    "Reflection",
    "Intuitions",
    "Ideas",
    "Proposals",
    "Strategy",
    "Design",
    "Development",
    "Presentation",
    "Online chat",
    "Accommodation",
   " Follow-up",
    "Maintenance",
    "Evolution"]

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

      <article style={{fontSize:"1.7vw"}} className=' sm:w-[30em] mt-12  flex flex-col gap-8 items-start'>
        <p>Over the past 20 years, Wokine has built hundreds of digital interfaces. Through these experiments, our team developed a method to build your project, and understand all the challenges and opportunities of your digital ecosystem.</p>
        <p>We turn your concepts into reality through carefully team-led steps. We work in the digital sector, but it is the human being who is at the heart of our approach. More than a site, we offer you personalised digital support.</p>
        <p>So before we take action,&nbsp;

        <Button> let's get to know each other.
        </Button>
        </p>
        <Button className='text-xl'>Our approach
        </Button>
      </article>
    </section>
  )
}

export default ApprochSection
