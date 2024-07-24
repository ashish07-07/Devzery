"use client";
import { useSession } from "next-auth/react";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export default function () {
  const session = useSession();

  if (!session) {
    redirect("/api/auth/signin");
  } else {
    return (
      <div>
        <h1>create a issue </h1>
        <input
          type="text"
          placeholder="Test Case-Name "
          className="text-black"
        ></input>
        <input
          type="text"
          placeholder="Test Description"
          className="text-black"
        ></input>
        <input
          type="time"
          placeholder="enter the time"
          className="text-black"
        ></input>
        <input type="text" placeholder="module" className="text-black"></input>

        <input id="1" type="radio" name="pr" placeholder="High"></input>
        <input id="2" type="radio" name="pr" placeholder="Medium"></input>
        <input id="3" type="radio" name="pr" placeholder="Low"></input>
      </div>
    );
  }
}
