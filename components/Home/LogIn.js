import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  closeSlidingComponent,
  openSlidingComponent,
} from "../../redux/sliderSlice";
import { auth } from "../../firebase/config";

const LogIn = () => {
  const _isMounted = useRef(true);
  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      dispatch(closeSlidingComponent());
      setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div className="md:p-4  flex flex-row flex-wrap">
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg"
      >
        <div className="text-2xl text-indigo-900">Log In </div>
        <button
          onClick={() => dispatch(openSlidingComponent("Sign up"))}
          className="text-gray-500"
        >
          or create an account
        </button>
        <div className="flex-col flex py-3">
          <label htmlFor="email" className="pb-2 text-gray-700 font-semibold">
            Your Email
          </label>
          <input
            value={state.email}
            onChange={handleChange}
            type="email"
            name="email"
            required
            className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
          />
        </div>

        <div className="flex-col flex py-3">
          <label htmlFor="pass" className="pb-2 text-gray-700 font-semibold">
            Your Password
          </label>
          <input
            value={state.password}
            onChange={handleChange}
            type="password"
            name="password"
            minLength="8"
            required
            className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
          />
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className="p-3 bg-indigo-400 text-white w-full hover:bg-indigo-300"
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
