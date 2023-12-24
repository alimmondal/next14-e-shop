"use client";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/input/Input";
import Button from "../components/products/Button";
import Heading from "../components/products/Heading";
import { AiOutlineGoogle } from "react-icons/ai";

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
      <div className="pb-8">
        <Heading center title="Sign up for E-Shop" />
        <Button
          outline
          label="Signup with google"
          icon={AiOutlineGoogle}
          onClick={handleSubmit(onSubmit)}
        />
        <hr className="bg-slate-300 w-full h-px mt-4" />
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
      <p className="text-sm mt-6 text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;