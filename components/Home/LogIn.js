import React from "react";
import { useDispatch } from "react-redux";
import { openSlidingComponent } from "../../redux/sliderSlice";

const LogIn = () => {
  const dispatch = useDispatch();
  return (
    <div className="md:p-4  flex flex-row flex-wrap">
      <form className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg">
        <div className="text-2xl text-indigo-900">Log In </div>
        <button
          onClick={() => dispatch(openSlidingComponent("Sign up"))}
          className="text-gray-500"
        >
          or create an account
        </button>
        <div className="flex-col flex py-3">
          <label className="pb-2 text-gray-700 font-semibold">Your Email</label>
          <input
            type="text"
            className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
            placeholder="John@mail.com"
          />
        </div>

        <div className="flex-col flex py-3">
          <label className="pb-2 text-gray-700 font-semibold">
            Your Password
          </label>
          <input
            type="password"
            className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
            placeholder="2"
          />
        </div>

        <div className="mt-2">
          <button className="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
