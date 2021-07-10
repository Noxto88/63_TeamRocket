/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItem, removeItem } from "../../redux/cartSlice";
import { urlFor } from "../../utils/sanity";
import EmptyCart from "./EmptyCart";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItems = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  if (!item.length) {
    return <EmptyCart />;
  }
  console.log({ item });
  const removeProductFromCart = (index) => {
    dispatch(removeItem(index));
    console.log("deletion product from cart called");
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {item.map((item, index) => {
        console.log(item.mainImage, "1");
        return (
          <div
            key={item.title}
            className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
          >
            <img
              className="flex items-end justify-end h-56 w-full bg-cover"
              src={urlFor(item.mainImage)
                .auto("format")
                .width(750)
                .fit("crop")
                .quality(80)}
              alt={item.mainImage?.alt || `Photo of ${item.title}`}
            />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">{item.title}</h3>
              <div className="flex items-center mt-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <button onClick={() => removeProductFromCart(index)} className="">
                <RiDeleteBin6Line size={42} color="grey" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
