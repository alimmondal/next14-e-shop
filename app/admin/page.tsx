import { getCurrentUser } from "@/actions/getCurrentUser";
import getGraphData from "@/actions/getGraphData";
import getOrders from "@/actions/getOrders";
import getProducts from "@/actions/getProducts";
import getUsers from "@/actions/getUsers";
import Container from "../components/Container";
import NullData from "../components/NullData";
import BarGraph from "./BarGraph";
import Summary from "./Summary";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const orders = await getOrders();
  const users = await getUsers();
  const graphData = await getGraphData();
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NullData title="Oops! Access denied" />;
  }

  return (
    <div className="pt-8">
      <Container>
        <Summary
          products={products}
          orders={orders}
          users={users}
          currentUser={currentUser}
        />
        <div className="mt-4 mx-auto max-w-[1150px]">
          <BarGraph data={graphData} />
        </div>
      </Container>
    </div>
  );
};

export default Admin;
