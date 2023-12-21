import Container from "@/app/components/Container";
// import { product } from "@/utils/product";
import ListRating from "./ListRating";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";

interface IParams {
  productId: any;
}

const Product = ({ params }: { params: IParams }) => {
  //   console.log(params);

  const product = products.find((item) => item.id === params.productId);

  return (
    <div className="pt-6">
      <Container>
        <ProductDetails product={product}></ProductDetails>
        <div className="flex flex-col mt-20 gap-4">Add Rating</div>
        <div className="">
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
