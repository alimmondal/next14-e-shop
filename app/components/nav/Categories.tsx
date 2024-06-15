"use client";
import { categories } from "@/utils/Categories";
import { usePathname, useSearchParams } from "next/navigation";
import Container from "../Container";
import Category from "./Category";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) return null;

  return (
    <div className="bg-white">
      {/* <Container> */}
      <h1 className="text-4xl">All Products</h1>
      <div className="py-4 flex flex-row items-center justify-start overflow-x-auto">
        {categories.map((item) => (
          <Category
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={
              category === item.label ||
              (category === null && item.label === "All")
            }
          />
        ))}
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Categories;
