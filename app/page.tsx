export const revalidate = 0;

import getProducts, { IProductParams } from "@/actions/getProducts";
import Container from "./components/Container";
// import HomeBanner from "./components/HomeBanner";
import NullData from "./components/NullData";
import ProductCard from "./components/products/ProductCard";
import Cardscg from "./components/Cardscg";
import Slider from "../app/components/Slider";
import Categories from "./components/nav/Categories";
import ProductsC from "../app/components/ProductsC";
import HomeBanner from "./components/HomeBanner";
import Category from "./components/nav/Category";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  // if (products?.length === 0) {
  //   return (

  //   );
  // }

  function shuffleArray(array: any) {
    for (let i = array?.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArray = shuffleArray(products);

  return (
    <div className="">
      <div className="pb-10">
        <Categories />
        <hr />
      </div>
      <Container>
        <HomeBanner />

        {products?.length === 0 ? (
          <NullData title="Oops! No product found. Click 'all' to clear filters" />
        ) : (
          <div
            className="
        grid
        grid-cols-2 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8 
        "
          >
            {shuffledArray?.map((product: any) => {
              return <ProductCard key={product.id} data={product} />;
            })}
          </div>
        )}
      </Container>
    </div>
  );
}
