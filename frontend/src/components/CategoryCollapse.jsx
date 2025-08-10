import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CategoryCollapse = () => {
  const [pointer, setpointer] = useState(false);
  const [pointer1, setpointer1] = useState(false);
  return (
    <>
      <div>
        <ul
          onClick={() => setpointer(!pointer)}
          className="transition-all  w-full"
        >
          <li className="flex items-center justify-between relative">
            <Button className="w-full !capitalize !justify-start !px-3 !text-gray-700">
              Fashion
            </Button>
            {pointer ? (
              <FaRegSquareMinus className="absolute right-4 cursor-pointer" />
            ) : (
              <FaRegPlusSquare className="absolute right-4 cursor-pointer" />
            )}
          </li>
        </ul>

        {pointer && (
          <ul
            onClick={() => setpointer1(!pointer1)}
            className="pl-3 w-full relative duration-200"
          >
            <li>
              <Link to="" className="w-full">
                <Button className="w-full !capitalize !justify-start !px-3 !text-gray-700">
                  Apparel
                </Button>
                {pointer1 ? (
                  <FaRegSquareMinus className="absolute right-4 top-3 cursor-pointer" />
                ) : (
                  <FaRegPlusSquare className="absolute right-4 top-3 cursor-pointer" />
                )}
              </Link>
            </li>
          </ul>
        )}

        {pointer1 && (
          <ul className="w-full pl-3 space-y-1">
            <li>
              <Link
                to=""
                className="link w-full !justify-start !px-3 transition text-xs"
              >
                Smart Tablet
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="link w-full !justify-start !px-3 transition text-xs"
              >
                Crepe T-shirt
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="link w-full !justify-start !px-3 transition text-xs"
              >
                Lether watch
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="link w-full !justify-start !px-3 transition text-xs"
              >
                Rolling Diamond
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};
