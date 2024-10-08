import { React, useState } from "react";
import {

  IoIosCart,
} from "react-icons/io";
// import { Image } from "@chakra-ui/react";

import Rating from "./Rating";
import Link from "next/link";
import Image from "next/image";
// import { addToCart } from "../actions/cartActions";
// import { useDispatch, useSelector } from "react-redux";
const CardProduct = ({ product }) => {
  const [showbtn, setShowbtn] = useState(false);
  const [Incart, setIncart] = useState(false);
  // const dispatch = useDispatch();
  // const Cart = useSelector((state) => state.cart);
  // const { cartItems } = Cart;
  
  // useEffect(() => {
  //   const isincart = cartItems.find((x) => x.product === product._id);
  //   if (isincart) {
  //     setIncart(true);
  //   }
  //   return () => {};
  // });
  const addcart = () => {
    setIncart(true);
    // dispatch(addToCart(product._id, 1));
  };

  return (
    <>
      <div
        className="cardProduct"
        onMouseOver={() => {
          setShowbtn(true);
        }}
        onMouseLeave={() => {
          setShowbtn(false);
        }}
      >
        <div className="imgDiv">
          <Image
            className="imgProduct"
            boxSize="350px"
            objectFit="cover"
            alt="image"
            src={product.images}
          />
        </div>
        <div className="bottomcard">
          <Link href={`/shop/${product._id}`} exact>
            <span>{product.name}</span>
          </Link>
          {Incart ? (
            <IoIosCart className="iconFav" size="26" />
          ) : (
            <IoIosCart
              className="iconFav"
              color="#999"
              size="26"
              onClick={addcart}
            />
          )}

          <div className="productpricecard"> {`${product.price} $`}</div>
          <div className="Rating">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </div>
          
        <Link href={`/shop/${product._id}`} exact>
          <button
            // onClick={() => router.push(`/product/${product._id}`)}
            className={showbtn ? "QuickView QuickViewActive" : "QuickView"}
          >
            {" "}
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default CardProduct;
