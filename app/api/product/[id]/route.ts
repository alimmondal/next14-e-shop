import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role === "ADMIN") {
    return NextResponse.error();
  }

  const product = await prisma?.product.deleteMany({
    where: { id: params.id },
  });
  return NextResponse.json(product);
}