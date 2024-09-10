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
    <h2>Jan Raymond Soriano</h2>
    <p>
      10 Things That Require Zero Talent
    </p>
    <ul>
      <li><strong>Being On Time</strong></li>
      <li><strong>Making An Effort</strong></li>
      <li><strong>Being High Energy</strong></li>
      <li><strong>Having A Positive Attitude</strong></li>
      <li><strong>Being Passionate</strong></li>
      <li><strong>Using Good Body Language</strong></li>
      <li><strong>Being Coachable</strong></li>
      <li><strong>Doing A Little Extra</strong></li>
      <li><strong>Being Prepared</strong></li>
      <li><strong>Having A Strong Work Ethic</strong></li>
    </ul>
  </article>
</main>

      <footer className={styles.footer}>
        <p>(This is a sample website - you'll be building a site like this on <a href='https://github.com/Killua0720/nextjsblog1.git'>our Next.js tutorial.)</a></p>
      </footer>
    </div>
  )
}

