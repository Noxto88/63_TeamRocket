/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { selectStoreItem,selectStoreUser } from '../../redux/storeSlice'
import { useSelector } from 'react-redux'

const Supplier = () => {
const item = useSelector(selectStoreItem)
const user = useSelector(selectStoreUser)
    return (
        <div>
            <img
              className="flex items-end justify-end h-56 w-full bg-cover"
              src={urlFor(item.mainImage)
                .auto("format")
                .width(750)
                .fit("crop")
                .quality(80)}
              alt={item.mainImage?.alt || `Photo of ${item.title}`}
            />
            {user}
        </div>
    )
}

export default Supplier
