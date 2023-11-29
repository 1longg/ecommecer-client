"use client";

import { categories } from "@/constants/categories";
import { productApi } from "@/services/product.service";
import { IProductMain, IProductMainSuccess } from "@/types/product.type";
import { getMainProduct } from "@/utils/api/getDataProduct";
import { formatter } from "@/utils/convertUSD";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function ProductMain() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["main-products"],
    queryFn: getMainProduct,
  });
  const product = data as IProductMain[]
  return (
    <div className="px-14">
      <div className="px-2 w-full mb-20">
        <div className="py-4 ">
          <p className="text-slate-400 text-xl uppercase">Categories</p>
        </div>
        <div className="flex flex-wrap border-t-[1px]">
          {categories.map((element, i) => {
            return (
              <Link
                href={`/search?category=${element.to}&sortBy=sold&order=desc&page=1&limit=15`}
                key={element.name}
                className="w-[10%] border-b-[1px] border-l-[1px] cursor-pointer hover:shadow-inner"
              >
                <Image
                  src={element.img}
                  width={80}
                  height={80}
                  alt="1"
                  className="m-auto"
                />
                <p className="text-center">{element.name}</p>
              </Link>
            );
          })}
        </div>
        <div className="py-4 mt-6">
          <p className="text-slate-400 text-xl uppercase">HOT</p>
        </div>
        <div className="mt-4  w-screen overflow-x-auto">
          <div className="flex flex-nowrap animate-moveRtf">
            {product.map((element: IProductMain, i) => {
              return (
                <div
                  key={i}
                  className="group relative max-w-[475px] max-h-[250px] overflow-hidden border rounded-md h-[30vh] mr-3 min-w-[33%] cursor-pointer hover:border-blue-400"
                >
                  <Image
                    src={element.image[0]}
                    width="150"
                    height="150"
                    alt="123"
                    className="mx-auto group-hover:scale-125  transform transition duration-500 object-contain"
                  />
                  <div className="flex bottom-[5%] left-[5%] absolute items-center border rounded-3xl p-2 bg-white ">
                    <p className="text-sm font-bold mr-2 max-w-[100px] truncate">
                      {element.name}
                    </p>
                    <p className="border rounded-3xl bg-blue-600 text-sm font-bold text-white px-2 py-1">
                      {`${formatter.format(element.price)}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
