import React from 'react';

export default function Calculator() {
  return (

    <div className='mx-auto overflow-hidden mb-2 lg:w-2/6 md:w-3/6 sm:w-4/6'>
        <div className='grid grid-cols-4 grid-flow-row bg-slate-600'>
            <div className='col-span-4 text-white text-3xl text-right p-5 h-24 pt-16 pb-0 mb-2'>
                0
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                AC
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                +/-
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                %
            </div>
            <div className='bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white'>
                ÷
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                7
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                8
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                9
            </div>
            <div className='bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white'>
                X
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                4
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                5
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                6
            </div>
            <div className='bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white'>
                -
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                1
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                2
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                3
            </div>
            <div className='bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white'>
                +
            </div>
            <div className='bg-gray-300 h-20 col-span-2 flex items-center justify-center border-solid border-2 border-white'>
                0
            </div>
            <div className='bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white'>
                .
            </div>
            <div className='bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white'>
                =
            </div>

        </div>
    </div>

    
  )
}
