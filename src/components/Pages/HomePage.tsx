import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllProduct } from "../../api/product";
import { Link } from "react-router-dom";

const HomePage = () => {
  const disaptch = useDispatch();

  const products = useSelector((state: any) => state.product);

  useEffect(() => {
    const getProducts = async () => {
      const data = await getAllProduct();
      disaptch({ type: "product-get-list", payload: { products: data.data } });
    };
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="grid grid-cols-3 gap-5">
      {products?.products.map((product: any) => (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="">
              <div className="group relative">
                <div className="">
                  <img
                    src={product.images}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full  lg:h-full lg:w-full"
                  />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  {product.name}
                </h2>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/products/${product.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.price}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.evaluate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
