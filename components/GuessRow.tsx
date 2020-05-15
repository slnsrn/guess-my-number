
import React, { useContext, useState, useCallback, useEffect } from 'react'


import {GameContext} from '../context/GameContext'
import Guess from '../types/Guess'


export default function GuessRow ({guess, guessNumber}:{guess:Guess, guessNumber: (value:string[])=>void}){
    const { digits} = useContext(GameContext)
    const {round, result, value, passed} = guess
    const [inputValue, setInputValue]=useState<string[]>(value)
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

    const id=`guessInput${round}`

    return (
      <div className='flex flex-col sm:flex-row mx-auto mb-6'>
          <div className='flex'>
          <div className='w-56 mr-4'>
            <input
              autoFocus
              autoComplete='off'
              ref={inputRef}
              className='nes-input focus:outline-none text-center'
              disabled={passed}
              type='tel'
              placeholder={`Round ${round}`}
              id={id}
              value={inputValue.join(' ')}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
              maxLength={digits*2-1}
            />
          </div>
          {!passed && <img src='press.png' className="ml-2 w-auto h-12" style={{imageRendering: 'pixelated'}} onClick={handleClick}></img>}
          </div>
          {passed &&
            <div className='flex flex-col sm:flex-row mt-2 lg:mt-0'>
              {result.missed && <div className='self-center nes-badge'><span className="is-error">Ups! you missed it!</span></div>}
              {result.plus && <div className='self-center nes-badge plus'><span className="is-success">{`${result.plus} cuk!`}</span></div>}
              {result.minus && <div className='self-center nes-badge'><span className="is-warning">{`${result.minus} position wrong!`}</span></div>}
            </div>}
      </div>)
}