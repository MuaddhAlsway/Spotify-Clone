import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Player from "./components/Player";
import { useContext } from "react";
import { PlayerContext } from "./content/playerContent";

function App() {

  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="flex h-[90%]">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
