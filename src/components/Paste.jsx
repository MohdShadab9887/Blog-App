import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";

export const FormatDate = (date) => {
  const _date = new Date(date);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(_date);

  return formattedDate;
};

function Paste({ myPastes, setMyPastes }) {
  const [searchPaste, setSearchPaste] = useState("");

  const filteredData = myPastes.filter((paste) => {
    return paste.title.toLowerCase().includes(searchPaste.toLowerCase());
  });

  return (
    <div className="w-[80%] m-auto p-6">
      <input
        value={searchPaste}
        onChange={(e) => setSearchPaste(e.target.value)}
        type="text"
        placeholder="Search"
        className="border-2 border-gray-200 w-full p-2 rounded focus:outline-none focus:shadow-md overflow-y-scroll "
      />

      <div className="rounded-t font-bold text-2xl border-2 border-gray-200 p-4 mt-2">
        All Blogs
      </div>

      <div className="rounded-b border-b-2 border-x-2 border-gray-200 p-4">
        {filteredData.length > 0 ? (
          filteredData.map((paste, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <div className="border border-gray-200 w-full md:w-[50%] m-2 p-2 rounded">
                <h3 className="text-2xl font-semibold overflow-hidden">{paste.title}</h3>
                <p className="overflow-hidden">{paste.content}</p>
              </div>
              <div>
                <div className="flex flex-wrap justify-center gap-1">
                  <NavLink to={`/editblogs/${paste.id}`}>
                    <button className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-blue-500">
                      <PencilLine
                        className="text-black group-hover:text-blue-500"
                        size={20}
                      />
                    </button>
                  </NavLink>
                  <button
                    onClick={() => {
                      const newPastes = myPastes.filter(
                        (item) => item !== paste
                      );
                      setMyPastes(newPastes);
                      toast.success("Blog deleted successfully!");
                    }}
                    className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-pink-500"
                  >
                    <Trash2
                      className="text-black group-hover:text-pink-500"
                      size={20}
                    />
                  </button>
                  <NavLink to={`/blog/${paste.id}`}>
                    <button className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-orange-500">
                      <Eye
                        className="text-black group-hover:text-orange-500"
                        size={20}
                      />
                    </button>
                  </NavLink>
                  <button
                    className="p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-green-500"
                    onClick={() => {
                      navigator.clipboard.writeText(paste.title),
                        toast.success("Copied to clipboard");
                    }}
                  >
                    <Copy
                      className="text-black group-hover:text-green-500"
                      size={20}
                    />
                  </button>
                </div>
                <div className="flex mt-1 items-center gap-1 "><Calendar className="text-black" size={20} />  {FormatDate(paste.id)}</div>
              </div>
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>
      {/* Toast container to display toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
      />
    </div>
  );
}

export default Paste;
