import React from "react";
import { getQueryClient } from "../../getQueryClient";
import {
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query'
import ProductMain from "./main";
import { productApi } from "@/services/product.service";
import { getMainProduct } from "@/utils/api/getDataProduct";

export default async function MainProduct() {
  const queryClient = getQueryClient();

await queryClient.prefetchQuery({
    queryKey: ["main-products"],
    queryFn:  getMainProduct,
});
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductMain />
    </HydrationBoundary>
  );
}