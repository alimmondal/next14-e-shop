import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import bag from "../images/bag.jpg";
import jacket from "../images/jacket.jpg";
import lipstick from "../images/lipstick.png";
import lotion from "../images/lotion.jpg";
import nail from "../images/nail.webp";
import perfume from "../images/perfume.jpg";
import sanitizer from "../images/sanitizer.jpg";
import shoe from "../images/shoe.jpg";
import short from "../images/short.jpg";
import CardProduct from "./CardProduct";
// import {
//   listProducts,
//   ListproductbyCg,
//   Listproductbyfiter,
//   Listproductbyprice,
// } from "../actions/productActions";
// import { BsFilter, AiOutlineSearch, IoMdClose } from "react-icons/io";
import {
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stack,
} from "@chakra-ui/react";
import Search from "./Search";
// import HashLoader from "react-spinners/HashLoader";
import { Link, Route } from "react-router-dom";
const ProductsC = ({ match, history }) => {
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

  let Cg = window.location.search ? window.location.search.split("=")[1] : null;
  const keyword = window.location.pathname.split("/")[2];

  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const productbycg = useSelector((state) => {
  //   return state.ListproductbyCg;
  // });
  // const productbyfilter = useSelector((state) => {
  //   return state.Listproductbyfilter;
  // });
  // const productbyprice = useSelector((state) => {
  //   return state.Listproductbyprice;
  // });

  // const { loading, error, products } = productbycg
  //   ? productbycg
  //   : productList
  //   ? productList
  //   : productbyprice;

  useEffect(() => {
    if (Cg) {
      console.log(window.location.search.split("=")[0]);
      if (window.location.search.split("=")[0] === "?cg") {
        // dispatch(ListproductbyCg(Cg));
        // console.log(products);
      } else {
        // dispatch(Listproductbyfiter(Cg));
      }
    } else {
      // dispatch(listProducts(keyword));
    }
  }, [Cg, keyword]);
  // }, [ dispatch, Cg, keyword]);

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
    // dispatch(Listproductbyprice(From, To));
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
            {" "}
            {showfilter ? (
              <i class="far fa-times-circle" size="20"></i>
            ) : (
              <i class="fas fa-sort-amount-down" size="20"></i>
            )}
            Filter
          </button>

          <button
            className={`searchbtn ${showsearch ? "activebtn" : ""}`}
            onClick={searchfunc}
          >
            {showsearch ? (
              <i class="far fa-times-circle" size="20"></i>
            ) : (
              <i class="fas fa-search" size="20"></i>
            )}
            Search
          </button>
        </div>

        <div className="filters">
          <ul>
            <Link className="lined" to="?cg">
              All
            </Link>
            <Link className="lined" to="?cg=Men">
              Men
            </Link>
            <Link className="lined" to="?cg=Women">
              Women
            </Link>
            <Link className="lined" to="?cg=Watches">
              Watches
            </Link>
            <Link className="lined" to="?cg=Shoes">
              Shoes
            </Link>
            <Link to="?cg=Bag" className="lined">
              Bag
            </Link>
          </ul>
        </div>
      </div>
      {showsearch && (
        <Route render={({ history }) => <Search history={history} />} />
      )}
      <div className={`filterarea ${showfilter ? "filter" : "filteroff"}`}>
        <div className="sortbydiv">
          <h1> Sort By</h1>
          <ul>
            <Link
              onClick={() => setshowfilter(false)}
              className="lined"
              to="?filter"
            >
              Default
            </Link>
            <Link
              onClick={() => setshowfilter(false)}
              className="lined"
              to="?filter=Rating"
            >
              Rating
            </Link>
            <Link
              onClick={() => setshowfilter(false)}
              className="lined"
              to="?filter=date"
            >
              Date
            </Link>
            <Link
              onClick={() => setshowfilter(false)}
              className="lined"
              to="?filter=highprice"
            >
              Low to high price
            </Link>
            <Link
              onClick={() => setshowfilter(false)}
              className="lined"
              to="?filter=lowprice"
            >
              high to low price
            </Link>
          </ul>
        </div>
        <div className="pricediv">
          <h1> Price</h1>
          <FormControl id="email">
            <Stack spacing={2}>
              <FormLabel>From :</FormLabel>
              <NumberInput
                value={From}
                bg="white"
                onChange={(e) => setFrom(e)}
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
                onChange={(e) => setTo(e)}
                borderRadius="md"
                borderTopRadius="md"
                borderTopLeftRadius="md"
              >
                <NumberInputField />
              </NumberInput>
              <Button onClick={pricehandler} type="submit" colorScheme="teal">
                Filter
              </Button>
            </Stack>
          </FormControl>
        </div>
      </div>
      {/* {loading ? (
        <div className="loading">
          <HashLoader color={"#fff"} loading={loading} size={40} />
        </div>
      ) : error ? (
        <h2>{error} </h2>
      ) : products.length === 0 ? (
        <h1 className="nothingfound">Nothing Found !!!</h1>
      ) : ( */}
      <div className="cardsProduct">
        {Products.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </div>
      {/* )} */}
    </>
  );
};

export default ProductsC;
