import React from 'react'
import Digit from '../types/Digit'
import Player from '../types/Player'
import Round from '../types/Round'


const createNumberArray = (digits: number)=>{
  const numberArray:NumberArray=[]
  for(let i=0; i<digits; i++){
    numberArray.push({value:(Math.floor(Math.random()* 10)).toString(), hidden:true})
  }
  return numberArray
}
type NumberArray = {value: string, hidden:boolean}[]

interface State {
  player: Player
  digits: Digit
  rounds: Round,
  gameStarted: boolean
  numberArray: NumberArray|null,
  hintsGiven: string[],
  gameResult:'won'|'lost'|null
}

const initialState:State = {
  player: 'single',
  digits: 4,
  rounds: 0,
  hintsGiven:[],
  gameStarted:false,
  numberArray: null,
  gameResult: null,
}

type Action = {type: 'SET_PLAYER', value: Player}
            | {type: 'SET_DIGITS', value: Digit}
            | {type: 'SET_ROUNDS', value: Round}
            | {type: 'END_GAME', value:boolean}
            | {type: 'START_GAME'}
            | {type: 'GIVE_HINT'}
            | {type: 'RESET' }

function reducer(state:State, action:Action):State {
  switch (action.type) {
    case 'SET_PLAYER':
      return {...state, player: action.value}
    case 'SET_DIGITS':
      return {...state, digits: action.value}
    case 'SET_ROUNDS':
      return {...state, rounds: action.value}
    case 'START_GAME':
        return {...state,
          gameStarted: true,
          numberArray: createNumberArray(state.digits)
        }
    case 'END_GAME':
        return {...state,
          numberArray: state.numberArray?.map(el=>{return {...el, hidden:false}})!,
          gameResult: action.value ? 'won':'lost'
        }
    case 'GIVE_HINT':
        let given:string|null= null
        const newArray = state.numberArray!.map(number=>{
          if(!given && number.hidden){
            number.hidden=false

            given=number.value
          }
          return number
        })
        return {...state,
          numberArray: newArray,
          hintsGiven:[...state.hintsGiven, given!]
        }
    case 'RESET':
      return {...initialState}
    default:
      return state
  }
}

type ContextValue = State & {
  setPlayer(value: string): void
  setDigits(value: number): void
  setRounds(value: number|string): void
  endGame(value:boolean): void
  resetGame(): void
  startGame(): void
  giveHint(): void
}

export const GameContext = React.createContext<ContextValue>(null!)
GameContext.displayName = 'GameContext'

export default ({children}:{children:React.ReactNode}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value:ContextValue = {
    player: state.player,
    rounds: state.rounds,
    digits: state.digits,
    gameStarted: state.gameStarted,
    numberArray: state.numberArray,
    gameResult: state.gameResult,
    hintsGiven:state.hintsGiven,
    setPlayer: (value:Player) =>
      dispatch({
        type: 'SET_PLAYER',
        value: value
      }),
    setDigits: (value:Digit) =>
      dispatch({
        type: 'SET_DIGITS',
        value: value
      }),
    setRounds: (value:Round) =>
      dispatch({
        type: 'SET_ROUNDS',
        value: value
      }),
    resetGame: () =>
      dispatch({
        type: 'RESET'
      }),
    startGame: () =>
      dispatch({
        type: 'START_GAME'
      }),
    giveHint: () =>
      dispatch({
        type: 'GIVE_HINT'
      }),
    endGame:(value:boolean) =>
      dispatch({
        type: 'END_GAME',
        value: value
      })
  }

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  )
}
