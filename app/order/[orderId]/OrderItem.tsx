import { CartProductType } from "@prisma/client";

interface OrderItemProps {
  item: CartProductType;
}

const OrderItem: React.FC<OrderItemProps> = ({ item }) => {
  return <div></div>;
};

export default OrderItem;
