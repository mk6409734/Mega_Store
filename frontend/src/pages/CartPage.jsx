import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

export const CartPage = () => {
  return (
    <section className="py-10 pb-10">
      <div className="container mx-auto w-[80%] max-w-[80%] flex gap-5">
        <div className="leftpart w-[70%]">
          <div className="shadow-md rounded-md p-2 bg-white">
            <div className="py-2 px-3 border-b border-gray-300">
              <h1 className="font-semibold">Your Cart</h1>
              <p className="mt-0 mb-5">
                There are <span className="font-bold text-primary">2</span>{" "}
                products in your cart
              </p>
            </div>
            <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-gray-300 ">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/3532" className="group">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
                    alt="cartproduct"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoMdClose className="cursur-pointer absolute top-0 right-1 text-xl link transition-all" />
                <h1 className="text-sm">Campus Sutra</h1>
                <Link>
                  <p className="link font-semibold">
                    Men Comfort Cuban Collar Solid Polycotton Casual Shirt
                  </p>
                </Link>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 my-1">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Size: S <GoTriangleDown />
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 <GoTriangleDown />
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="line-through text-gray-500 font-semibold">
                    $58.00
                  </span>
                  <span className="text-[#ff5252] font-semibold">$55.00</span>
                  <span className="text-[#ff5252] font-semibold">55% OFF</span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-gray-300 ">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/3532" className="group">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
                    alt="cartproduct"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoMdClose className="cursur-pointer absolute top-0 right-1 text-xl link transition-all" />
                <h1 className="text-sm">Campus Sutra</h1>
                <Link>
                  <p className="link font-semibold">
                    Men Comfort Cuban Collar Solid Polycotton Casual Shirt
                  </p>
                </Link>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 my-1">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Size: S <GoTriangleDown />
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 <GoTriangleDown />
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="line-through text-gray-500 font-semibold">
                    $58.00
                  </span>
                  <span className="text-[#ff5252] font-semibold">$55.00</span>
                  <span className="text-[#ff5252] font-semibold">55% OFF</span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-gray-300 ">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/3532" className="group">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
                    alt="cartproduct"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoMdClose className="cursur-pointer absolute top-0 right-1 text-xl link transition-all" />
                <h1 className="text-sm">Campus Sutra</h1>
                <Link>
                  <p className="link font-semibold">
                    Men Comfort Cuban Collar Solid Polycotton Casual Shirt
                  </p>
                </Link>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 my-1">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Size: S <GoTriangleDown />
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 <GoTriangleDown />
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-1 text-sm">
                  <span className="line-through text-gray-500 font-semibold">
                    $58.00
                  </span>
                  <span className="text-[#ff5252] font-semibold">$55.00</span>
                  <span className="text-[#ff5252] font-semibold">55% OFF</span>
                </div>
              </div>
            </div>
            <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-gray-300 ">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/3532" className="group">
                  <img
                    src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
                    alt="cartproduct"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoMdClose className="cursur-pointer absolute top-0 right-1 text-xl link transition-all" />
                <h1 className="text-sm">Campus Sutra</h1>
                <Link>
                  <p className="link font-semibold">
                    Men Comfort Cuban Collar Solid Polycotton Casual Shirt
                  </p>
                </Link>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />
                <div className="flex items-center gap-4 my-1">
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Size: S <GoTriangleDown />
                  </span>
                  <span className="flex items-center justify-center bg-[#f1f1f1] text-sm  py-1 px-2 rounded-md cursor-pointer">
                    Qty: 1 <GoTriangleDown />
                  </span>
                </div>
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

        <div className="rightpart w-[30%]">
          <div className="shadow-md rounded-md p-5 bg-white">
            <h1 className="pb-3 font-semibold">Cart Totals</h1>
            <hr className="pb-2"/>
            <p className="flex items-center justify-between space-y-2">
              <span className="text-md">Subtotal</span>
              <span className="text-primary font-bold">₹1,300.00</span>
            </p>
            <p className="flex items-center justify-between space-y-2">
              <span className="text-md">Shipping</span>
              <span className="text-primary font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between space-y-2">
              <span className="text-md">Subtotal</span>
              <span className="text-primary font-bold">1,300.00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
