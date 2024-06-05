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
  const result = await productServices.getAllProductIntoDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Products is retrieve successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductIntoDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Product is retrieve successfully",
    data: result,
  });
});
const getSingleWithReview = catchAsync(async (req: any, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductWithReviewIntoDB(id);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Product is retrieve with reviews successfully",
    data: result,
  });
});

export const productController = {
  createProduct,
  getAllProduct,
  getSingleWithReview,
  getSingleProduct,
};
