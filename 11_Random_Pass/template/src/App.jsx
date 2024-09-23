import { useState,useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength]=useState(8)
  const [number, setNumber]=useState(false)
  const [character, setCharacter]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)
  
  const passwordGenerator=useCallback(()=>{
    // call back is used to memoize the state or store cached state

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(character) str+="!@#$%^&*()_+=\/><{}[]`~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length +1)
      pass+=str[char-1]
    }

    setPassword(pass)

  },[length,number,character])

  useEffect(()=>{
    passwordGenerator()
  },[length,number,character])

  const copy=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef?.current.select();
    
  }

  return (
    <>
    <div className="w-full h-screen bg-slate-500 fixed">
      <div className="max-w-2xl p-3 bg-white mx-auto w-full mt-5 rounded-md shadow-lg">
            <h1 className="text-2xl font-semibold text-center">Random Password Generator</h1>
            <div className="w-full  mt-5 flex items-center justify-center ">
                <input 
                type="text"
                className="bg-slate-800
                 text-white text-4xl px-2 py-1 rounded-l-lg" 
                readOnly
                value={password}
                ref={passwordRef}
                
                />
                <button onClick={copy} className="bg-sky-500 px-2 py-2 rounded-r-lg text-white text-2xl hover:bg-sky-600">Copy</button>
            </div>

            <div className="mt-10  flex p-3 rounded-md mb-10 border-2 border-gray-500  w-full">
                <div className="flex gap-2 mr-6 text-xl items-center w-[40%]">
                  <input onChange={(e)=>setLength(e.target.value)} type="range" value={length} min="8" max="99" />
                  <label className=" ">Length: {length}</label>
                </div>
                <div className="flex items-center justify-between gap-2 w-[60%]">
                <label htmlFor="" className="text-xl border-l-2 border-gray-500 pl-5">Numbers</label>
                  <input type="checkbox" className="w-4 h-4 mr-2" onChange={()=>setNumber(prev=>!prev)} />
                  <label htmlFor="" className="border-l-2 border-gray-500 text-xl pl-5">Special Characters</label>
                  <input type="checkbox" className="w-4 h-4" onChange={()=>setCharacter(prev=>!prev)} />
                </div>
            </div>
      </div>
    </div>
      
    </>
  )
}

export default App
