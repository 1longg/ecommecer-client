"use client";

import { ISearchParam } from "@/types/searchParam.type";
import LeftSide from "./LeftSIde";
import ProductList from "./ProductList";
import RightSide from "./RightSide";
import { useQuery } from "@tanstack/react-query";
import { convertObjectParamToString } from "@/utils/convertObjectParamToString";
import { productApi } from "@/services/product.service";
import { IProductMain } from "@/types/product.type";

export default function SearchPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: ISearchParam ;
}) {
  const {isPending ,data} = useQuery({
    queryKey: ["productList", convertObjectParamToString(searchParams as ISearchParam)],
    queryFn:  () => {
       return productApi.getProductList(convertObjectParamToString(searchParams as ISearchParam))
    },
  })
  if(isPending){
    return <div>loading</div>
  }
  const productList = data?.data.metadata.products
  const totalProducts = data?.data.metadata.count
  return (
    <div className="flex flex-row mx-auto bg-primaryColor mb-8 px-4">
      <LeftSide classname="max-w-[125px] w-full order-first flex-none" searchParam={searchParams as ISearchParam}/>
      <ProductList classname="order-none min-h-full w-full mr-4" searchParams={searchParams as ISearchParam} totalProduct={totalProducts as number} productList={productList as IProductMain[]}/>
      <RightSide classname="order-last flex-none max-w-[125px]" searchParam={searchParams as ISearchParam}/>
    </div>
  );
}
