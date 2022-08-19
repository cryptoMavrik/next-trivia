import type { NextPage } from 'next'
import Head from 'next/head'
import useLogin from '../hooks/useLogin'
import { useWeb3React } from '@web3-react/core'
import { BASE_EXPLORER_URL } from '../config/chainInfo'

const Home: NextPage = () => {
  const { login, logout } = useLogin()
  const { account, active } = useWeb3React()


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
            <h1 className='text-6xl font-bold'>
              Blockchain Trivia
            </h1>
            {
              active ?
                <div className='text-xl flex items-center absolute top-0 left-0 p-3'>
                  <div className='flex items-center w-full justify-start'>
                    <span className='rounded-full bg-green-600 w-[1rem] h-[1rem] flex mx-3 justify-between' />
                    Connected with:&nbsp;
                  </div>
                  <span className='pl-5 text-blue-300 font-bold'>
                    <a href={`${BASE_EXPLORER_URL}/address/${account}`} rel="noreferrer" target={"_blank"} >
                      {account?.slice(0, 6) + "..." + account?.slice(-4)}
                    </a>
                  </span>
                </div>
                :
                <div className='text-xl flex items-center absolute top-0 left-0 p-3'>
                  <div className='flex items-center w-full justify-start'>
                    <span className='rounded-full bg-red-600 w-[1rem] h-[1rem] flex mx-3 justify-between' />
                    Not Connected
                  </div>
                </div>
            }
            {
              !account ?
                <div className='flex flex-col w-full h-full justify-center items-center p-5'>
                  <span className='p-5 text-2xl'>
                    Connect wallet to play!
                  </span>
                  <button
                    className='rounded-md bg-blue-800 text-[#10141a] w-auto px-[3rem] py-[1rem] font-bold text-xl hover:bg-blue-600 transition-transform active:translate-y-1'
                    onClick={login}>
                    Connect
                  </button>
                </div>
                :
                <div className='flex flex-col w-full h-full justify-center items-center p-5'>
                </div>
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
