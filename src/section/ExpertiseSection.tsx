import React from 'react'
import SpecialHoverButton from '../components/buttons/SpecialHoverButton'
import Button from '../components/buttons/Button'
import SectionHeading from '../components/headings/SectionHeading'

const ExpertiseSection = () => {
    return (
        <div className='py-20 px-5 bg-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-5 justify-around'>
            <div className='sm:sticky top-10'>
                <div className="sticky top-10 max-w-[180px] flex flex-col gap-3">
                    <SectionHeading>
                         Our Expertise 
                    </SectionHeading>
                    <p>Des compétences au service de votre performance</p>
                    <div className='mt-4 font-light text-sm'>
                        <Button>Toutes nos expertises</Button>
                    </div>
                </div>
            </div>
            <div className="text-6xl tracking-wider group flex flex-col gap-7 sm:gap-0 ">
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">E-learning</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">Illustration</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">Animations</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">Translation</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">Audio & Video</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">Corporate Presentations</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black text-center sm:text-left">E-Publishing</SpecialHoverButton>
            </div>

        </div>
    )
}

export default ExpertiseSection
