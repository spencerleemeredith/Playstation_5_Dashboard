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
      src="https://pbs.twimg.com/profile_images/1333185751958183938/zc9HL84R_400x400.jpg"
      />
    </span>
    <span className="time">7:00 PM</span>
    </section>
</header>
 {/* End Of Header */}
</div>
 
  )
} 

// export default function Home()
