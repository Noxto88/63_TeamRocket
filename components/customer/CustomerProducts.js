import React from "react";
import ProductCard from "../common/ProductsCard";
import { addItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Navbar from "../customer/Navbar";
import { closeSlidingComponent } from "../../redux/sliderSlice";
import { setInitiial } from "../../redux/cartSlice";

function CustomerProducts({ products }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(products));
    console.log("called");
  };

  const logOut = () => {
    dispatch(closeSlidingComponent());
    auth.signOut();
    dispatch(setInitiial());
  };
  return (
    <div className="container mx-auto px-6">
      <Navbar LogOut={logOut} />
      <h3 className="text-gray-700 text-2xl font-medium">Products</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => {
          return (
            <div key={product._id}>
              <ProductCard {...product}>
                <button
                  onClick={addToCart}
                  className="bg-primary text-white px-4 py-2"
                >
                  Add Item
                </button>
              </ProductCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomerProducts;
