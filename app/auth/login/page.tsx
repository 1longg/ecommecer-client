"use client";

import { LockIcon } from "@/components/Icon/LockIcon";
import { UserIcon } from "@/components/Icon/UserIcon";
import { ILogin } from "@/types/auth.type";
import { validateSignIn } from "@/validations/auth.validation";
import authApi from "@/services/auth.service";

import Link from "next/link";
import React, { useContext } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ErrorResponse, authResponse } from "@/types/respone";
import { useRouter } from "next/navigation";
import { AppContext } from "@/utils/context";

import HttpStatusCode from "@/constants/statusCode";
import { isUnprocessableEntity } from "@/utils/checkAxiosError";

function Login() {
  const { setIsAuthenticated } = useContext(AppContext);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: joiResolver(validateSignIn),
  });


  const loginMutation = useMutation({
    mutationFn: async (data: ILogin) => await authApi.signIn(data),
  });

  const onSubmit = (data: ILogin) => {
   loginMutation.mutate(data, {
      onSuccess: (res) => {
        const dataResponse = res.data as authResponse;
        if (dataResponse.statusCode === HttpStatusCode.Ok) {
          setIsAuthenticated(true);
          router.push('/main')
        }
      },
      onError: (err) => {
        if(isUnprocessableEntity(err)){
          const errorResponse = err.response?.data as ErrorResponse
          setError('root', {
            message: errorResponse.message
          })
        }
      },
    });
  };
  return (
    <div className="w-full h-screen bg-primaryColor">
      <div className="container h-screen">
        <div className="flex justify-center items-center h-full">
          <form
            className="border rounded-md bg-white p-4 w-full max-w-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-xl font-bold text-center mb-4">Login</div>
            <div className="flex items-center border-2 px-2 mb-2 rounded-md">
              <UserIcon className="w-6 h-6" fill="gray" />
              <input
                placeholder="Username or Email"
                {...register("username")}
                className=" w-full outline-none px-2 py-3"
              />
            </div>
            <div className="text-red-600 text-sm h-5 mb-2">
              {errors.username?.message}
            </div>

            <div className="flex items-center border-2 px-2 rounded-md mb-2">
              <LockIcon className="w-6 h-6" />
              <input
                placeholder="Enter Your Password"
                type="password"
                {...register("password")}
                className=" w-full outline-none rounded-md px-2 py-3"
              />
            </div>

            <div className="text-red-600 text-sm h-5 mb-2">
              {errors.root?.message || errors.password?.message}
            </div>

            <div className="justify-end flex mb-2">
              <Link href="/" className="text-blue-600 font-semibold">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 border rounded-xl text-white text-sm py-2 mb-2 hover:bg-blue-700"
            >
              Login
            </button>

            <div className="justify-center flex mb-2">
              <p className="text-slate-400">Dont have an account?</p>
              <Link href="auth/register" className="text-blue-600">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
