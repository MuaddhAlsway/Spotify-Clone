import Player from "./components/Player"
import Sidebar from "./components/sidebar"


function App() {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar/>
        
      </div>
      <Player/>
    </div>
  )
}

export default App
