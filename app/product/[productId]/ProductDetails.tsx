"use client";
import Button from "@/app/components/Button";
import ProductImgView from "@/app/components/products/ProductImgView";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

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
  const router = useRouter();
  const { handleAddProductToCart, cartProducts } = useCart();
  // const { cartTotalQty } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product?.id,
    name: product?.name,
    description: product?.description,
    category: product?.category,
    brand: product?.brand,
    selectedImg: { ...product?.images[0] },
    quantity: 1,
    price: product?.price,
  });

  // console.log(cartProducts);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, product?.id]);

  const productRating =
    product?.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews.length;

  const Horizontal = () => {
    return <hr className="w-[30% my-2]" />;
  };

  const handleColorSelect = useCallback((value: selectedImgType) => {
    setCartProduct((prev) => {
      return { ...prev, selectedImg: value };
    });
  }, []);

  const handleQtyIncrease = useCallback(() => {
    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, []);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct.quantity]);

  // console.log(cartTotalQty);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        className="
        aspect-square
        relative
        w-full
        "
      >
        <ProductImgView
          cartProduct={cartProduct}
          product={product}
          handleColorSelect={handleColorSelect}
        />
      </div>
      <div className="flex flex-col gap-1 text-slate-700 text-sm">
        <h2 className="text-3xl font-bold">{product?.name}</h2>
        <div className="flex gap-2">
          <Rating value={productRating} readOnly />
          <div className="">{product?.name}</div>
        </div>
        <Horizontal />
        <div className="text-justify">{product?.description}</div>
        <div>
          <span className="font-semibold">Category: </span>
          {product?.category}
        </div>
        <div className="">
          <span className="font-semibold">Brand: </span>
          {product?.brand}
        </div>
        <div className={product?.inStock ? "text-teal-400" : "text-rose-400"}>
          {product?.inStock ? "In stock" : "Out of stock"}
        </div>
        {isProductInCart ? (
          <>
            <p className="mb-2 text-slate-500 flex items-center gap-1">
              <MdCheckCircle className="text-teal-400" size={24} />
              <span>Product added</span>
            </p>
            <div className="max-w-[300px]">
              <Button
                label="View cart"
                outline
                onClick={() => {
                  router.push("/cart");
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div className="">
              <SetColor
                images={product?.images}
                cartProduct={cartProduct}
                handleColorSelect={handleColorSelect}
              />
            </div>
            <SetQuantity
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
              // cartCounter={cartCounter}
            />
            <div className="max-w-[300px]">
              <Button
                label="Add to cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
