export async function getUser(id) {
  console.log(id);
  const data = {
    user_id: id,
  };
  const res = await fetch(`${process.env.NEXT_PUBLIC_SRV_URL}/user`, data);
  console.log(res.user);
  return res.json();
}
