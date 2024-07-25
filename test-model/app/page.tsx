// pages/index.js
"use client";
import Link from "next/link";

import { Redirect } from "next";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { sign } from "crypto";
import { useRouter } from "next/router";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <header className="absolute top-0 left-0 right-0 flex justify-between p-4 bg-gray-800">
        <div className="text-pink-500 text-xl font-bold">DEVZERY</div>

        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md"
          onClick={function () {
            signIn();
          }}
        >
          Sign In
        </button>
      </header>
      <div className="text-center">
        <h1 className="text-4xl text-white mb-8">Welcome to Devzery</h1>
        <div className="space-x-4">
          <Link href={"/Issuecreation"}>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
              Create Issue
            </button>
          </Link>
          <Link href={"/Seeissues"}>
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-md"
              onClick={function () {
                // redirect("/Seeissues");
              }}
            >
              See Issues
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
