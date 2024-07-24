// "use client";
// import axios from "axios";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import { useState } from "react";

// export default function CreateIssue() {
//   const { data: session, status } = useSession();
//   const [testcasename, settestcasename] = useState("");
//   const [description, settestdesc] = useState("");
//   const [estimatedtime, setestimatedtime] = useState(0);
//   const [module, setmodule] = useState("");
//   const [Priority, setpriority] = useState("");

//   if (status === "loading") {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         Loading...
//       </div>
//     );
//   }

//   if (status === "unauthenticated") {
//     redirect("/api/auth/signin");
//   }

//   if (status === "authenticated") {
//     return (
//       <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-md">
//         <h1 className="text-2xl font-bold text-white mb-6">Create an Issue</h1>
//         <form className="space-y-4">
//           <div className="form-group">
//             <label htmlFor="testCaseName" className="block text-white mb-1">
//               Test Case Name
//             </label>
//             <input
//               onChange={function (e) {
//                 settestcasename(e.currentTarget.value);
//               }}
//               type="text"
//               id="testCaseName"
//               placeholder="Test Case Name"
//               className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="testDescription" className="block text-white mb-1">
//               Test Description
//             </label>
//             <input
//               onChange={function (e) {
//                 settestdesc(e.target.value);
//               }}
//               type="text"
//               id="testDescription"
//               placeholder="Test Description"
//               className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="estimateTime" className="block text-white mb-1">
//               Estimate Time (in minutes)
//             </label>
//             <input
//               onChange={function (e) {
//                 setestimatedtime(e.target.value);
//               }}
//               type="number"
//               id="estimateTime"
//               placeholder="Enter the time"
//               className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="module" className="block text-white mb-1">
//               Module
//             </label>
//             <input
//               type="text"
//               id="module"
//               placeholder="Module"
//               className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
//             />
//           </div>

//           <div className="form-group">
//             <label className="block text-white mb-1">Priority</label>
//             <div className="flex items-center space-x-4">
//               <div>
//                 <input
//                   type="radio"
//                   id="high"
//                   name="priority"
//                   value="High"
//                   className="mr-2"
//                 />
//                 <label htmlFor="high" className="text-white">
//                   High
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="medium"
//                   name="priority"
//                   value="Medium"
//                   className="mr-2"
//                 />
//                 <label htmlFor="medium" className="text-white">
//                   Medium
//                 </label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   id="low"
//                   name="priority"
//                   value="Low"
//                   className="mr-2"
//                 />
//                 <label htmlFor="low" className="text-white">
//                   Low
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="form-group"></div>

//           <button
//             type="submit"
//             onClick={async function () {
//               const res = await axios.post("/api/Testcasecreation");
//             }}
//             className="w-full bg-pink-500 text-white py-2 rounded-md mt-4"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return null;
// }

"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function CreateIssue() {
  const { data: session, status } = useSession();

  // State for the form fields
  const [formData, setFormData] = useState({
    testCaseName: "",
    testDescription: "",
    estimateTime: "",
    module: "",
    priority: "LOW",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Testcasecreation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Handle successful form submission
      console.log("Issue created successfully");
    } else {
      // Handle errors
      console.log("Error creating issue");
    }
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin");
  }

  if (status === "authenticated") {
    return (
      <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-white mb-6">Create an Issue</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="testCaseName" className="block text-white mb-1">
              Test Case Name
            </label>
            <input
              type="text"
              id="testCaseName"
              name="testCaseName"
              placeholder="Test Case Name"
              value={formData.testCaseName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="form-group">
            <label htmlFor="testDescription" className="block text-white mb-1">
              Test Description
            </label>
            <input
              type="text"
              id="testDescription"
              name="testDescription"
              placeholder="Test Description"
              value={formData.testDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="form-group">
            <label htmlFor="estimateTime" className="block text-white mb-1">
              Estimate Time (in minutes)
            </label>
            <input
              type="number"
              id="estimateTime"
              name="estimateTime"
              placeholder="Enter the time"
              value={formData.estimateTime}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="form-group">
            <label htmlFor="module" className="block text-white mb-1">
              Module
            </label>
            <input
              type="text"
              id="module"
              name="module"
              placeholder="Module"
              value={formData.module}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          <div className="form-group">
            <label className="block text-white mb-1">Priority</label>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="high"
                  name="priority"
                  value="HIGH"
                  checked={formData.priority === "HIGH"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="high" className="text-white">
                  High
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="medium"
                  name="priority"
                  value="MEDIUM"
                  checked={formData.priority === "MEDIUM"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="medium" className="text-white">
                  Medium
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="low"
                  name="priority"
                  value="LOW"
                  checked={formData.priority === "LOW"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="low" className="text-white">
                  Low
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return null;
}
