import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/home";
import { Order_tracking } from "./components/order-tracking";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ProductListing } from "./pages/ProductListing";
import { Footer } from "./components/Footer";
import { ProductDetails } from "./pages/ProductDetails";
import {createContext} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ProductZoom } from "./components/ProductZoom";
import { ProductDetailComponent } from "./components/ProductDetailComponent";
import { IoMdClose } from "react-icons/io";
import { CartPage } from "./pages/CartPage";



export const MyContext = createContext();

function App() {
  const [openProductDialog, setOpenProductDialog] = useState(false);
   const [fullWidth, setFullWidth] = useState(true);
   const [maxWidth, setMaxWidth] = useState("lg");
   const [opencart, setOpenCart] = useState(false);

   const toggleCartPanel = (newOpen) => () => {
     setOpenCart(newOpen);
   };


  const handleCloseProductDialog = () => {
    setOpenProductDialog(false);
  };

  const values = {
    setOpenProductDialog,
    setOpenCart,
    toggleCartPanel,
    opencart,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productlisting"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/order_tracking"}
              exact={true}
              element={<Order_tracking />}
            />
            <Route
              path={"/productdetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      {/* <Button variant="outlined" onClick={handleClickOpenProductDialog}>
        Open alert dialog
      </Button> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDialog}
        onClose={handleCloseProductDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div className="flex items-center w-full relative">
            <Button
              onClick={handleCloseProductDialog}
              className="!absolute !right-0 !top-0 !text-black !rounded-full !bg-[#f1f1f1] !w-10 !min-w-10 !h-10"
            >
              <IoMdClose className="" />
            </Button>
            <div className="col1 w-[40%]">
              <ProductZoom />
            </div>
            <div className="col2 w-[60%] py-8 px-8 productContent">
              <ProductDetailComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      
    </>
  ); 
}

export default App;
