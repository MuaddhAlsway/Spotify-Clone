import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome.jsx";
import Displaysong from "./Displaysong.jsx";
import DisplayAlbum from "./DisplayAlbum.jsx";
import { useRef, useEffect } from "react";
import { albumsData } from "../assets/assets.js";
function Display() {

  const displayRef = useRef();
  const location = useLocation( );
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : '';
  const bgColors = albumsData[Number(albumId)].bgColor
  
  useEffect(() => {
    if(isAlbum) {
      displayRef.current.style.background = `linear-gradient( ${bgColors}, #121212)`;
    }
    else {
      displayRef.current.style.background = '#121212';
    }
  })
  return (
    <div ref={displayRef} className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/song/:id" element={<Displaysong />} />
      </Routes>
    </div>
  );
}

export default Display;
