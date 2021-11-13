import styles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <Link href="/">
          <a>
            <h3 className={styles.navLogo}>Serverless Demo</h3>
          </a>
        </Link>
        <ul className={styles.navLinks}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/users">
            <a>Users</a>
          </Link>

          <Link href="https://github.com/gsauarv/next_function">
            <a target="_blank">Link to Github</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
