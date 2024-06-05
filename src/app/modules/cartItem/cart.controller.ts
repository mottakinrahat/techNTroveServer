import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "../product/product.service";
import { cartService } from "./cart.service";

const createCart = catchAsync(async (req, res) => {
    const result = await cartService.createCartIntoDB(req.body);
  
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Added product in cart successfully",
      data: result,
    });
  });
  const getAllCarts = catchAsync(async (req, res) => {
    const result = await cartService.getCartsFromDB();
  
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "carts is retrieve successfully",
      data: result,
    });
  });
  export const cartController={
    createCart,getAllCarts
  }