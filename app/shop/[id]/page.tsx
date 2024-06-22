import Image from "next/image";
import data from "../../../data.json";

const SingleProduct = ({ params }: { params: any }) => {
  const { id } = params;
  const itemId = Number(id);
  const { Products } = data;

  const item = Products.find((item) => item._id === itemId);
  // console.log("items:", item )

  if (!item) {
    return <div>Items not found</div>;
  }

  return (
    <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4">
      <div className="w-full h-full flex items-center justify-center gap-96">
        <div className="w-96">
          <Image
            src={item?.images}
            alt=""
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div className="">
          <h1 className="text-4xl">{item?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
