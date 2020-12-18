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

    </section>



 </div>
</div>
 
  )
} 

// export default function Home()
