import { useRouter } from "next/router";

const obj = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Id = () => {
  const { query } = useRouter();
  const id = parseInt(query.id);
  const index = id ? id - 1 : undefined;

  if (index === undefined || index >= obj.length || index < 0) {
    return (
      <div>
        <h1>Developer doesn't exist</h1>
      </div>
    );
  }

  return (
    <div>
      <p>Role: {obj[index].role}</p>
    </div>
  );
};

export default Id;
