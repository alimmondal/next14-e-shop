import Container from "@/app/components/Container";
// import { product } from "@/utils/product";
import { getCurrentUser } from "@/actions/getCurrentUser";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/components/NullData";
import AddRating from "./AddRating";
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

interface IParams {
  productId: any;
}

const Product = async ({ params }: { params: IParams }) => {
  //   console.log(params);

  // const product = products.find((item) => item.id === params.productId);

  const product = await getProductById(params);
  const user = await getCurrentUser();
  if (!product)
    return <NullData title="Oops! Product does not exist with the given id" />;

  return (
    <div className="pt-6">
      <Container>
        <ProductDetails product={product}></ProductDetails>
        <div className="flex flex-col mt-20 gap-4">Add Rating</div>
        <div className="">
          <AddRating product={product} user={user} />
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
