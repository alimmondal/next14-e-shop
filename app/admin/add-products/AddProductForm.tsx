"use client";

import Heading from "@/app/components/Heading";
import CustomCheckBox from "@/app/components/input/CustomCheckBox";
import Input from "@/app/components/input/Input";
import TextArea from "@/app/components/input/TextArea";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
    },
  });

  return (
    <>
      <Heading title="Add Product" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <Input
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="description"
        label="description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox id="inStock" label="description" register={register} />
      <div className="w-full font-medium ">
        <div className="mb-2 font-semibold">Select a Category</div>
      </div>
    </>
  );
};

export default AddProductForm;
