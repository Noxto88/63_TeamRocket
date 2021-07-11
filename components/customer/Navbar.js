import Link from "next/link";
import React from "react";

const Navbar = ({ LogOut }) => {
  return (
    <nav className="p-4">
      <ul className="flex">
        <Link href="/store">
          <a className="underline px-4">All products</a>
        </Link>
        <Link href="/store/cart">
          <a className="underline px-4">Cart</a>
        </Link>

        <button className="underline px-4" onClick={() => LogOut()}>
          Log out
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
