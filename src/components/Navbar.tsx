import React from 'react'
import Button from './buttons/Button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const logo = require("../media/logo.png")
const WA = require("../media/wa.png")

const Navbar = () => {
    return (
        <nav className='py-1 flex justify-between  sticky w-full top-0 z-50 px-5 bg-white/80 backdrop-blur-lg border border-white/50 items-center'>
            <img width={112} src={logo} alt="logo" />

            <div className="flex gap-4 text-xs items-center">
                <Link to={"/contact-us"}>
                    <button className='px-2 py-1 border rounded-full border-black '>
                        Join us&nbsp;
                        <i className='inline'>
                            <ArrowRight className='inline' size={15} />
                        </i>
                    </button>
                </Link>
                <Link to={"tel:919920010885"}>
                    <Button>+91 99200 10885</Button>
                </Link>
                <Link to={"https://wa.me/919920010885"}>
                    <img src={WA} width={35} alt="text on whatsapp" />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
