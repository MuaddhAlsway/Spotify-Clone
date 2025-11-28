import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from  './song1.mp3'
import song2 from  './song2.mp3'
import song3 from  './song3.mp3'
import chrisbrown1 from './chrisbrown1.mp3'
import chrisbrown2 from './chrisbrown2.mp3'
import chrisbrown3 from './chrisbrown3.mp3'
import chrisbrown4 from './chrisbrown4.mp3'
import ib from './OIP (1).webp'
import ib1 from './OIP.webp'
import valtboy from './valtboy.mp3'
import OF from './OIF.webp'
import img17 from './img17.jpg'
import img18 from './img18.webp'
import SongOF from './FallingSlowly.mp3'
import chrisrownalbum from './This-Is-Chris-Brown (1).jpg'
import badDesicion from './badhabit.mp3'
import badDesicion1 from './badhabit1.mp3'
import wepray from './wepray.mp3'
export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    },
    {
        id:6,
        name: "Chris brown",
        image: img17,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#1a202c"

    },
    {    id:7,
        name: "Valtboy",
        image: img18,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#4a5568"
    }
    ,
]

export const songsData = [
    {
        id:0,
        name: "Song One",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Bad Habit",
        image: img11,
        file:badDesicion1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Song Five",
        image: img5,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Song Six",
        image: img14    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    },

    
      {
        id:8,
        name: "Under the influence ",
        image: chrisrownalbum,
         file:chrisbrown1,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#1a202c",
        duration:"2:35"
    },{
  id: 9,
  name: "Angel Number",
  image: chrisrownalbum,
  file: chrisbrown4,
  desc: "Your weekly update of the most played tracks",
  duration: "3:31",
  bgColor: "#1a202c"
},
{
  id: 10,
  name: "Residuals",
  image: chrisrownalbum,
  file: chrisbrown2,
  desc: "Your weekly update of the most played tracks",
  duration: "2:58",
  bgColor: "#1a202c"
},
{
  id: 11,
  name: "Sensational",
  image: chrisrownalbum,
  file: chrisbrown3,
  desc: "Your weekly update of the most played tracks",
  duration: "3:45",
  bgColor: "#1a202c"
},
{
  id: 12,
  name: "Everything Everywhere",
  image: img18,
  file: valtboy,
  desc: "Your weekly update of the most played tracks",
  duration: "4:10",
  bgColor: "#4a5568"
},
{
  id: 13,
  name: "Falling Slowly ",
  image: OF,
  file: SongOF,
  desc: "Your weekly update of the most played tracks",
  duration: "3:57",
  bgColor: "#4a5568"
}
,
{
  id: 14,
  name: "Bad Decision",
  image: ib,
  file: badDesicion,
  desc: "Your weekly update of the most played tracks",
  duration: "3:57",
  bgColor: "#4a5568"
}
  ,
{
  id: 15,
  name: "We Pray",
  image: ib1,
  file: wepray,
  desc: "Your weekly update of the most played tracks",
  duration: "3:57",
  bgColor: "#4a5568"
}  
    
]