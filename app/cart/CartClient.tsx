"use client";
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/products/Button";
import Heading from "../components/products/Heading";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div className="">
          <Link href={"/"} className="text-slate-500 flex items-center">
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Shopping Cart" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div className="">
        {cartProducts &&
          cartProducts.map((item) => {
            return (
              <div className="" key={item.id}>
                {item.name}
              </div>
            );
          })}
      </div>
      <div className="">
        <div className="w-[90px]">
          <Button label="Clear Cart" onClick={() => {}} small outline />
        </div>
      </div>
    </div>
  );
};

export default CartClient;
