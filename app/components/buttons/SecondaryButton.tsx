import React from 'react'

interface SecondaryButtonProps {
    label:string;
}

const SecondaryButton = ({label}:SecondaryButtonProps) => {
  return (
    <button className='px-4 py-2 bg-white text-blue-500 rounded'>{label}</button>
  )
}

export default SecondaryButton