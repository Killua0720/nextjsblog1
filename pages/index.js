import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/Mello.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className={styles.profilePic}
        />
        <h1></h1>
      </header>
      <main className={styles.main}>
        <article className={styles.post}>
          <h2>Introduce Yourself</h2>
          <p>Jan Raymond Soriano,<br/> My Hobbies are Listening to Music and Sleeping <br/> 
          Favourite Music Alone by Marshmello <br/> Favourite Food Tonilang Manok <br/> I took the IT course because when I got Highschool i got facisnated on Technology and 
          That my First coding experience was HTML <br/> Probably see myself working as Game Developer, Web Developer or Web Designer but if the competition is high gonna work in Callcenter instead
          <br/> I already know some basics of HTML and CSS but i want learn more applying Javascript on HTML. <br/> More Advanced area on CSS and Javascript application on the Website.  </p> 
        </article>
      </main>
      <footer className={styles.footer}>
        <p>Love Pampanga!</p>
      </footer>
    </div>
  )
}

