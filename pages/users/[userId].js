const User = ({ result }) => {
  return (
    <div>
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
