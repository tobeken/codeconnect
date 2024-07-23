'use client'

import React from 'react'
import Logo from './Logo '
import Nav from './Nav'
import Container from './containers/Container'


const Header = () => {
  return (
<header className='bg-primary-30'>
    <Container>
    <div className='flex justify-between items-center py-4'>
        <Logo />
        <Nav />
    </div>
    </Container>
</header>
  )
}

export default Header