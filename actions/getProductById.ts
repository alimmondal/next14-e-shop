import prisma from "@/libs/prismadb";

export interface IParams {
  productId: string;
}
export default async function getProductById(params: IParams) {
  try {
    await prisma.$connect();
    const { productId } = params;

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!product) {
      return null;
    }
    return product;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error);
  } finally {
    // Ensure to disconnect from the database after operations are complete
    await prisma.$disconnect();
  }
}
