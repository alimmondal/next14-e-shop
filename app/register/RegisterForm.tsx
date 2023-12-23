"use client";
import React, { useState } from "react";
import Heading from "../components/products/Heading";
import Input from "../components/input/Input";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <>
      <div className="p-8">
        <Heading center title="Sign up for E-Shop" />
        <hr className="bg-slate-300 w-full h-px" />
      </div>

      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading" : "sign up"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default RegisterForm;
