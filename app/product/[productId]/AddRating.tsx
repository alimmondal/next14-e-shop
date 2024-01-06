"use client";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/input/Input";
import { SafeUser } from "@/type";
import { Rating } from "@mui/material";
import { Order, Product, Review } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface AddRatingProps {
  product: Product & {
    reviews: Review[];
  };
  user:
    | (SafeUser & {
        orders: Order[];
      })
    | null;
}

const AddRating: React.FC<AddRatingProps> = ({ product, user }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      comment: "",
      rating: 0,
    },
  });

  const router = useRouter();

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log("Product rating: ", data);
    setIsLoading(true);

    if (data.rating === 0) {
      setIsLoading(false);
      return toast.error("No rating selected");
    }

    const ratingData = {
      ...data,
      userId: user?.id,
      product: product,
    };

    axios
      .post("/api/rating", ratingData)
      .then((response) => {
        toast.success("Rating submitted successfully");
        // router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("Error to save rating to db", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!user || !product) return null;

  // const deliveredOrder = user?.orders.some(
  //   (order) =>
  //     order.products.find((item) => item.id === product.id) &&
  //     order.deliveryStatus === "delivered"
  // );

  const userReview = product?.reviews.find((review: Review) => {
    return review.userId === user.id;
  });
  // console.log("Review", userReview);
  // console.log("deliveredOrder", deliveredOrder);

  // if (userReview || deliveredOrder) return null;
  if (userReview) return null;

  return (
    <div>
      <Heading title="Rate this product" />
      <Rating
        onChange={(event, newValue) => {
          setCustomValue("rating", newValue);
        }}
      />
      <div className="flex flex-col gap-2 max-w-[500px]">
        <Input
          id="comment"
          label="Write comment..."
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button
          label={isLoading ? "Loading..." : "Add Rating"}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default AddRating;
