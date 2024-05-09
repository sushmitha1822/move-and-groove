import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import About from "./components/About";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from './components/Contact';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-white-900 bg-white dark:text-white wrapper ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/About.jsx" element={<About />} />
          <Route path="/Contact.jsx" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Toaster />
      </div>
    </>
  );
}

export default App;
