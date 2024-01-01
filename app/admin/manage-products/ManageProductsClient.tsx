"use client";

import ActionBtn from "@/app/components/ActionBtn";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Product } from "@prisma/client";
import axios from "axios";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import toast from "react-hot-toast";
import {
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";

interface ManageProductsClientProps {
  products: Product[] | undefined;
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  const router = useRouter();
  const storage = getStorage();
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "name", width: 200 },
    {
      field: "price",
      headerName: "Price(USD)",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "category", width: 100 },
    { field: "brand", headerName: "brand", width: 100 },
    {
      field: "inStock",
      headerName: "inStock",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">
            {params.row.inStock === true ? (
              <Status
                text="in stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="out of stock"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },

    // { field: "images", headerName: "images", width: 100 },
    {
      field: "action",
      headerName: "action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() => {
                handleToggle(params.row.id, params.row.inStock);
              }}
            />
            <ActionBtn icon={MdDelete} onClick={() => {}} />
            <ActionBtn icon={MdRemoveRedEye} onClick={() => {}} />
          </div>
        );
      },
    },
  ];

  const handleToggle = useCallback(
    (id: string, inStock: boolean) => {
      axios
        .put("/api/product", { id, inStock: !inStock })
        .then((res) => {
          toast.success("Product status changed");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Oops! Something went wrong");
          console.log(error);
        });
    },
    [router]
  );

  const handleDelete = useCallback(
    async (id: string, images: any[]) => {
      toast("Deleting product. Please, wait...");

      const handleImageDelete = async () => {
        try {
          for (const item of images) {
            if (item.image) {
              const imageRef = ref(storage, item);
              await deleteObject(imageRef);
              console.log("image deleted", item.image);
            }
          }
        } catch (error) {
          return console.log("deleting images", error);
        }
      };

      await handleImageDelete();
    },
    [storage]
  );

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Manage Products" center />
      </div>
      <div style={{ height: "600px", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageProductsClient;
