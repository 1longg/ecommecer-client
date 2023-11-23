"use client";

import Link from "next/link";
import { LogoVercel } from "../Icon/logoVercel";
import SearchBar from "../SearchBar";
import { CartIcon } from "../Icon/CartIcon";
import { UserIcon } from "../Icon/UserIcon";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "@/utils/context";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useInteractions,
  arrow,
  FloatingArrow,
  safePolygon,
} from "@floating-ui/react";
import { AccountIcon } from "../Icon/AccountIcon";
import { LogoutIcon } from "../Icon/LogoutIcon";
import { AnimatePresence, motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import authApi from "@/services/auth.service";
import { clearLocalStorage } from "@/utils/auth";


export default function Header() {
  const {isAuthenticated,setIsAuthenticated} = useContext(AppContext)

  const logoutMutation = useMutation({
    mutationFn: authApi.logOut,
    onSuccess: () => {
      setIsAuthenticated(false) 
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onClickLogout = () => {
    logoutMutation.mutate();
  };
  const arrowRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
  });
  const hover = useHover(context, { move: true, handleClose: safePolygon() });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
    <div className="w-full sticky top-0 right-0 py-4 px-2 text-sm  bg-primaryColor">
      <div className="container flex justify-between">
        <div className="flex">
          <div className="flex mr-8">
            <LogoVercel fill="currentColor" className="mr-2" />
            <p className="font-semibold">ACME STORE</p>
          </div>
          <Link href="/search" className="text-slate-500 mr-4">
            All
          </Link>
          <Link href="/search" className="text-slate-500 mr-4">
            Shirts
          </Link>
          <Link href="/search" className="text-slate-500">
            Electronics
          </Link>
        </div>
        <SearchBar />
        {isAuthenticated ? (
          <div className="flex items-center mr-12">
            <div className="mr-8 cursor-pointer">
              <CartIcon className="w-5 h-5" />
            </div>
            <div ref={refs.setReference} {...getReferenceProps()}>
              <UserIcon className="w-5 h-5" />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  ref={refs.setFloating}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    width: "max-content",
                    transformOrigin: `top center`,
                    background: "white",
                  }}
                  initial={{ opacity: 0, transform: "scale(0)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0, transform: "scale(0)" }}
                  transition={{ duration: 0.2 }}
                  {...getFloatingProps()}
                >
                  <FloatingArrow
                    ref={arrowRef}
                    context={context}
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth={1}
                  />
                  <div className="border px-2 py-2 rounded-md min-w-[200px] text-slate-400 cursor-pointer">
                    <div className="flex items-center mb-2 hover:text-black">
                      <AccountIcon className="w-5 h-5 mr-2" />
                      <p>Profile</p>
                    </div>
                    <div
                      onClick={onClickLogout}
                      className="flex items-center text-slate-400 cursor-pointer hover:text-black "
                    >
                      <LogoutIcon className="w-5 h-5 mr-2" />
                      <p>Log Out</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              href="/auth/login"
              className="mr-4 border rounded-md text-sm text-gray-600 px-3 py-2 hover:bg-gray-100"
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
