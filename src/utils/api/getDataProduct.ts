import { productApi } from "@/services/product.service"
import { IProductMain } from "@/types/product.type"

export const getMainProduct = async () => {
    const response = await productApi.getProductsToMain()
    return response.data.metadata.products
}