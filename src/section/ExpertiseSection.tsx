import React from 'react'
import SpecialHoverButton from '../components/buttons/SpecialHoverButton'
import Button from '../components/buttons/Button'
import SectionHeading from '../components/SectionHeading'

const ExpertiseSection = () => {
    return (
        <div className='py-20 px-5 bg-gray-200 flex justify-around'>
            <div className='sticky top-10'>
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
            <div className="text-6xl tracking-wider group flex flex-col before: items-start">
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Digital strategy</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Data</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">E-commerce</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Extranet / Intranet</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Web development</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Creative concept</SpecialHoverButton>
                <SpecialHoverButton className=" !bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">User experience</SpecialHoverButton>
            </div>

        </div>
    )
}

export default ExpertiseSection
