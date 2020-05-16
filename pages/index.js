import GameBoard from '../components/GameBoard'
import GameContextProvider from '../context/GameContext'
import Head from 'next/head'


export default () => (
  <GameContextProvider>
    <Head>
        <title>Guess my number</title>
        <meta property="og:title" content="Guess my number" key="title" />
        <meta property="og:description" content="A Cool's game" key="description" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P"></link>
    </Head>
    <div className='w-full px-4 py-8 md:p-12 xl:px-40 lg:py-12'>
      <h1 className='text-center mb-6 text-white text-2xl md:text-4xl'>Guess my number</h1>
      <GameBoard/>
    </div>
  </GameContextProvider>
  )