import React from "react";
import { Announcement } from "../components/Announcement";
import { Category } from "../components/Category";
import Navbar from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { ProductList } from "../components/ProductList";
import { Slider } from "../components/Slider";

const Homepage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <ProductList />
      <Newsletter />
    </div>
  );
};

export default Homepage;
