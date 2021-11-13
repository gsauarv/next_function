import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Serverless Demo | Home </title>
      </Head>
      <div className="container">
        <div>
          <h1 className={styles.heading}>Serverless Demo</h1>
          <p className={styles.paragraph}>
            This is the demo of the how I begin to understand the concept of the
            serverless function.To deploy the serverless function I use the
            default vercel serverless configuration.
          </p>

          <p className={styles.landingNote}>
            Note: This is my first ever serverless function so,their may be some
            noob mistakes.
          </p>

          <p className={styles.paragraph}>
            Click the users link to see it in action.
          </p>

          <Link href="/users" className={{ width: "350px" }}>
            <button className={styles.btn}>Serverless in action</button>
          </Link>

          <Link href="/api/users">
            <button className={styles.btn}>Click to visit api</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
