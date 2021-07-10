import Link from "next/link";
import React from "react";
import { auth } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { setInitiial } from "../../redux/cartSlice";
const Navbar = ({ LogOut }) => {
  const dispatch = useDispatch();
  const logOut = () => {
    auth.signOut();
    dispatch(setInitiial());
  };
  return (
    <nav className="p-4">
      <ul className="flex">
        <Link href="/market">
          <a className="underline px-4">Discover products</a>
        </Link>
        <Link href="/market/manage-products">
          <a className="underline px-4">Manage my products</a>
        </Link>

        <Link href="/market/order">
          <a className="underline px-4">Order history</a>
        </Link>

        <button className="underline px-4" onClick={() => logOut()}>
          Log out
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
