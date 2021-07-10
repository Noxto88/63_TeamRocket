import React from "react";
import ProductCard from "../common/ProductsCard";
import { addItem } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Cart from "../common/Cart";

function CustomerProducts({ products }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(products));
    console.log("called");
  };

  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">Products</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => {
          console.log(product._id);
          return (
          <div key={products._id}>
            <ProductCard {...product}>
              <button
                onClick={addToCart}
                className="bg-primary text-white px-4 py-2"
              >
                Add Item
              </button>
            </ProductCard>
          </div>
          ) 
        })}
      </div>
      <Cart />
    </div>
  );
}

export default CustomerProducts;
