import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Cards />
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
