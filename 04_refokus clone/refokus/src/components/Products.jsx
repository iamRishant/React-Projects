import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import vid1 from '../assets/vid1.webm';
import vid2 from '../assets/vid2.webm';
import vid3 from '../assets/vid3.webm';
import vid4 from '../assets/vid4.webm';

const Products = () => {
  let data = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      btn1: true,
      btn2: false,
    },
    {
      title: "Cula",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      btn1: true,
      btn2: true,
    },
    {
      title: "Layout Land",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      btn1: true,
      btn2: false,
    },
    {
      title: "TTR",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      btn1: true,
      btn2: true,
    },
  ];

  const [val,setVal]=useState(0);

  const mover=(index)=>{
    setVal(index*23);
    // console.log(index);
    // console.log("Hello");
  }
  
  return (
    <div className="w-full mt-16 relative">
    {
      data.map((item,index)=>(<Product item={item} count={index} mover={mover}/>))
    }
    <div className="absolute w-full h-full top-0 pointer-events-none">
      <motion.div transition={{ease:[0.65, 0, 0.35, 1], duration:0.4}} initial={{y:val,x:"-50%"}} animate={{y:val+`rem`}} className="window h-[23rem] w-[27rem] absolute left-[45%]  overflow-hidden">
        <motion.div transition={{ease:[0.65, 0, 0.35, 1], duration:0.4}} animate={{y:-val+`rem`}} className="w-full h-full  ">
          <video className="w-full h-full" autoPlay muted loop src={vid1}></video>
        </motion.div>
        <motion.div transition={{ease:[0.65, 0, 0.35, 1], duration:0.4}} animate={{y:-val+`rem`}} className="w-full h-full  ">
        <video className="w-full h-full" autoPlay muted loop src={vid2}></video>
        </motion.div>
        <motion.div transition={{ease:[0.65, 0, 0.35, 1], duration:0.4}} animate={{y:-val+`rem`}} className="w-full h-full  ">
        <video className="w-full h-full" autoPlay muted loop src={vid3}></video>
        </motion.div>
        <motion.div transition={{ease:[0.65, 0, 0.35, 1], duration:0.4}} animate={{y:-val+`rem`}} className="w-full h-full  ">
        <video className="w-full h-full" autoPlay muted loop src={vid4}></video>
        </motion.div>
          
      </motion.div>
    </div>
    </div>
  );
};

export default Products;
