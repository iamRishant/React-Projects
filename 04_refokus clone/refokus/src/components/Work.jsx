import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  

  const imagesArray = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "60%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "63%",
      left: "52%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "45%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "53%",
      left: "55%",
      isActive: false,
    },
  ];
  const [images,setImages]=useState(imagesArray);//state bna rhe coz direct array ko change krne par react react nhiu krega state change hona chaiye

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showNhide(Math.floor(latest*100));
  });

  const showNhide=(currProgress)=>{
    // console.log(currProgress);
    if(currProgress >1) setImages([...images,images[0].isActive=true]);
    else if(currProgress <1) setImages([...images,images[0].isActive=false]);

    if(currProgress >3) setImages([...images,images[1].isActive=true]);
    else if(currProgress <3) setImages([...images,images[1].isActive=false]);
2
    if(currProgress >5) setImages([...images,images[2].isActive=true]);
    else if(currProgress <5) setImages([...images,images[2].isActive=false]);

    if(currProgress >7) setImages([...images,images[3].isActive=true]);
    else if(currProgress <7) setImages([...images,images[3].isActive=false]);

    if(currProgress >9) setImages([...images,images[4].isActive=true]);
    else if(currProgress <9) setImages([...images,images[4].isActive=false]);

    if(currProgress >11) setImages([...images,images[5].isActive=true]);
    else if(currProgress <11) setImages([...images,images[5].isActive=false]);
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto   text-center relative ">
        <h1 className="text-[30vw] font-medium leading-none select-none">
          Work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map((elem, index) => {
            return (
              elem.isActive && (
                <img
                  className="absolute w-[23%] -translate-x-[50%] -translate-y-[50%] rounded-lg"
                  src={elem.url}
                  alt=""
                  style={{ top: elem.top, left: elem.left }}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
