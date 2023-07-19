// import Image from 'next/image'; 
// import {Game, wow} from './board.js'
import {Game, wow} from './calculator.js'
import 'app/calc.css'

wow;

export default function Home() {
  return (
    <main className='w-full h-full flex justify-center'>
      <div className='bg-[#16161d] w-4/5 text-white h-full '>
          <div className='bg-gray-900 h-1/3 border-b-2  border-indigo-900'>
            <div class="h-1/3 ">

            </div>
            <input type="text" class="h-2/3 px-1.5 caret-pink-500 outline-none w-full text-end text-[20vh] leading-none bg-gray-900 focus:border-transparent" />
          </div>
      </div>
      
      <div className='bg-[#16161d] border-l-2 text-white border-indigo-900  w-1/5  h-full'>
        <p className='text-xl text-indigo-500 w-full pl-2'>History: </p>
      </div>
    </main>
  )
}
