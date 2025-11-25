import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import Player from "./components/Player";

function App() {
  return (
    <div className="h-screen bg-black flex flex-col">
      <div className="flex h-[90%]">
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  );
}

export default App;
