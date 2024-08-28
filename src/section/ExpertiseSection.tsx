import React from 'react'
import SpecialHoverButton from '../components/SpecialHoverButton'

const ExpertiseSection = () => {
    return (
        <div className='py-20 px-5 bg-gray-200 flex justify-between'>
            <div className="">
                
            </div>
            <div className="text-6xl tracking-wider group">
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Digital strategy</SpecialHoverButton>
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Data</SpecialHoverButton>
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">E-commerce</SpecialHoverButton>
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Extranet / Intranet</SpecialHoverButton>
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Web development</SpecialHoverButton>
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">Creative concept</SpecialHoverButton>
                <SpecialHoverButton className="block bg-transparent px-7 py-3 group-hover:text-gray-400 hover:!text-black">User experience</SpecialHoverButton>
            </div>

        </div>
    )
}

export default ExpertiseSection
