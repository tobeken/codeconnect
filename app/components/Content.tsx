'use client'

import React from 'react'
import CardS from './cards/CardS'
import Container from './containers/Container'
import CardL from './cards/CardL'

const Content = () => {
  return (
    <>
    <Container>
        <h3 className='text-xl font-bold mb-2 mt-20'>日本をチェックしてみよう！</h3>
        <p className='mb-8'>魅力が詰まった人気目的地をご紹介</p>
            <div className='flex gap-4'>
            <CardS />
            </div>
        <h3 className='my-16 text-xl font-bold'>ゲストに好評なバケーションレンタル</h3>
            <div className='flex gap-6'>
            <CardL />
            </div>
    </Container>
    </>
  )
}

export default Content