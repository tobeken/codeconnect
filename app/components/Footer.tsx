import React from 'react'
import Container from './containers/Container'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-neutral-80 py-16 mt-60">
        <Container>
        <div className='flex justify-between items-center'>
            <div>
                <ul>
                    <li><Link href="/">利用規約</Link></li>
                    <li><Link href="/">カスタマーサービス</Link></li>
                    <li><Link href="/">各種問い合わせ</Link></li>
                </ul>
            </div>
            <div>
                <p>Copyright 1996-2024 Travel.com. All right reserved.</p>
            </div>
        </div>
        </Container>
    </footer>
  )
}

export default Footer