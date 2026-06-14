"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      const _data = await response.json();
      setData(_data);
    };
    getData();
  }, []);
  return (
    <div key={data.id}>
      <h1>{data.title}</h1>
      <p>{data.completed ? "True" : "False"}</p>
    </div>
  );
}
