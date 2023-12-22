"use client";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/cart")}
      className="relative cursor-pointer"
    >
      <div className="text-3xl">
        <CiShoppingCart />
      </div>
      <div
        className="
      absolute
      top-[-10px]
      right-[-10px]
      bg-slate-700
      text-white
      h-6
      w-6
      rounded-full
      flex
      items-center
      justify-center
      text-small
      "
      >
        {cartTotalQty}
      </div>
    </div>
  );
};

export default CartCount;
