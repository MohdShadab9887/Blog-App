import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Copy } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

function ViewPaste({ myPastes }) {
  const { id } = useParams();
  let arr = [];

  myPastes.filter((item, index) => {
    if (item.id == id) {
      arr.push(myPastes[index]);
    }
  });

  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-10">
      <div className="flex flex-col gap-y-5 items-start">
        <input
          className="w-full text-black border border-input rounded-md p-2"
          placeholder="Title"
          type="text"
          value={arr[0].title}
          disabled
        />
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
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
            >
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center  transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(arr[0].content);
                  toast.success("Copied!");
                }}
              >
                <Copy className="group-hover:text-sucess-500" size={20} />
              </button>
            </div>
          </div>

          <textarea
            placeholder="Enter content here..."
            className="w-full p-3  focus-visible:ring-0 min-h-[300px] overflow-y-scroll scrollbar-none"
            value={arr[0].content}
            style={{
              caretColor: "#000",
            }}
            disabled
          />
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={true} />

    </div>
  );
}
export default ViewPaste;