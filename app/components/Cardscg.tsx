import Link from "next/link";
import React from "react";
// import { Link } from "react-router-dom";

interface CardScgProps {
  title: string;
}

const Cardscg = ({ title }: CardScgProps) => {
  return (
    <div className="cardscg">
      <h1>{title}</h1>
      <Link href={"/shop"} className="ShopNowcg">
        Shop Now
      </Link>
    </div>
  );
};

export default Cardscg;
