import { albumsData, songsData } from "../assets/assets.js";
import Album from "./Album.jsx";
import Navbar from "./Navbar.jsx";
import SongItem from "./SongItem.jsx";

function DisplayHome() {
  return (
    <>
      <Navbar />

      {/* FEATURE CHART */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Feature Chart</h1>

        <div className="flex overflow-auto gap-4 pb-2">
          {albumsData.map((item, index) => (
            <Album
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* TODAY'S BIGGEST HITS */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>

        <div className="flex overflow-auto gap-4 pb-2">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
