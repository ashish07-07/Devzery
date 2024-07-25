"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import prisma from "../db";

export default function Issue() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    async function GetDetails() {
      const res = await axios.get("/api/getIssues");
      setData(res.data.response);
    }

    GetDetails();
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto py-10">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search issue..."
            className="w-1/2 p-2 rounded-l-md bg-gray-700"
          />
          <button className="p-2 bg-pink-500 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 4a4 4 0 018 0v4h-2a2 2 0 00-2 2v4a2 2 0 00-2 2H4a4 4 0 010-8h4V4z"
              />
            </svg>
          </button>
        </div>
        <div className="bg-blue-800 p-6 rounded-md shadow-md">
          <div className="grid grid-cols-5 gap-4 mb-4 font-bold">
            <div>Test Case Name</div>
            <div>Estimate Time (in minutes)</div>
            <div>Module</div>
            <div>Priority</div>
            <div>Status</div>
          </div>
          {datas.map((val, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 p-2 mb-2 bg-blue-700 rounded-md"
            >
              <div>
                <div>{val.testcasename}</div>
                <div className="text-sm">
                  Last Updated: {new Date(val.updatedat).toLocaleString()}
                </div>
              </div>
              <div>{val.estimatedtime} Minutes</div>
              <div>{val.module}</div>
              <div>{val.priority}</div>
              <div>
                <select
                  className="bg-gray-700 text-white p-1 rounded-md "
                  onChange={async function (e) {
                    const { name, value } = e.target;
                    console.log(e);
                    // console.log(value);
                    console.log(name);
                    console.log(value);
                    console.log("status changed");

                    await axios.post("/api/updatestatus", {
                      id: val.id,
                      value: value,
                    });
                    alert("Status changed");
                  }}
                >
                  <option value="select">Select</option>
                  <option value="pass">PASS</option>
                  <option value="fail">FAIL</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
