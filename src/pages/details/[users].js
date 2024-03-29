import Link from "next/link";
import { useRouter } from "next/router";

const obj = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const User = () => {
  const { query } = useRouter();
  const usernumber = parseInt(query.users);

  if (isNaN(usernumber) || usernumber < 1 || usernumber > obj.length) {
    return (
      <div>
        <h1>Developer doesn't exist</h1>
      </div>
    );
  }

  const user = obj[usernumber - 1];

  return (
    <div>
      <Link href={`/role/${user.id}`}>
        <p>Name: {user.name}</p>
      </Link>
    </div>
  );
};

export default User;
