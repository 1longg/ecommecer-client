"use client";

import { useContext, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { clearAppContext} from "@/utils/auth";
import { AppContext } from "@/utils/context";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const {reset} = useContext(AppContext)
    useEffect(() => {
    clearAppContext.addEventListener('clearLS', reset)
    return () => {
      clearAppContext.removeEventListener('clearLS', reset)
    }
    }, [reset])
  return (
    <div className="bg-primaryColor">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
