import React from 'react'
import PrimaryButton from './buttons/PrimaryButton'
import Image from 'next/image'
import Container from './containers/Container'
import SeachForm from './forms/SeachForm'

const Hero = () => {
  return (
    <div className='relative'>
        <figure className='w-full h-[473px] relative' style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
            <Image src="/hero01.jpg" objectFit='cover' layout="fill" alt=""></Image>
        </figure>
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <Container>
            <h1 className='absolute top-20  text-white text-5xl leading-normal'>特別な旅の <br /> 特別な拠点を</h1>
            <p className='absolute top-60  text-white text-xl'>世界各地にある夢のような別荘を予約しよう</p>

            <div className='absolute bottom-32 '>
            <PrimaryButton label='今すぐチェック'/>
            </div>
            <div className='absolute -bottom-6'>
            <SeachForm />
            </div>
        </Container>
    </div>
  )
}

export default Hero