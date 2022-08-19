import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Trivia</title>
        <meta name="description" content="A simple crypto trivia game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-blue-500 bg-[#040911]'>
        <div className='container m-auto w-full min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col w-full md:w-2/3 lg:w-1/2 bg-gradient-to-t from-[#090b0e] to-[#10141a] rounded-md h-[50vh] justify-start items-center p-[2rem]'>
            <h1 className='text-5xl font-bold'>
              Blockchain Trivia
            </h1>
            <div className='flex flex-col w-full h-full justify-center items-center p-5'>
              <span className='p-5 text-xl'>
                Connect wallet to play!
              </span>
              <button className='rounded-md bg-blue-900 text-[#10141a] w-auto px-[3rem] py-[1rem] font-bold text-lg'>
                Connect
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
