import Container from "@/app/components/Container";
import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";

interface IParams {
  productId: any;
}

const Product = ({ params }: { params: IParams }) => {
  //   console.log(params);
  return (
    <div className="pt-6">
      <Container>
        <ProductDetails product={product}></ProductDetails>
        <div className="flex flex-col mt-20 gap-4">Add Rating</div>
        <div className="">List</div>
      </Container>
    </div>
  );
};

export default Product;
