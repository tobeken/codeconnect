import React from 'react'
import SecondaryButton from './buttons/SecondaryButton'

const Nav = () => {
  return (
    <div className='flex gap-4'>
        <button className='text-white'>宿泊施設を掲載する</button>
        <SecondaryButton label='登録'/>
        <SecondaryButton label='ログイン'/>
    </div>
  )
}

export default Nav