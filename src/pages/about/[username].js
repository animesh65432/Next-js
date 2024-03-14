import { useRouter } from "next/router";
const user = () => {
  const { query } = useRouter();
  return (
    <>
      <p>Username : {query.username}</p>
    </>
  );
};

export default user;
