"use client";
import { useEffect, useState } from "react";
import Character from "./CharacterRandom";
// import { useState, useEffect } from "react";

// function randomNumber() {
//   let id = Math.floor(Math.random() * 52);
//   console.log(`Randomly generated number: ${id}`);
//   return id;
// }
export function Characters() {
  const [data, setData] = useState("");
  async function fetchRequest() {
    // function to create a random number to be inserted into API Url
    let id = Math.floor(Math.random() * 52);
    console.log(`Randomly generated number: ${id}`);
    try {
      const gotData = await fetch(
        `https://thronesapi.com/api/v2/Characters/${id}`,
        { headers: { Accept: "application/json" } }
      );
      let newData = await gotData.json();
      setData(newData);
    } catch (error) {
      error.log("error retrieving random GOT character");
    }
  }

  return (
    <div>
      <button onClick={fetchRequest} className="border rounded p-3 font-serif text-4xl text-gray-100 text-center bg-gray-900">Random character button</button>
      <Character data={data}></Character>
    </div>
  );
}

export default Characters;
//make an id variable that uses Math.random to generate a random number between 0 and 52
// write a function that makes the fetch request to https://thronesapi.com/api/v2/Characters/{id}
// save that function into a useEffect hook. The dependency array trigger will be the button being pushed
// parse the returned JSON data and save it to a variable
// pass that variable down as props to CharacterRandom component

// /- look into next image component and how to render images from the web
