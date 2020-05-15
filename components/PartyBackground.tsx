/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { useContext, useEffect} from 'react'

import {GameContext} from '../context/GameContext'

const colors = ['#FF00CC', '#FF00CC', '#EE34D2', '#FF6EFF', '#50BFE6', '#AAF0D1', '#66FF66', '#CCFF00', '#FFFF66', '#FFFF66', '#FFCC33', '#FF9933', '#FF9966', '#FF6037', '#FD5B78', '#FF355E']

let windowWidth :number, windowHeight: number


export default function PartyBackground (){

    const { gameResult } =useContext(GameContext)

    useEffect(()=>{
        if(window){
            windowWidth = window.innerWidth
            windowHeight = window.innerHeight
        }
    },[])

    const createBall =()=>{
        const ballCss = css`
            z-index:-1;
            width: 2rem;
            height: 2rem;
            border-radius:50%;
            transition-duration:.45s;
            position:absolute;
            transition-duration:1.4s;
            transition-timing-function: cubic-bezier(.43,-0.28,.25,1.37);
            left: ${Math.random() * (windowWidth - 2)}px;
            top: ${Math.random() * (windowHeight - 2)}px;
            background:  ${colors[Math.floor(Math.random() * colors.length)]};
            opacity: ${Math.random()};
        `
        return (<div key={Math.random()} className='ball' css={ballCss}></div>)
    }

    // if(gameResult !== 'won') return null

    return (
        <div className='z-0'>
           {Array.from({length: 100}, (item) =>createBall())}
        </div>)

}