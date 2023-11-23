"use client";

import { ILogin, IRegister } from "@/types/auth.type";
import { validateSignIn, validateSignUp } from "@/validations/auth.validation";
import authApi from "@/services/auth.service";

import React, { useContext } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorResponse } from "@/types/respone";
import { isUnprocessableEntity } from "@/utils/checkAxiosError";
import _ from "lodash";
import toast, {Toaster} from 'react-hot-toast';


function Register() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors },
  } = useForm<IRegister>({
    resolver: joiResolver(validateSignUp),
  });

  const registerMutation = useMutation({
    mutationFn: async (data: Omit<IRegister, "confirmPassword">) =>
      await authApi.signUp(data),
  });

  const showToastSuccess = () => {
    toast.success('Register success')
  };

  const onSubmit: SubmitHandler<Omit<IRegister, "confirmPassword">> = (
    data: Omit<IRegister, "confirmPassword">
  ) => {
    registerMutation.mutate(_.omit(data, "confirmPassword"), {
      onSuccess: (res) => {
        showToastSuccess();
        reset();
      },
      onError: (err) => {
        if (isUnprocessableEntity(err)) {
          const errorResponse = err.response?.data as ErrorResponse;
          setError("root", {
            message: errorResponse.message,
          });
        }
      },
    });
  };

  return (
    <div className="w-full h-screen bg-primaryColor">

      <div className="container h-screen">
        <div className="flex justify-center items-center h-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border rounded-md bg-white py-4 px-6 w-full max-w-lg"
          >
            <div className="text-xl font-bold text-center mb-6">Register</div>
            <div className="mb-6">
              <p className="text-sm mb-2">Name*</p>
              <div className="flex justify-between">
                <input
                  {...register("firstName")}
                  placeholder="First Name"
                  className="w-[50%] mr-4 p-2 border-2 outline-none rounded-sm"
                />
                <input
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-[50%] p-2 border-2 outline-none rounded-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-2">Email Address*</p>
              <input
                {...register("email")}
                placeholder="Email Address"
                className="w-full p-2 border-2 outline-none rounded-sm"
              />

              <div className="text-red-600 text-sm h-5 mb-6">
                {errors.email?.message}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm mb-2">Username*</p>
              <input
                {...register("username")}
                placeholder="Username"
                className="w-full p-2 border-2 outline-none rounded-sm"
              />

              <div className="text-red-600 text-sm h-5 mb-6">
                {errors.username?.message}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-2">Password</p>
              <input
                placeholder="Password"
                type="password"
                {...register("password")}
                className="w-full p-2 border-2 outline-none rounded-sm"
              />

              <div className="text-red-600 text-sm h-5 mb-6">
                {errors.password?.message}
              </div>
            </div>
            <div className="mb-2">
              <p className="text-sm mb-2">Confirm Password</p>
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="Confirm Password"
                className="w-full p-2 border-2 outline-none rounded-sm"
              />
              <div className="text-red-600 text-sm h-5 mb-6">
                {errors.root?.message || errors.confirmPassword?.message}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 border rounded-xl text-white text-sm py-2 mb-2 hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
