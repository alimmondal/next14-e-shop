"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const productRating =
    data.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    data.reviews.length;

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="
        col-span-1
        cursor-pointer
        border-[1.2px]
        border-slate-200
        bg-slate-50
        transition
        hover:scale-105
        text-center
        text-sm 
    "
    >
      <div
        className="
      flex 
      flex-col 
      items-center 
      w-full 
      gap-1"
      >
        <div
          className="
        aspect-square
        relative
        w-full
        "
        >
          <Image
            src={data.images[0].image}
            fill
            alt="banner"
            className="w-full h-full relative object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div className="">
          <Rating value={productRating} />
        </div>
        <div className="">{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
