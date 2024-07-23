import React from 'react'
import { Input } from "@/components/ui/input"
import PrimaryButton from '../buttons/PrimaryButton'
import SearchButton from '../buttons/SearchButton'
import Image from 'next/image'

const SeachForm = () => {
  return (
   
   <div className='flex items-center'>
    <div className='relative'>
    <Image src="/bed.svg" alt="icon" width={20} height={20}className='absolute left-2 top-1/2 transform -translate-y-1/2' />
   <input className='border-4 border-yellow-500 w-60 h-14 rounded pl-10' placeholder='目的地'/>
   </div>

   <div className='relative'>
   <Image src="/calendar.svg" alt="icon" width={20} height={20}className='absolute left-2 top-1/2 transform -translate-y-1/2' />
   <input className='border-4 border-yellow-500 w-80 h-14 rounded pl-10' placeholder='チェックイン - チェックアウト'/>
   </div>
   
   <div className='relative'>
   <Image src="/person.svg" alt="icon" width={20} height={20}className='absolute left-2 top-1/2 transform -translate-y-1/2' />
   <input className='border-4 border-yellow-500  w-80 h-14 rounded pl-10' placeholder='大人2名・子供0名・1部屋'/>
   </div>
   <button className='border-4 border-yellow-500 w-36 h-14 bg-blue-800 rounded text-white'>検索</button>
   </div>
  
 
  )
}

export default SeachForm