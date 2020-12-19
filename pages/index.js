import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    // Header Section
<div className="screen">
  <header>
    <section className="media-nav">
    <a href="#" className="active">
      Games
    </a>
    <a href="#">Media</a>
    </section>
    <section className="settings">
    <span className="icon">
      <i className="fa fa-search"></i>
    </span>
    <span className="icon">
      <i className="fa fa-cog"></i>
    </span>
    <span className="icon">
      <img
      className="user"
      src="https://randomuser.me/api/portraits/men/2.jpg"
      />
    </span>
    <span className="time">7:00 PM</span>
    </section>
</header>
 {/* End Of Header */}
 
 {/* 90 percent of screen view */}
 <div className="container">
    <section  className="game-nav">
    <div className="game active">
      <i className="fa fa-location-arrow"></i>
    </div>
      <div className="game">
      <div
      className="img"
      style={{
        background: "url('https://resizeimage.net/mypic/kDIKKQ8bA9Jjg4JZ/hHpWt/220px-black_ops_cold_war.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      />
    </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('https://resizeimage.net/mypic/xyGHTGf3U7BVu02u/g3Ruz/fortniteps5.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      />
    </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('http://i.redd.it/8pvdi0pne8a51.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      />
    </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('https://resizeimage.net/mypic/c06FcwkbDsMnr5UA/bQ0VH/https___cdn-cnn-com_cnnnext_da.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      />
    </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('https://resizeimage.net/mypic/NDReVryc6ZV9niUw/1kVPa/godfall.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      />

    {/* </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('http://i.redd.it/8pvdi0pne8a51.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      /> */}

    {/* </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('http://i.redd.it/8pvdi0pne8a51.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      /> */}

    {/* </div>
    <div className="game">
      <div
      className="img"
      style={{
        background: "url('http://i.redd.it/8pvdi0pne8a51.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      /> */}

    </div>
    </section>
   <section className="info">
     <span className="sub-title">
       Offical News From Playstation | 32 minutes ago
     </span>
     <h1> Ready for a PS5 Adventure?</h1>
     <p>
      ASTRO's PLAYROOM is pre-loaded and waiting for you!
      explore the new capabilities of PS5 and feel the world.
    </p>
   </section>
   </div>
  <section id="video-trailers">
    
    <div className="trailer">
      <img
      className="image"
      src="https://static1-www.millenium.gg/articles/6/19/86/6/@/196478-bo-cold-war-reveal-3-article_m-1.jpg"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">Call of Duty: Cold War</span>
    </div>
</div>

{/* <div className="trailer">
      <img
      className="image"
      src="https://i.imgur.com/Wy1anig.png"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">Cyber Punk 2077</span>
    </div>
</div> */}


<div className="trailer">
      <img
      className="image"
      src="https://cdn2.unrealengine.com/15br-social-lineup-social-1920x1080-685054651.jpg"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">Fortnite</span>
    </div>
</div>

<div className="trailer">
      <img
      className="image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsEzqnRlRfqzRgTvWNSI4axkhEMl5mtPd0g&usqp=CAU"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">Spider Man: Miles Morales</span>
    </div>

</div>
<div className="trailer">
      <img
      className="image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA712LdhWJ738ZDw0f4X-BGKn9_1LA-931BQ&usqp=CAU"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">NBA 2k21</span>
    </div>
</div>
<div className="trailer">
      <img
      className="image"
      src="https://www.godfall.com/images/screenshots/Combat-1920.jpg"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">GodFall</span>
    </div>
</div>

{/* <div className="trailer">
      <img
      className="image"
      src="https://static1-www.millenium.gg/articles/6/19/86/6/@/196478-bo-cold-war-reveal-3-article_m-1.jpg"
      />

<div className="video-info">
  <div className="circle-player">
    <i className="fa fa-play"></i>
  </div>
  
  <span className="title">Cyber Punk 2077</span>
    </div>
</div> */}
</section>
  </div>
 )
} 

// export default function Home()
