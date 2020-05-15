import { useEffect} from 'react'

let windowWidth: number

export default function Confetti() {

    useEffect(()=>{
        if(window){
            windowWidth = window.innerWidth
        }
    },[])

    const confetti  = (
       <span key={Math.random()} className="particle c' + $.rnd(1,2) + '" style={{top:Math.random(), left:Math.random(), width: Math.random()+'px', height: Math.random() + 'px', animationDelay: Math.random + 's'}}></span>
    )

    return (
        <div className='z-0'>
           {Array.from({length: (windowWidth/50)*10}, (item) =>confetti)}
        </div>)
 }