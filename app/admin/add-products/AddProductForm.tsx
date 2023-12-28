"use client";

import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/input/CategoryInput";
import CustomCheckBox from "@/app/components/input/CustomCheckBox";
import Input from "@/app/components/input/Input";
import SelectColor from "@/app/components/input/SelectColor";
import TextArea from "@/app/components/input/TextArea";
import { categories } from "@/utils/Categories";
import { colors } from "@/utils/Color";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export type ImageType = {
  color: string;
  colorCode: string;
  image: File | null;
};

export type UploadedImageType = {
  color: string;
  colorCode: string;
  image: string;
};

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

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

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
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 max-h-[50vh] overflow-auto ">
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }

            return (
              <div key={item.icon} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="">
          <div className="font-bold">
            Select the available product colors and upload them
          </div>
          <div className="text-sm">
            You must upload an image for each of the color selected above
            otherwise your color selection will be ignored
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {colors.map((item, index) => {
            return (
              <SelectColor
                key={index}
                item={item}
                addImageToState={() => {}}
                removeImageFromState={() => {}}
                isProductCreated={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
