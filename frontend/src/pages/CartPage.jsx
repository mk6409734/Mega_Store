import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export const CartPage = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto w-[80%] max-w-[80%] flex">
        <div className="leftpart w-[75%]">
          <h1 className="font-semibold">Your Cart</h1>
          <p className="mt-0">
            There are <span className="font-bold text-primary">2</span> products
            in your cart
          </p>

          <div className="shadow-md rounded-md p-5 bg-white">
            <div className="cartItem w-full p-3 flex items-center gap-4">
              <div className="img w-[10%] rounded-md overflow-hidden">
                <Link to="/product/3532" className="group">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
                    alt="cartproduct"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[90%] relative">
                <IoMdClose className="cursur-pointer absolute top-0 right-1 text-xl link transition-all" />
                <h1 className="text-sm">Campus Sutra</h1>
                <Link>
                  <p className="link font-semibold">
                    Men Comfort Cuban Collar Solid Polycotton Casual Shirt
                  </p>
                </Link>
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="line-through text-gray-500 font-semibold">
                    $58.00
                  </span>
                  <span className="text-[#ff5252] font-semibold">$55.00</span>
                  <span className="text-[#ff5252] font-semibold">55% OFF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
