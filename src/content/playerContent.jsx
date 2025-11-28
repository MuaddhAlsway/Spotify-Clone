import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    duration: { second: 0, minute: 0 },
  });

  const seekSong = async (e)=>{
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
  }
  const play = () => setPlayStatus(true);
  const pause = () => setPlayStatus(false);

  const playWithId = (id) => {
    setTrack(songsData[id]);
    setPlayStatus(true);
  };

  const previus = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      setPlayStatus(true);
    }
  };

  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      setPlayStatus(true);
    }
  };

  // Play when track changes
  useEffect(() => {
    if (!audioRef.current) return;
    if (playStatus) audioRef.current.play();
    else audioRef.current.pause();
  }, [track, playStatus]);

  // Update seek bar & time
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.ontimeupdate = () => {
      seekBar.current.style.width = `${
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      }%`;
      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60) || 0,
          minute: Math.floor(audioRef.current.currentTime / 60) || 0,
        },
        duration: {
          second: Math.floor(audioRef.current.duration % 60) || 0,
          minute: Math.floor(audioRef.current.duration / 60) || 0,
        },
      });
    };
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    time,
    setTime,
    playStatus,
    setPlayStatus,
    play,
    pause,
    playWithId,
    previus,
    next,seekSong
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
