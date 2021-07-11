/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItem, removeItem } from "../../redux/cartSlice";
import { urlFor } from "../../utils/sanity";
import EmptyCart from "../common/EmptyCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToStore } from "../../redux/storeSlice";
import { userLoggedState } from "../../redux/userSlice";

const ManageItems = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  const user = useSelector(userLoggedState)
  if (!item.length) {
    return <EmptyCart />;
  }
  const removeProductFromCart = (index) => {
    dispatch(removeItem(index));
    console.log("deletion product from cart called");
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [price, setPrice] = useState(0);
  

  function handleChange(e) {
    setPrice(e.target.value);
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
      {item.map((item, index) => {
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
              <div className='flex'>
                <input
                  className='border-solid border-2 border-black'
                  value={price}
                  onChange={handleChange}
                  type="number"
                  required
                  min="1" 
                />
                <button className='px-2 bg-primary text-white' onClick={()=> dispatch(addToStore([item,user.name,price]))}>Publish</button>
              </div>
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

export default ManageItems;
