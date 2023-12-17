"use client";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import SetQuantity from "../components/products/SetQuantity";
import { CartProductType } from "../product/[productId]/ProductDetails";
interface ItemContentProps {
  item: CartProductType;
}
const ItemContent = ({ item }: ItemContentProps) => {
  return (
    <div
      className="
    grid
    grid-cols-5
    text-xs
    md:text-sm
    gap-4
    border-t-[1.5px]
    border-slate-200
    items-center
    py-4
  "
    >
      <div
        className="
      col-span-2
      justify-self-start
      flex
      gap-2
      md:gap-4
      "
      >
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              src={item.selectedImg.image}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
          <div className="">{item.selectedImg.color}</div>
          <div className="w-[70px]">
            <button onClick={() => {}} className="text-slate-500 underline">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center">{formatPrice(item.price)}</div>
      <div className="justify-self-center">
        <SetQuantity
          cartCounter={true}
          cartProduct={item}
          handleQtyDecrease={() => {}}
          handleQtyIncrease={() => {}}
        />
      </div>
      <div className="justify-self-end font-semibold"></div>
    </div>
  );
};

export default ItemContent;
