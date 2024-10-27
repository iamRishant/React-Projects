import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer/Footer";
import Dynamic from "./components/Dynamic";
import DynamicUser from "./components/DynamicUser";
import DynamicInternal from "./components/DynamicInternal";
import Internal from "./components/Internal";

const App = () => {
  return (
    <div>
      <nav className="bg-red-200 flex gap-10 items-center justify-center text-2xl h-[10vh]">
        
        <NavLink
        className="hover:scale-125 duration-200 text-semibold"
          style={({ isActive }) => {
            return isActive ? { color: "white" } : {};
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        className="hover:scale-125 duration-200"
          style={({ isActive }) => {
            return isActive ? { color: "white" } : {};
          }}
          to="/about"
        >
          About
        </NavLink>
        {/* another method to add is active  */}
        <NavLink
          className={(e)=>{
            return [
              e.isActive && "text-white",
              "hover:scale-125 duration-200",
              "text-semibold"
            ].join(" ");
          }}
          
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink to="/dynamic" className={(e)=>{
          return [
              e.isActive && "text-white",
              "hover:scale-125 duration-200",
              "text-semibold"
            ].join(" ");
          
        }}>Dynamic Routing</NavLink>
        <NavLink to="/dynamicinternal" className={(e)=>{
          return [
              e.isActive && "text-white",
              "hover:scale-125 duration-200",
              "text-semibold"
            ].join(" ");
          
        }}>Dynamic Routing 2</NavLink>
      </nav>

{/* in routes me se koi ek hi render hoga jo bhi url me hoga baaki upar wala and niche wala layout ki trh kaam krega */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/dynamic" element={<Dynamic/>}/>
        <Route path="/dynamic/:name" element={<DynamicUser/>}/>
        <Route path="/dynamicinternal" element={<DynamicInternal/>}>
          <Route path="/dynamicinternal/:name" element={<Internal/>}/>
        </Route>
      </Routes>

      <div className="text-5xl w-full text-center bg-red-500">
        <Footer/>
      </div>
    </div>
  );
};

export default App;
