export default async (req, res) => {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  res.status(200).json({
    response,
  });
};
