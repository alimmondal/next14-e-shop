"use client";
import React, { useEffect, useState } from "react";
import bag from "../../public/images/bag.jpg";
import jacket from "../../public/images/jacket.jpg";
import lipstick from "../../public/images/lipstick.png";
import lotion from "../../public/images/lotion.jpg";
import nail from "../../public/images/nail.webp";
import perfume from "../../public/images/perfume.jpg";
import sanitizer from "../../public/images/sanitizer.jpg";
import shoe from "../../public/images/shoe.jpg";
import short from "../../public/images/short.jpg";
import CardProduct from "./CardProduct";
import {
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stack,
} from "@chakra-ui/react";
import Search from "./Search";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ProductsC = () => {
  
const Products = [
    {
      _id: 1,
      name: "Man's Jackets",
      price: "100",
      images: jacket,
    },
    {
      _id: 2,
      name: "Body lotion",
      price: "100",
      images: lotion,
    },
    {
      _id: 3,
      name: "bag",
      price: "100",
      images: bag,
    },
    {
      _id: 4,
      name: "lipstick",
      price: "100",
      images: lipstick,
    },
    {
      _id: 5,
      name: "Man's short",
      price: "100",
      images: short,
    },
    {
      _id: 6,
      name: "perfume",
      price: "100",
      images: perfume,
    },
    {
      _id: 7,
      name: "Women's shoe",
      price: "100",
      images: shoe,
    },
    {
      _id: 8,
      name: "sanitizer",
      price: "100",
      images: sanitizer,
    },
    {
      _id: 9,
      name: "Nail polish",
      price: "100",
      images: nail,
    },
  ];
  const [From, setFrom] = useState(0);
  const [To, setTo] = useState(0);

  const searchParams = useSearchParams();
  const Cg = searchParams.get("cg") || null;
  const keyword = typeof window !== 'undefined' ? window.location.pathname.split("/")[2] : "";

  useEffect(() => {
    if (Cg) {
      console.log(Cg);
    } else {
      console.log(keyword);
    }
  }, [Cg, keyword]);

  const [showfilter, setshowfilter] = useState(false);
  const [showsearch, setshowsearch] = useState(false);

  const filterfunc = () => {
    setshowfilter(!showfilter);
    if (showsearch) {
      setshowsearch(false);
    }
  };

  const searchfunc = () => {
    setshowsearch(!showsearch);
    if (showfilter) {
      setshowfilter(false);
    }
  };

  const pricehandler = () => {
    console.log(`Filtering from ${From} to ${To}`);
  };

  return (
    <>
      <div className="Cgfilter">
        <h1>
          {Cg ? Cg : keyword ? "*" + keyword + "* Search" : "All"} Products
        </h1>
        <div className="filtersbtn ">
          <button
            className={`filterbtn ${showfilter ? "activebtn" : ""}`}
            onClick={filterfunc}
          >
            {showfilter ? (
              <i className="far fa-times-circle" size="20"></i>
            ) : (
              <i className="fas fa-sort-amount-down" size="20"></i>
            )}
            Filter
          </button>

          <button
            className={`searchbtn ${showsearch ? "activebtn" : ""}`}
            onClick={searchfunc}
          >
            {showsearch ? (
              <i className="far fa-times-circle" size="20"></i>
            ) : (
              <i className="fas fa-search" size="20"></i>
            )}
            Search
          </button>
        </div>

        <div className="filters">
          <ul>
            <Link className="lined" href="?cg">
              All
            </Link>
            <Link className="lined" href="?cg=Men">
              Men
            </Link>
            <Link className="lined" href="?cg=Women">
              Women
            </Link>
            <Link className="lined" href="?cg=Watches">
              Watches
            </Link>
            <Link className="lined" href="?cg=Shoes">
              Shoes
            </Link>
            <Link className="lined" href="?cg=Bag">
              Bag
            </Link>
          </ul>
        </div>
      </div>
      {showsearch && <Search />}

      <div className={`filterarea ${showfilter ? "filter" : "filteroff"}`}>
        <div className="sortbydiv">
          <h1> Sort By</h1>
          <ul>
            <Link onClick={() => setshowfilter(false)} className="lined" href="?filter">
              Default
            </Link>
            <Link onClick={() => setshowfilter(false)} className="lined" href="?filter=Rating">
              Rating
            </Link>
            <Link onClick={() => setshowfilter(false)} className="lined" href="?filter=date">
              Date
            </Link>
            <Link onClick={() => setshowfilter(false)} className="lined" href="?filter=highprice">
              Low to high price
            </Link>
            <Link onClick={() => setshowfilter(false)} className="lined" href="?filter=lowprice">
              High to low price
            </Link>
          </ul>
        </div>
        <div className="pricediv">
          <h1> Price</h1>
          <FormControl id="price-range">
            <Stack spacing={2}>
              <FormLabel>From :</FormLabel>
              <NumberInput
                value={From}
                bg="white"
                onChange={(valueString) => setFrom(parseInt(valueString))}
                borderRadius="md"
                borderTopRadius="md"
                borderTopLeftRadius="md"
              >
                <NumberInputField />
              </NumberInput>
              <FormLabel>To :</FormLabel>
              <NumberInput
                value={To}
                bg="white"
                onChange={(valueString) => setTo(parseInt(valueString))}
                borderRadius="md"
                borderTopRadius="md"
                borderTopLeftRadius="md"
              >
                <NumberInputField />
              </NumberInput>
              <Button onClick={pricehandler} type="button" colorScheme="teal">
                Filter
              </Button>
            </Stack>
          </FormControl>
        </div>
      </div>

      <div className="cardsProduct">
        {Products.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsC;
