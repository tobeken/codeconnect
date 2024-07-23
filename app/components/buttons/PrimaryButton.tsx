import React from 'react'

interface PrimaryButtonProps {
    label:string
}

const PrimaryButton = ({label}:PrimaryButtonProps) => {
  return (
    
    <button className='bg-primary-30 py-3 px-4 rounded text-white'>{label}</button>
    
  )
}

export default PrimaryButton