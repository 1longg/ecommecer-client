import { SuccessResponse } from "./respone";

export type IProductMain = {
    name: string,
    price: number,
    image: string[],
    sold: string,
    rating: number,
    _id: string,
    createdAt: Date,
    updatedAt: Date,
}

export type IProductMainSuccess = {
    products: IProductMain[],
    count: number,
}