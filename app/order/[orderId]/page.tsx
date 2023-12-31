import Container from "@/app/components/Container";

import getOrderById from "@/actions/getOrderById";
import NullData from "@/app/components/NullData";
import OrderDetails from "./OrderDetails";

interface IParams {
  orderId: any;
}

const SingleOrder = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params);

  if (!order) {
    return <NullData title="No order" />;
  }

  return (
    <div className="pt-6">
      <Container>
        <OrderDetails order={order}></OrderDetails>
      </Container>
    </div>
  );
};

export default SingleOrder;
