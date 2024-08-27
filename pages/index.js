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
    <p>
      Hi, I'm Jan Raymond Soriano. Here’s a bit about me:
    </p>
    <ul>
      <li><strong>Hobbies:</strong> Listening to music and sleeping</li>
      <li><strong>Favourite Music:</strong> "Alone" by Marshmello</li>
      <li><strong>Favourite Food:</strong> Tonilang Manok</li>
      <li><strong>Reason for Choosing IT:</strong> I became fascinated with technology in high school, and my first coding experience was with HTML.</li>
      <li><strong>Career Aspirations:</strong> I see myself working as a game developer, web developer, or web designer. However, if the competition is high, I might work in a call center instead.</li>
      <li><strong>Current Skills and Goals:</strong> I know some basics of HTML and CSS but want to learn more, particularly applying JavaScript to HTML and exploring advanced areas of CSS and JavaScript.</li>
    </ul>
  </article>
</main>

      <footer className={styles.footer}>
        <p>(This is a sample website - you'll be building a site like this on <a href='https://github.com/Killua0720/nextjsblog1.git'>our Next.js tutorial.)</a></p>
      </footer>
    </div>
  )
}

