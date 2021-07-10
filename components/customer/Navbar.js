import React from "react";

const Navbar = ({ LogOut }) => {
  return (
    <nav className='p-4'>
      <ul className="flex">
        <div className="underline px-4">Cart</div>
        <div className="underline px-4">Most Bought</div>
        <div className="underline px-4">Order History</div>
        <button className="underline px-4" onClick={() => LogOut()}>
          Log out
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
