import React, { useState } from 'react'
import { motion } from "framer-motion"
import Button from './buttons/Button'
import { ArrowRight } from 'lucide-react'
const Navbar = () => {
    const [lang, setLang] = useState<"en" | "fr">("fr")
    return (
        <nav className=' py-1 flex justify-between items-end fixed w-full top-0 z-50'>
            <div className='pl-12'>
                <motion.svg
                    data-v-62808b07="" width="112" height="14" viewBox="0 0 112 14" fill="none"><path data-v-62808b07="" d="M14.8123 9.39813L11.7358 0.193444H9.14967L6.07323 9.39813L3.23292 0.232322H0L4.68295 13.8644H7.30798L10.4034 5.00772L13.4988 13.8644H16.1238L20.8077 0.232322H17.6535L14.8123 9.39813ZM32.0883 0C27.8559 0 24.7804 3.15199 24.7804 7V7.03888C24.7804 10.8869 27.817 14 32.0494 14C36.2819 14 39.3574 10.848 39.3574 7V6.96112C39.3574 3.11311 36.3208 0 32.0883 0ZM36.2023 7.03888C36.2023 9.35925 34.518 11.2548 32.0883 11.2548C29.6587 11.2548 27.9346 9.32132 27.9346 7.00095V6.96207C27.9346 4.6417 29.6198 2.74709 32.0494 2.74709C34.4791 2.74709 36.2032 4.68057 36.2032 7.00095L36.2023 7.03888ZM57.3969 0.232322H53.7534L48.1894 6.14942V0.232322H45.1718V13.7677H48.1894V9.62951L49.776 8.00515L54.0274 13.7677H57.652L51.814 5.97494L57.3969 0.232322ZM62.7418 13.7677H65.7595V0.232322H62.7418V13.7677ZM81.5296 8.56651L75.1035 0.232322H72.3211V13.7677H75.2989V5.16324L81.9411 13.7677H84.5074V0.232322H81.5296V8.56651ZM93.9273 8.27635H100.393V5.62693H93.9273V2.88174H101.275V0.232322H90.9296V13.7677H101.373V11.1183H93.9273V8.27635ZM109.766 0.344216C108.532 0.344216 107.531 1.33135 107.531 2.5489C107.531 3.76646 108.532 4.75359 109.766 4.75359C110.999 4.75359 112 3.76646 112 2.5489C112 1.33135 110.999 0.344216 109.766 0.344216Z" fill="#181717"></path></motion.svg>
            </div>


            <div className="flex gap-4 text-xs pr-12 mt-10">
                <button className='px-2 py-1 border rounded-full border-black  '>

                    some text&nbsp;
                    <i className='inline'>
                        <ArrowRight className='inline' size={15} />
                    </i>
                </button>
                <Button>+91 xxx-xxx-xxxx</Button>
                <Button>some text</Button>
            </div>
            <div className="flex gap-3 absolute top-2 right-5">
                <div
                    style={{
                        aspectRatio: "1/1",
                        width: "27px",
                        transform: lang === "en" ? "translate(34.3px,0px)" : "translate(0px,0px)"
                    }}
                    className={`absolute transition duration-200 bg-gray-300 -top-[2px] -left-[1.5px] rounded-full  `}>
                    
                </div>
                <button onClick={() => setLang("fr")} className={`z-50 w-[23px]`}>FR</button>
                <button onClick={() => setLang("en")} className={`z-50 w-[23px]`}>EN</button>
            </div>
        </nav>
    )
}

export default Navbar
