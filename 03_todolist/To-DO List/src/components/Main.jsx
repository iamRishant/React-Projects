import React, { useState } from "react";
import Work from "./Work";
import { toast } from "react-toastify";
import Edit from "./Edit";

const Main = () => {

  const [data,setData]=useState([]);
  const [input,setInput]=useState("");
  const[edit,setEdit]=useState(false);
  const [editIndex,setEditIndex]=useState(null);

  const clickHandeler=()=>{
    if(input===""){
      return toast.error("Please enter your input");
    } 
    else{

      // setData([...data, input]);
      setData([...data, input]);
      setInput("");
      toast.success("Work added successfully");
    }
  }

  const onDelete=(index)=>{
    setData((curr)=>{
      return curr.filter((item,i)=>{
        return i!==index;
      })
    })
    toast.success("Work deleted successfully");
  }

  const onEdit=(index)=>{
    setEditIndex(index);
    setEdit(!edit);
  }

  const editHandler=(index,text)=>{ 
    // console.log(index,text);
    if(text===""){
      toast.error("Text box cannot be empty");
    }
    else{

      const newData = [...data];
      newData[index] = text;
      setData(newData);
      toast.success("Work updated successfully");
      setEdit(false);
    }

  }

  


  return edit===true ? <Edit editIndex={editIndex} editText={data[editIndex]} editHandler={editHandler} onEdit={onEdit}/> : (
    <div className="min-w-[40vw] max-w-[40vw] h-[80vh] bg-[#eeeeee] rounded-xl overflow-auto text-black shadow-2xl">
      <h1 className="text-5xl text-center mt-10 ">To-Do List</h1>
      <div className="input  flex items-center justify-center mt-4 ">
        <input placeholder="Add Your Work here..."  onChange={(e)=>{setInput(e.target.value)}} className="w-[80%] p-3 text-black text-2xl bg-slate-300" type="text" value={input} />
        <button onClick={clickHandeler} className="text-2xl px-6 py-3 bg-[#DC5F00]">Add</button>
      </div>
      <Work data={data} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
};

export default Main;
