import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-10 flex p-5 gap-1 '>
      <Card width={"basis-1/3"} start={false} para={true} contact={false} />
      <Card width={"basis-2/3"} start={true} para={true} contact={true} hover={true}/>
    </div>
  )
}

export default Cards
