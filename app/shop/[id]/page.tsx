import Image from "next/image";
import data from "../../../data.json";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import { Rating } from "@mui/material";

const SingleProduct = async ({ params }: { params: any }) => {
  const { id } = params;
  const itemId = Number(id);
  const { Products } = data;

  const item = Products.find((item) => item._id === itemId);
  // console.log("items:", item )

  if (!item) {
    return <div>Items not found</div>;
  }

  const productRating =
    item?.reviews.reduce((acc: number, item: any) => acc + item.rating, 0) /
    item?.reviews.length;

  const Horizontal = () => {
    return <hr className="w-[30% my-2]" />;
  };

  return (
    <Container>
      <p className="text-rose-700 text-center mt-10">
        This page is incomplete!!! I&apos;m working on this page.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:mt-28">
        <div
          className="
        aspect-square
        relative
        w-full
        "
        >
          <Image
            src={item.images}
            alt=""
            width={100}
            height={100}
            className="w-full 
        h-full
        object-contain
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
        "
          />
        </div>
        <div className="flex flex-col gap-1 text-slate-700 text-sm">
          <h2 className="md:text-3xl font-bold">{item?.name}</h2>
          <div className="flex gap-2">
            <Rating value={productRating} readOnly />
            <div className="">{item?.name}</div>
          </div>
          {/* <Horizontal /> */}
          <div className="text-justify">{item?.description}</div>
          <div>
            <span className="font-semibold">Category: </span>
            {item?.category}
          </div>
          <div className="">
            <span className="font-semibold">Brand: </span>
            {item?.brand}
          </div>
          <div className={item?.inStock ? "text-teal-400" : "text-rose-400"}>
            {item?.inStock ? "In stock" : "Out of stock"}
          </div>
          {/* {isProductInCart ? (
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
        ) : ( */}
          {/* <>
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
            /> */}
          <div className="max-w-[300px]">
            <Button
              label="Add to cart"
              // onClick={() => handleAddProductToCart(cartProduct)}
            />
          </div>
          {/* </>
        )} */}
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
