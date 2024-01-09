import getOrders from "@/actions/getOrders";
import getProducts from "@/actions/getProducts";
import getUsers from "@/actions/getUsers";
import Container from "../components/Container";
import Summary from "./Summary";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();

  return (
    <div className="pt-8">
      <Container>
        <Summary products={products} orders={orders} users={users} />
      </Container>
    </div>
  );
};

export default Admin;
