import React from 'react'

const Stripe = ({item}) => {
    const {url,val}=item
  return (
    <div className='w-[17%] border-t-[2px] border-r-[2px] border-b-[2px] border-zinc-600 px-6 py-5 flex items-center justify-between'>
      <img src={url} alt="" />
      <span className='font-semibold'>{val}</span>
    </div>
  )
}

export default Stripe
