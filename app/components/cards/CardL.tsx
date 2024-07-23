import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'


const CardL = () => {
    const cards = [
        {
        id:1,
        image:"/image01.jpg",
        name_jp:"アパートホテル スタレ ミアス",
        name_en:"(Aparthotel Stare Miasto)",
        location:"スタレ・ミャスト，ポーランド, Krakow",
        reputation:"素晴らしい",
        number:"2,963",
        price:"17,068"

        },{
        id:2,
        image:"/image02.jpg",
        name_jp:"帝国ホテル",
        name_en:"(Empaire Hotel)",
        location:"スタレ・ミャスト，ポーランド, Krakow",        
        reputation:"素晴らしい",
        number:"2,963",
        price:"17,068"

        } ,{
        id:3,
        image:"/image03.jpg",
        name_jp:"帝国ホテル",
        name_en:"(Empaire Hotel)",
        location:"スタレ・ミャスト，ポーランド, Krakow",
        reputation:"素晴らしい",
        number:"2,963",
        price:"17,068"
        } ,{
        id:4,
        image:"/image04.jpg",
        name_jp:"帝国ホテル",
        name_en:"(Empaire Hotel)",
        location:"スタレ・ミャスト，ポーランド, Krakow",
        reputation:"素晴らしい",
        number:"2,963",
        price:"17,068"
        } 
    ]

  return (
    <>
    {cards.map((data) => (

        <Card key={data.id}>   
        <figure>
        <Image className="rounded-t-lg" layout='fixed' src={data.image}  width={240} height={210} style={{height:"210px"}}alt="aa"></Image>
        </figure>  
     
      <div className='mt-2 ml-2'>
        <p className='text-base font-bold'>{data.name_jp}</p>
        <p className='text-base font-bold'>{data.name_en}</p>
        <p className='text-xs'>{data.location}</p>
      </div>
      <div className='flex gap-2 mt-4 ml-2 items-center'>
        <div className='bg-primary-30 text-white inline rounded-t rounded-br text-xs p-[2px]'>8.8</div>
        <p className='text-xs'>{data.reputation}</p>
        <p className='text-xs'>口コミ：{data.number}件</p>
      </div>
     
      <div className='mt-6 text-right mr-2 mb-2'>
        <p>最安料金:￥<span className='font-bold'>{data.price}</span>
        </p>
      </div>

        </Card>

    ))}
  </>
  )

}

export default CardL