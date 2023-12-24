"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import Input from "../components/input/Input";
import Button from "../components/products/Button";
import Heading from "../components/products/Heading";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    // console.log(data);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("account created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/login");
            // router.refresh();
            toast.success("Logged in");
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="pb-8">
        <Heading center title="Sign up for E-Shop" />
        <Button
          outline
          label="Signup with google"
          icon={AiOutlineGoogle}
          onClick={() => {}}
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
      <div className="relative">
        <div className="">
          <Input
            id="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type={showPassword ? "text" : "password"}
          />
        </div>
        <div
          className="
        mt-2 flex 
        items-center 
        absolute 
        top-6 
        left-[93%]"
        >
          <span
            className="cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={34} />
            ) : (
              <AiOutlineEye size={34} />
            )}
          </span>
          {/* <span className="ml-2">Show Password</span> */}
        </div>
      </div>
      <div className="mt-2 flex items-center ">
        <span
          className="cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={34} />
          ) : (
            <AiOutlineEye size={34} />
          )}
        </span>
        <span className="ml-2">Show Password</span>
      </div>

      <Button
        label={isLoading ? "Loading..." : "sign up"}
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
