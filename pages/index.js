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
        background: "url('http://i.redd.it/8pvdi0pne8a51.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        transform: "scale(1.5)",
      }}
      />
    </div>
    </section>
   <section className="info">
     <span className="sub-title">
       Offical news from Playstation | 32 minutes ago
     </span>
     <h1> Ready for a PS5 Adventure?</h1>
     <p>
      ASTRO's PLAYROOM is pre-loaded and waiting for you!
      explore the new capabilities of PS5 and feel the world.
    </p>
   </section>
  </div>
</div>
 )
} 

// export default function Home()
