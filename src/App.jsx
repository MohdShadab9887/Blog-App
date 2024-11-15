import { useEffect, useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import EditPaste from "./components/EditPaste";

function App() {
  // Initialize myPastes with data from localStorage, if available
  const [myPastes, setMyPastes] = useState(() => {
    const savedPastes = localStorage.getItem("myPastes");
    return savedPastes ? JSON.parse(savedPastes) : [];
  });

  // Update localStorage whenever myPastes changes
  useEffect(() => {
    localStorage.setItem("myPastes", JSON.stringify(myPastes));
  }, [myPastes]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home myPastes={myPastes} setMyPastes={setMyPastes} />
        </div>
      ),
    },
    {
      path: "/blog",
      element: (
        <div>
          <Navbar />  
          <Paste myPastes={myPastes} setMyPastes={setMyPastes} />
        </div>
      ),
    },
    {
      path: "/blog/:id", // Dynamic route for viewing a specific paste
      element: (
        <div>
          <Navbar />
          <ViewPaste myPastes={myPastes} />
        </div>
      ),
    },
    {
      path: "/editblogs/:id", // Dynamic route for viewing a specific paste
      element: (
        <div>
          <Navbar />
          <EditPaste myPastes={myPastes} setMyPastes={setMyPastes} />
        </div>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
