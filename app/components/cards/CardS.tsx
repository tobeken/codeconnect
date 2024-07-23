import Image from 'next/image'
import React from 'react'

const CardS = () => {
    const cards = [
        {
            id:1,
            image:"/tokyo.jpg",
            location:"東京",
            number:"5,623"
        },
        {
            id:2,
            image:"/kyoto.jpg",
            location:"京都",
            number:"2,338"
        },
        {
            id:3,
            image:"/osaka.jpg",
            location:"大阪",
            number:"3,233"
        },
        {
            id:4,
            image:"/kobe.jpg",
            location:"神戸",
            number:"1,234"
        },
        {
            id:5,
            image:"/fukuoka.jpg",
            location:"福岡",
            number:"2,455"
        },
        {
            id:6,
            image:"/okinawa.jpg",
            location:"沖縄",
            number:"928"
        },
    ]
  return (
    <>
        {cards.map((data) => (
            <div key={data.id}>
                <figure>
                    <Image className="rounded" layout='fixed' src={data.image} width={160} height={130} style={{height:"134px"}}alt='bb'></Image>
                </figure>
            <div>
                <p className='text-base font-bold mt-2'>{data.location}</p>
                <p className='text-sm'>{data.number}件が該当</p>
            </div>

            </div>
        ))}

    </>
  )
}

export default CardS