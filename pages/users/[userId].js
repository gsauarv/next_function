import Link from "next/link";
import styles from "../../styles/Users.module.css";
import Head from "next/head";
const User = ({ result }) => {
  return (
    <>
      <Head>
        <title>Serverless Demo | Users Details</title>
      </Head>
      <div className="container">
        <Link href="/users">
          <h3 className={styles.hoverLink}> &#8598; Back to users</h3>
        </Link>
        <p>{result.id}</p>
        <h1>{result.name}</h1>
        <p>{result.username}</p>
        <p>From {result.address.city}</p>
        <h6>{result.email}</h6>

        <pre>
          {result.company.name}
          <br />
          {result.company.catchPhrase}
        </pre>
      </div>
    </>
  );
};

export default User;

export async function getStaticPaths() {
  const users = await (
    await fetch("https://next-function-mauve.vercel.app/api/users/")
  ).json();

  const paths = users.response.map((user) => ({
    params: { userId: user.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const userId = params.userId;
  const { response } = await (
    await fetch(`https://next-function-mauve.vercel.app/api/users/${userId}`)
  ).json();
  return {
    props: {
      result: response,
    },
  };
}
