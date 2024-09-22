import React from 'react'

const Button = ({obj,setColor}) => {
  return (
    <div>
      <button onClick={()=>setColor(obj.color)} className={`text-xl ${obj.color} text-${obj.fontColor}  w-[6vw] h-[2vw] p-5 flex justify-center items-center rounded-xl shadow-md border-2 border-solid border-black hover:scale-105 duration-150 `}>{obj.name}</button>
    </div>
  )
}

export default Button
