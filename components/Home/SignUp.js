import React, { useState, useEffect, useRef } from "react";
import { auth, createUserProfileDocument } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { openSlidingComponent } from "../../redux/sliderSlice";
import { LogInUser } from "../../redux/userSlice";

const SignUp = () => {
  const _isMounted = useRef(true);
  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordMatch: true,
  });
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword, passwordMatch } =
      state;
    if (password !== confirmPassword) {
      //   alert("passwords dont's match");
      setState({
        ...state,
        passwordMatch: false,
      });
      console.log({ passwordMatch });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await user.updateProfile({
        displayName: state.displayName,
      });
      await createUserProfileDocument(user, { displayName });
      dispatch(LogInUser([state.displayName, ""]));
    } catch (error) {
      console.log(error.message);
    }

    setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      passwordMatch: true,
    });
  };

  return (
    <div className="md:p-4  flex flex-row flex-wrap">
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2-screen m-0 p-5 bg-white w-full tw-h-full shadow md:rounded-lg"
      >
        <div className="text-2xl text-indigo-900">Sign In </div>
        <button
          onClick={() => dispatch(openSlidingComponent("Log in"))}
          className="text-gray-500"
        >
          or login to your account
        </button>

        <div className="flex-col flex py-3">
          <label className="pb-2 text-gray-700 font-semibold">Your Name</label>
          <input
            onChange={handleChange}
            value={state.displayName}
            type="text"
            name="displayName"
            required
            className="p-2 shadow rounded-lg bg-gray-100 outline-none focus:bg-gray-200"
          />
        </div>

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

        <div className="flex-col flex py-3">
          <label htmlFor="pass" className="pb-2 text-gray-700 font-semibold">
            Confirm Password
          </label>
          <input
            value={state.confirmPassword}
            onChange={handleChange}
            type="password"
            name="confirmPassword"
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
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
