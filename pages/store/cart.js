import React from "react";
import Navbar from "../../components/customer/Navbar";
import Cart from "../../components/common/Cart";
import Supplier from "../../components/customer/Supplier";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <div>
      <Supplier />
      </div>
    </div>
  );
};

export default CartPage;
