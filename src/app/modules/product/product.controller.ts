import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";

const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProductIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Product is created successfully",
    data: result,
  });
});
const getAllProduct = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductIntoDB();

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Products is retrieve successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req: any, res) => {
  const id = req._id;
  const result = await productServices.getSingleProductIntoDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Product is retrieve successfully",
    data: result,
  });
});

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
