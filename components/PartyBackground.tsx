/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import useUtils from '../hooks/useUtils'

const colors = ['#FF00CC', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E']

const animation=['shine2','shine1']

export default function PartyBackground (){

    const { windowWidth, windowHeight, rnd } =useUtils()

    const createBall =()=>{
        const wh = rnd(1,2)

        const ballCss = css`
            z-index:-1;
            width: ${wh}rem;
            height: ${wh}rem;
            border-radius:50%;
            transition-duration:.45s;
            position:absolute;
            transition-duration:1.4s;
            transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);
            left: ${Math.random() * (windowWidth! - 2)}px;
            top: ${Math.random() * (windowHeight! - 2)}px;
            background:  ${colors[Math.floor(Math.random() * colors.length)]};
            opacity: ${Math.random()};
            animation: ${animation[rnd(0,1)]} 2s infinite;
        `
        return (<div key={Math.random()} className='ball' css={ballCss}></div>)
    }

    return (
        <div>
           {Array.from({length: 200}, (item) =>createBall())}
        </div>)

}