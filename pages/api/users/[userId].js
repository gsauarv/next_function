export default async (req, res) => {
  const userId = await req.query.userId;
  const response = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  ).json();

  res.status(200).json({
    response,
  });
};
