
import React, { useContext, useState, useEffect } from 'react'
import cx from 'classnames'

import {GameContext} from '../context/GameContext'
import Guess from '../types/Guess'

export default function GuessRow ({guess, guessNumber, currentRound}:{guess:Guess, currentRound:number, guessNumber: (value:string[])=>void}){
  const { digits, giveHint, hintsGiven} = useContext(GameContext)
  const {round, result, value, passed} = guess
  const [inputValue, setInputValue]=useState<string[]>(value)
  const [hintGiven, setHintGiven]=useState(false)
  const inputRef = React.createRef<HTMLInputElement>()

    const handleUserKeyPress = (event:KeyboardEvent) => {
      const { keyCode } = event
      if (keyCode === 13 && !passed && inputValue.length === digits) {
        guessNumber(inputValue)
      }
    }

    useEffect(() => {
      window.addEventListener("keydown", handleUserKeyPress);

      return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
      };
    }, [handleUserKeyPress])

    const handleChange = (value: string)=>{
      value = value.replace(/\D/g, '')
      setInputValue(Array.from(value))
    }

    const handleClick =()=>{
      if(inputValue.length !== digits) return false
      guessNumber(inputValue)
    }

    const onHintClick = ()=>{
      setHintGiven(true)
      giveHint()
    }

    const onFocus= ()=>{
      if(inputValue.length ===0 && hintGiven){setInputValue([...hintsGiven])}
    }

    const placeholder = Array.from({length:digits},(item,i)=>hintsGiven[i]||'X').join(' ')

    const id=`guessInput${round}`
    const showHint = !passed && !hintGiven && currentRound >2 &&  hintsGiven.length < digits-1

    return (
      <div className={cx({'relative pb-32': currentRound >2 && !passed},'flex flex-col sm:flex-row mx-auto mb-4')}>
          <div className='flex'>
            <div className='w-56 mr-2 lg:mr-4'>
              <input
                autoFocus
                autoComplete='off'
                ref={inputRef}
                className='nes-input focus:outline-none text-center custom-padding'
                disabled={passed}
                type='tel'
                placeholder={placeholder}
                id={id}
                value={inputValue.join(' ')}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
                maxLength={digits*2-1}
                onFocus={onFocus}
              />
            </div>
            {!passed &&
                <img src='press.png' className='w-auto h-10 md:h-12' style={{imageRendering: 'pixelated'}} onClick={handleClick}></img>}
            {showHint &&
                <div className="nes-balloon hint from-right text-xs bottom-0 right-0 flex">
                    <span className='self-center'>Do you need a hint?</span>
                    <img src='hint.png' className=" w-auto h-8 md:h-10  md:ml-2 self-center animateOpacity" style={{imageRendering: 'pixelated'}} onClick={onHintClick}></img>
                </div>
                }
          </div>
          {passed &&
            <div className='text-left flex flex-col sm:flex-row mt-2 lg:mt-0'>
              {result.missed && <div className='self-center nes-badge wide custom-font-size'><span className="is-error">Ups! you missed it!</span></div>}
              {result.plus && <div className='self-center nes-badge plus custom-font-size'><span className="is-success">{`${result.plus} cuk!`}</span></div>}
              {result.minus && <div className='self-center nes-badge wide custom-font-size'><span className="is-warning">{`${result.minus} position wrong!`}</span></div>}
            </div>}
      </div>)
}

