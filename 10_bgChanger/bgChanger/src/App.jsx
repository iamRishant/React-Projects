import { useState } from "react"
import Button from "./components/Button"


function App() {
  // lets create array of objects which will contain color of background

  const colors=[
    {
      name:"Red",
      fontColor:"white",
      color:"bg-red-600",
      
    },
    {
      name:"Orange",
      fontColor:"white",
      color:"bg-orange-600",
    },
    {
      name:"Black",
      fontColor:"white",
      color:"bg-black",
    },
    {
      name:"White",
      fontColor:"black",
      color:"bg-white",
    },
    {
      name:"Blue",
      fontColor:"white",
      color:"bg-blue-700",
    },
    {
      name:"Yellow",
      fontColor:"black",
      color:"bg-yellow-400",
    },
    {
      name:"Zinc",
      fontColor:"white",
      color:"bg-zinc-600",
    },
    {
      name:"Green",
      fontColor:"white",
      color:"bg-green-500",
    },
    {
      name:"Purple",
      fontColor:"white",
      color:"bg-purple-800",
    },
    {
      name:"Brown",
      fontColor:"white",
      color:"bg-yellow-950",
    },
  ]
  
  const [color,setColor]=useState("")

  return (
    <div className={`h-screen w-full ${color} relative`}>
    <div className="flex gap-5 px-[10vw] absolute bottom-5 w-full ">

      {
        colors.map((obj,index)=>{
          return <Button obj={obj} setColor={setColor}/>
        })
      }
    </div>
      {/* <button className={`text-xl bg-slate-500 rounded-full px-3 py-2 text-white absolute top-5 left-5`}><i class="ri-add-large-line "></i></button> */}
      
    </div>
  )
}

export default App
