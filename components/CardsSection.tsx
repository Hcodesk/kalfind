import React from 'react'
import Card from './Card'

export default function CardsSection() {
  return (
    <section className='flex gap-[25.68px] py-[64px] '>
         <Card
            work="Électricien" 
            img='/img2.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            textSize='text-[14] '
            titleSize='text-[20] '
            yStart={50}
            yEnd={0}
            height='h-[224.29px]'
            gap='gap-[20.55px] '
            />

         <Card
            work="Plombier" 
            img='/img2.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            textSize='text-[14] '
            titleSize='text-[20] '
            height='h-[224.29px]'
            yStart={70}
            yEnd={0}
            gap='gap-[20.55px] '
            />

         <Card
            work="Menuisier" 
            img='/img3.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            textSize='text-[14] '
            yStart={90}
            yEnd={0}
            titleSize='text-[20] '
            height='h-[224.29px]'
            gap='gap-[20.55px] '
            />

         <Card
            work="Peintre" 
            img='/img3.jpg' description='Lorem ipsum dolor sit amet consectetur. Cras scelerisque eleifend lobortis egestas.' 
            textSize='text-[14] '
            titleSize='text-[20] '
            yStart={110}
            yEnd={0}
            height='h-[224.29px]'
            gap='gap-[20.55px] '
            />

    </section>
  )
}
