import React from 'react'

interface PrimaryButtonProps {
    label:string
}

const PrimaryButton = ({label}:PrimaryButtonProps) => {
  return (
    
    <button className='bg-blue-800 py-3 px-4 rounded text-white'>{label}</button>
    
  )
}

export default PrimaryButton