/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItem, removeItem } from "../../redux/cartSlice";
import { urlFor } from "../../utils/sanity";
import EmptyCart from "./EmptyCart";

const CartItems = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  if (!item.length) {
    return <EmptyCart />;
  }

  const removeProductFromCart = (index) => {
    dispatch(removeItem(index));
    console.log("deletion product from cart called");
  };

  return (
    <>
      {item.map((item, index) => {
        return (
          <div key={item.title} className="flex justify-between mt-6">
            <div className="flex">
              <img
                className="h-20 w-20 object-cover rounded"
                src={urlFor(item.mainImage)
                  .auto("format")
                  .width(200)
                  .fit("crop")
                  .quality(80)}
                alt={item.mainImage?.alt || `Photo of ${item.title}`}
              />
              <div className="mx-3">
                <h3 className="text-sm text-gray-600">{item.title}</h3>
                <div className="flex items-center mt-2"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => removeProductFromCart(index)} className="">
                trash
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartItems;
