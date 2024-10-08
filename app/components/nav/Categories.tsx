"use client";
import { categories } from "@/utils/Categories";
import { usePathname, useSearchParams } from "next/navigation";
import Category from "./Category";
import Container from "../Container";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  // const pathname = usePathname();

  // const isMainPage = pathname === "/";
  // if (!isMainPage) return null;

  return (
    <Container>
      <div className="py-4 flex flex-row items-center justify-start gap-2 md:gap-32 overflow-x-auto">
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
    </Container>
  );
};

export default Categories;
