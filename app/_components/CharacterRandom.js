"use client";
import { useState } from "react";
import Image from "next/image";
import Characters from "./characters";

export default function Character({ data }) {
  // const [name, setName] = useState();
  // setName(data);

  console.log(data);
  return (
    <section className="m-15 justify-center pt-10">
      <h1 className="text-5xl">{data.title}</h1>
      <div className="flex justify-center items-center">
        <img
          className="m-10"
          src={data.imageUrl}
          alt="random got character"
          width={400}
          height={400}
        />
      </div>

      <p className="text-7xl m-10">{data.fullName}</p>
    </section>
  );
}
