import { IProductMainSuccess } from '@/types/product.type'
import http from './api.service'
import { SuccessResponse } from '@/types/respone'

export const productApi = {
   getProductsToMain: async () => await http.get<SuccessResponse<IProductMainSuccess>>('/products?limit=8&page=1&sortBy=sold&order=desc'),
   getProductList: async (query: string) => await http.get<SuccessResponse<IProductMainSuccess>>(`/products/search?${query}`)
}