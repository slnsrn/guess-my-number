import { useEffect, useState } from 'react'

export default function useUtils (){

    const [windowWidth, setWindowWidth ] =useState<number|null>(null)
    const [windowHeight, setWindowHeight ] =useState<number|null>(null)

    useEffect(()=>{
        if(window){
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }
    },[])

    const scrollTop =() =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const rnd = (m:number,n:number)=>(Math.floor( Math.random() * (n - m + 1) ) + m)

    return {windowWidth, windowHeight, scrollTop, rnd}
}