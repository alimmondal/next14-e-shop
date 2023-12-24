"use client";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/input/Input";
import Button from "../components/products/Button";
import Heading from "../components/products/Heading";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
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
        <Heading center title="Login for E-Shop" />
        <Button
          outline
          label="Login with google"
          icon={AiOutlineGoogle}
          onClick={handleSubmit(onSubmit)}
        />
        <hr className="bg-slate-300 w-full h-px mt-4" />
      </div>
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
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm mt-6 text-center">
        Do not have an account?{" "}
        <Link href={"/register"} className="underline">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
