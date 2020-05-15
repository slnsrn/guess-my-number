import { useContext } from 'react'
import cx from 'classnames'

import {GameContext} from '../context/GameContext'


export default function NumberSign (){
    const {numberArray, gameResult} = useContext(GameContext)

    if(!numberArray){ return null}

    const digitFrame = (digit:{value:string, hidden:boolean}, i:number)=> (
        <input key={i} className={cx(
            {'is-error': gameResult==='lost',
            'text-reddish': gameResult==='won' }
            ,'nes-input text-center text-xl py-1')}
            disabled value={digit.hidden? '?' : digit.value }/>)

    return (<div className='flex mt-6 mb-16 w-full justify-center'>{numberArray.map(digitFrame)}</div>)

}