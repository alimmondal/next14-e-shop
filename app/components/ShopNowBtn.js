import React from "react";
import { Link } from "react-router-dom";

const ShopNowBtn = () => {
  return (
    <Link to="/Shop">
      <button className="ShopNow">SHOP NOW</button>
    </Link>
  );
};

export default ShopNowBtn;
