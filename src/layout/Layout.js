import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/Home";
import Product from "../pages/product/Product";

import Navbar from "../parts/navbar/Navbar";

export default function Layout(params) {
  return (
    <div className="layout">
      <Navbar />
      <div className=" main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
}
