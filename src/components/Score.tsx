import React from 'react'
import useGame from '../hooks/useGame'

const Score: React.FC<{ strikes: number, score: number }> = ({ strikes, score }) => {
    console.log("STRIKES strikes");

    return (
        <div className='flex justify-between items-center p-3 pt-5 w-full'>
            <div className='flex justify-start items-center'>
                <span className='text-xl'>
                    Score:
                </span>
                <span className='text-xl ml-3'>
                    {score}
                </span>
            </div>
            <div className='flex justify-start items-center w-[8rem]'>
                <span className='text-xl'>
                    Strikes:
                </span>
                {strikes > 0 && <div className='rounded-full w-4 h-4 bg-red-600 mx-3' />}
                {strikes === 2 && <div className='rounded-full w-4 h-4 bg-red-600' />}
            </div>
        </div>
    )
}

export default Score