import Image from "next/image";
import ProductRating from "./ProductRating";
import { IProductMain } from "@/types/product.type";
import { formatter } from "@/utils/convertUSD";
import { ChevronLeftIcon } from "@/components/Icon/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/Icon/ChevronRightIcon";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Pagination from "@/components/Pagination.tsx";
import { ISearchParam } from "@/types/searchParam.type";
import { useRouter } from "next/navigation";
import { convertObjectParamToString } from "@/utils/convertObjectParamToString";

export default function ProductList({
  classname,
  productList,
  totalProduct,
  searchParams,
}: {
  classname?: string;
  productList: IProductMain[];
  totalProduct: number;
  searchParams: ISearchParam;
}) {
  const router = useRouter();
  const totalPage = Math.ceil(totalProduct / 15);
  const [page, setPage] = useState(Number(searchParams.page));
  const onClickChevLeft = () => {
    if (page > 1) {
      setPage(page - 1);
      router.push(
        `/search?${convertObjectParamToString({
          ...searchParams,
          page: String(page - 1),
        })}`
      );
    }
  };
  const onClickChevRight = () => {
    if (page < totalPage) {
      setPage(page + 1);
      router.push(
        `/search?${convertObjectParamToString({
          ...searchParams,
          page: String(page + 1),
        })}`
      );
    }
  };
  const onClickPage = (page: number) => {
    setPage(page);
    router.push(
      `/search?${convertObjectParamToString({
        ...searchParams,
        page: String(page),
      })}`
    );
  };
  return (
    <div className={classname}>
      <div className="grid grid-cols-3 grid-flow-row gap-4">
        {productList?.map((product, index) => {
          return (
            <Link
            href={'/product'}
              key={index}
              className="relative bg-white  border-[1px] rounded-md hover:border-blue-400 overflow-hidden cursor-pointer"
            >
              <Image
                src={product.image[0]}
                width={250}
                height={250}
                alt="123"
                className="mx-auto duration-300 transform transition hover:scale-125"
              />
              <div className="flex bottom-[5%] left-[5%] absolute items-center border rounded-3xl p-2 bg-white ">
                <p className="text-sm font-bold mr-2 max-w-[100px] truncate capitalize">
                  {product.name}
                </p>
               <p className="border rounded-3xl bg-blue-600 text-sm font-bold text-white px-2 py-1">
                  {`${formatter.format(product.price)}`}
                </p>
              </div>
              <ProductRating
                rating={product.rating}
                sold={Number(product.sold)}
              />
            </Link>
          );
        })}
      </div>
      <div className="justify-center text-slate-400 items-center flex mb-4 mt-8 cursor-pointer">
        <div className="mr-2" onClick={onClickChevLeft}>
          <ChevronLeftIcon
            className={clsx("w-5 h-5", {
              "cursor-not-allowed": page === 1,
            })}
          />
        </div>
        <Pagination
          currentPage={page}
          totalPage={totalPage}
          onClickPage={onClickPage}
        />
        <div onClick={onClickChevRight}>
          <ChevronRightIcon
            className={clsx("w-5 h-5", {
              "cursor-not-allowed": page === totalPage,
            })}
          />
        </div>
      </div>
    </div>
  );
}
