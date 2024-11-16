import React, { useState } from "react";
import { Copy, PlusCircle } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

function Home({ myPastes, setMyPastes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Create a new paste object
    let paste = {
      title: title,
      content: content,
      id: Date.now(), // Use current timestamp for unique ID
    };

    // Update the state with the new paste
    setMyPastes((prevPastes) => [...prevPastes, paste]);

    // Clear the input fields
    setTitle("");
    setContent("");
    toast.success("Blog created!");
  }
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-10 ">
      <div className="flex flex-col gap-y-5 items-start">
        <div className="w-full flex flex-row gap-x-4 justify-between items-center m-auto">
          <input
            className="text-black border focus:outline-none focus:shadow-md rounded-md p-2  min-w-[60%] w-[100%]"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700  min-w-[100px] w-[200px] mt-[7px] "
            onClick={handleSubmit} // Use onClick instead of onSubmit
          >
            Create Blog
          </button>
        </div>

        <div
          className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl`}
        >
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 border-b border-[rgba(128,121,121,0.3)]`}
          >
            <div className="w-full flex gap-x-[6px] items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(255,95,87)]" />
              <div
                className={`w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(254,188,46)]`}
              />
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-[1px] overflow-hidden bg-[rgb(45,200,66)]" />
            </div>
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(content);
                  toast.success("Copied!");
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>
          <textarea
            placeholder="Enter content here..."
            className="min-w-[100%] p-2 min-h-[300px] rounded-md text-gray-600 overflow-y-scroll scrollbar-none focus:outline-none focus:shadow-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={true} />
    </div>
  );
}

export default Home;
