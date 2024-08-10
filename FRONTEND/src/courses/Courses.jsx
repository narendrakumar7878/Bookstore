import React from "react";
import Navbar from "../componets/Navbar";
import Course from "../componets/Course";
import Footer from "../componets/Footer";
// import Cards from "../componets/Cards";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
