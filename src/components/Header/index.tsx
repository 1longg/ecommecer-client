"use client";

import Link from "next/link";
import { LogoVercel } from "../Icon/logoVercel";
import SearchBar from "../SearchBar";
import { useContext } from "react";
import { AppContext } from "@/utils/context";
import { useMutation } from "@tanstack/react-query";
import authApi from "@/services/auth.service";
import HeaderLogin from "../HeaderLogin";

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);

  const logoutMutation = useMutation({
    mutationFn: authApi.logOut,
    onSuccess: () => {
      setIsAuthenticated(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onClickLogout = () => {
    logoutMutation.mutate();
  };
  return (
    <div className="w-full z-30 sticky top-0 right-0 py-4 px-2 text-sm  bg-primaryColor">
      <div className="container flex justify-between">
        <div className="flex">
          <div className="mr-8">
            <Link href="/main" className="flex">
              <LogoVercel fill="currentColor" className="mr-2" />
              <p className="font-semibold">ACME STORE</p>
            </Link>
          </div>
          <Link href="/search?limit=15&page=1&order=desc&sortBy=sold" className="text-slate-500 mr-4">
            All
          </Link>
        </div>
        <SearchBar />
        {isAuthenticated ? (
          <HeaderLogin onClickLogout={onClickLogout} />
        ) : (
          <div className="flex items-center">
            <Link
              href="/auth/login"
              className="mr-4 border rounded-md  text-gray-600 px-3 py-2 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="border rounded-md text-sm text-gray-600 px-3 py-2 hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
