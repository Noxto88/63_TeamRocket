/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { selectStoreItem,selectStoreUser,selectStorePrice } from '../../redux/storeSlice'
import { useSelector } from 'react-redux'
import { urlFor } from '../../firebase/config'
 
const Supplier = () => {
const items = useSelector(selectStoreItem)
const user = useSelector(selectStoreUser)
const price = useSelector(selectStorePrice)
    return (
        <div>
      {items.map((item, index) => {
        console.log(item.mainImage);
        return (
          <div
            key={item.title}
          >
         
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">{item.title}</h3>
              {user}
            {price}
            </div>
          </div>
        );
      })}
         
        </div>
    )
}

export default Supplier
