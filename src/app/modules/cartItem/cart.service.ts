import { TCart } from "./cart.interface";
import { CartModel } from "./cart.model";

const createCartIntoDB = async (payload: TCart) => {
    const result=await CartModel.create(payload)
    return result
    }
const getCartsFromDB=async()=>{
    const result=await CartModel.find();
    return result
}
   
export const cartService={
    createCartIntoDB,
    getCartsFromDB
}