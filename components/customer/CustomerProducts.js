import React from "react";
import ProductCard from "../common/ProductsCard";
function CustomerProducts({ products }) {
  console.log({ products });
  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">Products</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => (
          <div key={products._id}>
            <ProductCard {...product}>
              <button className="bg-primary text-white px-4 py-2">
                Add Item
              </button>
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerProducts;
