"use client";
import SetColor from "@/app/components/products/SetColor";
import { Rating } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number;
};

export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product.reviews.length;

  const Horizontal = () => {
    return <hr className="w-[30% my-2]" />;
  };

  const handleColorSelect = useCallback(
    (value: selectedImgType) => {},
    [cartProduct.selectedImg]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        className="
        aspect-square
        relative
        w-full
        "
      >
        <Image
          src={product.images[0].image}
          fill
          alt="banner"
          className="w-full h-full relative object-contain"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <div className="flex gap-2">
          <Rating value={productRating} readOnly />
          <div className="">{product.name}</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product.description}</div>
        <div>
          <span className="font-semibold">Category: </span>
          {product.category}
        </div>
        <div className="">
          <span className="font-semibold">Brand: </span>
          {product.brand}
        </div>
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <div className="">
          <SetColor
            images={product.images}
            cartProduct={cartProduct}
            handleColorSelect={handleColorSelect}
          />
        </div>
        <div className="">Quantity</div>
        <div className="">add to cart</div>
      </div>
    </div>
  );
};

export default ProductDetails;
