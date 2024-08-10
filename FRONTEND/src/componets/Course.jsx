import  { useEffect, useState } from "react";

import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://localhost:4001/book");
        console.log(response);
        setbook(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 itmes-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
           We re delighted to have you{" "}
            <span className="text-pink-500"> here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatem, quod, quia, quas, quibusdam quidem qu Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Adipisci doloribus ipsam
            molestias eaque, enim perspiciatis dolore obcaecati accusamus, ullam
            accusantium fuga consequuntur, odit unde. Minus minima harum
            voluptas doloribus incidunt?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((data) => (
            <Cards key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
