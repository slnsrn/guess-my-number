import { useContext, useState, useEffect } from 'react'


import {GameContext} from '../context/GameContext'
import GuessRow from './GuessRow'
import Button from './Button'
import Guess from '../types/Guess'
import GuessResult from '../types/GuessResult'
import SettingsTool from './SettingsTool'
import NumberSign from './NumberSign'
import PartyBackground from './PartyBackground'
import Confetti from './Confetti'


const defaultGuess:Guess = {value:[], round:1, result:{}, passed:false}

const createControlArray =(numberArray:{value: string, hidden:boolean}[])=>{
    return numberArray.map((n)=>{
        return { value:n.value, checked:false}
    })
}

export default function GameBoard (){
    const { digits, rounds, gameStarted, resetGame, numberArray, endGame, gameResult,} = useContext(GameContext)
    const [guesses, setGuesses] = useState<Guess[]>([{...defaultGuess}])
    const [partyModeOn, setPartyModeOn] = useState(false)

    useEffect(()=>{

        setGuesses([{...defaultGuess}])

    },[gameStarted])


    const returnGuessRow = (guess:Guess)=> <GuessRow key={guess.round} guess={guess} guessNumber={guessNumber}/>

    const guessNumber =(guessArray:string[])=>{
        const controlArray = createControlArray(numberArray!)
        let result:GuessResult={}

        const remaining = guessArray.map((val:string, i:number)=>{
            if(val === controlArray[i].value){
                controlArray[i].checked = true
                result.plus = result.plus? result.plus + 1 : 1
            }else{
                return val
            }
        })

        controlArray.filter(el=>!el.checked).map(el=>{
            if(remaining.includes(el.value)){
                const index = remaining.findIndex(n=>n===el.value)
                remaining.splice(index,1)
                result.minus = result.minus? result.minus + 1 : 1
            }
        })

        if(!result.minus && !result.plus){result.missed=true}

        if(result.plus === digits){
            endGame(true)
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        if(rounds === guesses.length ){
            endGame(false)
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

        const guess:Guess = {
            value: guessArray,
            round: guesses.length,
            result:result,
            passed:true
        }
        const newList:Guess[]= guesses.concat()
        newList.pop()
        newList.push(guess)

        if(!rounds || guesses.length < rounds){
            newList.push({...defaultGuess, round:guesses.length+1})
        }
        setGuesses(newList)

    }
    const remainingRounds = rounds - guesses.length

  return (
    <>
        {partyModeOn && <PartyBackground/>}
        {<Confetti/>}
        <div className='p-4 lg:px-20 md:py-8 shadow bg-white w-full sm-grid-sm md:w-grid-md lg:w-grid-lg xl:w-grid-xl mx-auto'>
            <div className="nes-container px-4 py-6 md:px-8 with-title">
                <p className="title">A Cool's Game</p>
                <div className=" ml-20 mt-8 flex">
                    <div className="-mt-12 nes-balloon from-left">
                        <p className='text-sm md:text-base'>{gameStarted? `You have ${rounds === 0 ? 'unlimited' : rounds} rounds to guess my number. Start writing your guess and see the results ;)`:'Set your preferences and start playing!'}</p>
                    </div>
                </div>
            <i className="-mt-8 nes-octocat animate"></i>

            {!gameResult && rounds !== 0 && remainingRounds <=2 && <span className='ml-2 nes-text is-error'>{`Ups! You have ${remainingRounds} rounds left.`}</span>}
            {gameResult && <span className='ml-2 nes-text is-error'>{`You have ${gameResult}!`}</span>}
            <SettingsTool/>
            <NumberSign/>
            {gameStarted && <div>
                {guesses.map(returnGuessRow)}
                <Button onClick={resetGame} label='Reset game'/>
            </div>
            }
            </div>
        </div>
        <label className="w-full text-right mt-4">
            <input type="checkbox" className="nes-checkbox is-dark" checked={partyModeOn} onChange={()=>setPartyModeOn(prevMode=>{return !prevMode})} />
            <span>Enable party mode</span>
         </label>
    </>
)

}