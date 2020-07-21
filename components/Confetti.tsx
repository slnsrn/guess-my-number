import { useEffect, useContext} from 'react'

import {rnd} from '../utils'

let containerWidth:number

export default function Confetti() {

    useEffect(()=>{
        containerWidth = document.getElementsByClassName('nes-container')[0].clientWidth - 50
    },[])

    const confetti = (i:number)  =>{
       return (<span key={i} className={`particle c${rnd(1,4)}`} style={{top:rnd(10,50), left:rnd(0,containerWidth), width: rnd(6,8)+'px', height: rnd(3,4) + 'px', animationDelay: (rnd(0,30)/10)  + 's'}}></span>)
    }
    if (!process.browser) return null

    return (
        <div className='confetti relative h-4'>
           {Array.from({length: (window.innerWidth!/50)*10}, (item, i) => confetti(i))}
        </div>)
 }