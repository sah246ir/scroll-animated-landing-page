import { m, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface PropTypes{
    text?:string
}
const SmartParagraph = ({text}:PropTypes) => {
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start .9', 'start .25']
    })

    return (
        <m.p
            ref={element}
            className="text-4xl sm:text-[3.1vw] text-black text-left leading-normal w-full sm:max-w-[54vw]"
        >
            <Sentence scrollYProgress={scrollYProgress} sentence={
               text || `Wokine conçoit des solutions et expériences digitales qui allient créativité, technologie et engagement éthiquse.`}
            />

        </m.p>
    )
}

interface SentenceProps {
    sentence: string,
    scrollYProgress: MotionValue<number>
}
const Sentence = ({ sentence, scrollYProgress }: SentenceProps) => {
    const words = sentence.split(" ")
    return (
        <span className='w-full sm:max-w-[54vw] inline-block'>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length)
                return (
                    <Word scrollYProgress={scrollYProgress} range={[start, end]} key={i} word={word} />
                )
            })}
        </span>
    )
}

interface WordProps {
    word: string
    range: number[],
    scrollYProgress: MotionValue<number>
}
const Word = ({ word, range, scrollYProgress }: WordProps) => {
    const chars = word.split("")
    const amount = range[1] - range[0]
    const step = amount / word.length 
    return (
        <span className='inline-block'>
            {chars.map((char, i) => {
                const start = range[0] + (step * i)
                const end = range[0] + (step * (i + 1))
                return (
                    <Char scrollYProgress={scrollYProgress} range={[start, end]} key={i} char={char} />
                )
            })}
            &nbsp;
        </span>
    )
}

interface CharProps {
    char: string
    range: number[],
    scrollYProgress: MotionValue<number>
}
const Char = ({ char, range, scrollYProgress }: CharProps) => {
    const opacity = useTransform(scrollYProgress, range, [0, 1])
    return (
        <span className='relative'>
            <span className='opacity-[0.3] absolute'>{char}</span>
            <m.span style={{ opacity }} className='transition duration-300'>{char}</m.span>
        </span>
    )
}

export default SmartParagraph
