import prisma from "@/libs/prismadb";

export default async function getOrders() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Handle null user field
    // const ordersWithUser = orders.map((order) => ({
    //   ...order,
    //   user:
    //     order.user ||
    //     {
    /* default user object or handle accordingly */
    //     },
    // }));

    // return ordersWithUser;

    return orders;
  } catch (error: any) {
    console.log(error);
  }
}
