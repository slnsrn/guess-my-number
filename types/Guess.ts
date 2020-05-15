import GuessResult from "./GuessResult";

export default interface Guess {
    value:string[]
    round:number
    passed: boolean
    result:GuessResult
}