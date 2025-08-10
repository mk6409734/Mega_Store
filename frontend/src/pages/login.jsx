import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  // const [hidePassword, sethidePassword] = useState(false);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="card shadow-md w-md m-auto rounded-md bg-white p-5 px-10">
          <h1 className="text-xl text-center text-black font-semibold">
            Login to your account
          </h1>

          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="outlined-basic"
                label="Email Id *"
                variant="outlined"
                className="w-full"
              />
            </div>
            <div className="form-group w-full mb-5">
              <TextField
                type="password"
                id="outlined-basic"
                label="Password *"
                variant="outlined"
                className="w-full"
              />
            </div>

            <a href="#" className="link cursor-pointer text-sm font-semibold">
              Forgort Password?
            </a>
            <div className="flex items-center w-full mt-3 mb-3">
              <Button className="!bg-primary !px-3 !p-3 !rounded-md !text-white w-full">Login</Button>
            </div>

            <p className="font-medium text-center mb-4 text-sm ">Not Registered? <Link to="/register" className="link text-primary text-sm font-semibold">Register</Link></p>
            <p className="font-medium text-center mb-3 text-sm">Or continue with social account</p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] !text-black !p-3 !px-3 !rounded-md"><FcGoogle className="text-xl" />Login With Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};


