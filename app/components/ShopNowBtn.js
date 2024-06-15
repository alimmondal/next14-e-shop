import Link from "next/link";
import React from "react";

const ShopNowBtn = () => {
  return (
    <Link href="/shop">
      <button className="ShopNow">SHOP NOW</button>
    </Link>
  );
};

export default ShopNowBtn;
