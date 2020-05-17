import { useContext } from 'react'

import {GameContext} from '../context/GameContext'
import useUtils from '../hooks/useUtils'

import Digit from '../types/Digit'
import Round from '../types/Round'
import Button from './Button'

const availableDigits: Digit[]=[3,4,5,6]
const availableRounds: Round[] = [0, 6, 8, 10]


export default function SettingsTool () {
    const {digits, setDigits, startGame, rounds, setRounds, gameStarted} = useContext(GameContext)
    const { scrollTop } = useUtils()

    const digitChoices = (<div className='my-4 w-full sm:w-1/2 md:w-full flex flex-col md:flex-row'>
        <span className='mr-2 md:mr-4 mb-2'>Digits:</span>
        {availableDigits.map(digit=>( <label key={digit} className='md:mr-4'><input type="radio" className="nes-radio pink"  checked={digit===digits} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {setDigits(parseInt((event.target as HTMLInputElement).value))}} value={digit}/><span>{`${digit} digits`}</span></label>))}
    </div>)

    const roundChoices = (<div className='my-4 w-full sm:w-1/2 md:w-full flex flex-col md:flex-row'>
        <span className='mr-2 md:mr-4 mb-2'>Rounds:</span>
        {availableRounds.map(round=>( <label key={round} className=' md:mr-4'><input type="radio" className="nes-radio pink" checked={round===rounds} onChange={(event: React.ChangeEvent<HTMLInputElement>)=> {setRounds(parseInt((event.target as HTMLInputElement).value))}} value={round}/><span>{round === 0 ? 'unlimited' : `${round} rounds`}</span></label>))}
    </div>)

    const handleClick = ()=>{
        scrollTop()
        startGame()
    }


    return <div  className='mt-4 w-full'>
            {!gameStarted &&
               <div className='w-full flex flex-col md:flex-col transition'>
                   {digitChoices}
                   {roundChoices}
               </div>}
            {!gameStarted && <Button onClick={handleClick} label='Start game'/>}
        </div>

}