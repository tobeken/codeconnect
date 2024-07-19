import React from 'react'

interface PrimaryButtonProps {
    label:string
}

const PrimaryButton = ({label}:PrimaryButtonProps) => {
  return (
    
    <button className='bg-blue-800 pt-1 pb-1 pl-2 pr-2 rounded text-white'>{label}</button>
    
  )
}

export default PrimaryButton