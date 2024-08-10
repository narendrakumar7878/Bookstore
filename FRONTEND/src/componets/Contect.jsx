//import React from "react";
//import list from "../../public/list.json";
//import Cards from "./Cards";
import { Link } from "react-router-dom";
//import { useForm } from "react-hook-form";

function Contect() {
  return (
    <>
      <div className="max-w-screen-2x1  mx-auto md:px-20 px-4">
        <div className="mt-28 itmes-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">Contect Us</h1>

          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name:</span>
              <br />
              <input
                type="text"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                placeholder="Enter Your name"
                // {...register("name", { required: true })}
              ></input>
              <br />
            </div>

            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email:</span>
              <br />
              <input
                type="email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                placeholder="Enter Your Email"
                // {...register("email", { required: true })}
              ></input>
            </div>
            {/* Messages */}
            <div className="mt-4 space-y-2">
              <span>Message:</span>
              <br />
              <textarea
                placeholder="Enter Message"
                className="textarea border textarea-bordered textarea-xs w-full max-w-xs "
              ></textarea>
            </div>
          </form>

          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contect;
