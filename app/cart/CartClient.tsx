"use client";
import { useCart } from "@/hooks/useCart";
import { SafeUser } from "@/type";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/products/Button";
import Heading from "../components/products/Heading";
import ItemContent from "./ItemContent";

interface CartClientProps {
  currentUser: SafeUser | null;
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();

  const router = useRouter();

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
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 mt-8 items-center">
        <div className="col-span-2 justify-self-start">Product</div>
        <div className="justify-self-center">Price</div>
        <div className="justify-self-center">Quantity</div>
        <div className="justify-self-end">Total</div>
      </div>
      <div className="">
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="flex justify-between gap-4 border-t-[1.5px] border-slate-200 py-4">
        <div className="w-[130px]">
          <Button
            label="Clear Cart"
            onClick={() => handleClearCart()}
            small
            outline
          />
        </div>
        <div className="flex flex-col gap-2 items-start text-sm">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p>Taxes and shipping calculate at checkout</p>

          <Button
            label={currentUser ? "Checkout" : "Login to checkout"}
            outline={currentUser ? false : true}
            onClick={() => {
              currentUser ? router.push("/checkout") : router.push("/login");
            }}
          />

          <Link href={"/"} className="text-slate-500 flex items-center">
            <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
        0
      </div>
    </div>
  );
};

export default CartClient;
