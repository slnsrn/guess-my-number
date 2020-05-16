/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import useUtils from '../hooks/useUtils'

const colors = ['#e76e55', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E']

const animation=['shine2','shine1', 'shine3']

export default function PartyBackground (){

    const { windowWidth, windowHeight, rnd } =useUtils()

    const createBall =()=>{
        const w = rnd(0.5,1)
        const h = rnd(0.5,1)
        const color=colors[Math.floor(Math.random() * colors.length)]

        const spanCss = css`
        color: ${color};
        background-color: ${color};
        box-shadow: 0 0.5em ${color}, 0 -0.5em ${color}, 0.5em 0 ${color}, -0.5em 0 ${color};`

        const containerCss=css`
            left: ${Math.random() * (windowWidth! - 2)}px;
            top: ${Math.random() * (windowHeight! - 2)}px;`

        const ballCss = css`
            height: ${h}em;
            transition-duration:.45s;
            display:inline-block;
            transition-duration:1.4s;
            transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);
            font-size: ${rnd(6,10)}px;
            background:  ${color};
            opacity: ${Math.random()};
            animation: ${animation[rnd(0,2)]} 1s infinite;
        `
        return (<div key={Math.random()} className='absolute' css={containerCss}><div css={ballCss} className='ball'><span css={spanCss}>1</span></div></div>)
    }

    return (
        <div className='fixed top-0 left-0 z-1-'>
           {Array.from({length: 400}, (item) =>createBall())}
        </div>)

}