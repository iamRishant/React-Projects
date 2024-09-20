import React from 'react'
import Elements from './Elements'
import { DndContext, closestCorners } from '@dnd-kit/core'

const Work = ({data,onDelete,onEdit}) => {
  
  return (
    <div className='w-[80%] mx-auto mt-5  '>          
        {
          data.map((item,index)=>(<Elements index={index} item={item} onDelete={onDelete} onEdit={onEdit}/>))
        }
    
    </div>
  )
}

export default Work
