export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);

  return (
    <div key={data.id}>
      <h1>{data.title}</h1>
      <p>{data.completed ? "True" : "False"}</p>
    </div>
  );
}
