import GameBoard from '../components/GameBoard'
import Logo from '../components/Logo'
import GameContextProvider from '../context/GameContext'



export default () => (
  <GameContextProvider>
    <div className='w-full px-4 py-8 md:p-12 xl:px-40 lg:py-20'>
      <h1 className='text-center mb-8 text-white text-2xl md:text-4xl'>Guess my number</h1>
      <GameBoard/>
    </div>
  </GameContextProvider>
  )