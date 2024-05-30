import { Router } from "express";
import { EventItemRoutes } from "../modules/EventItem/eventItem.route";
import { serviceRoutes } from "../modules/services/services.route";
import { ClientRoutes } from "../modules/Client/client.route";
import { productRoutes } from "../modules/product/product.route";
import { brandRoutes } from "../modules/brand/brand.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { orderRoutes } from "../modules/Order/order.route";
import { earphoneRoutes } from "../modules/earphoneProduct/earphone.route";
import { SmartWatchRoutes } from "../modules/smartWatchProduct/smartwatch.route";
import { PowerBankRoutes } from "../modules/powerBankProduct/powerbank.route";
import { HeadPhoneRoutes } from "../modules/headphoneProduct/headphone.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/eventItem",
    route: EventItemRoutes,
  },
  {
    path: "/services",
    route: serviceRoutes,
  },
  {
    path: "/client",
    route: ClientRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/brands",
    route: brandRoutes,
  },
  {
    path: "/products",
    route: productRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
  {
    path: "/earphones",
    route: earphoneRoutes,
  },
  {
    path: "/smartwatch",
    route: SmartWatchRoutes,
  },
  {
    path: "/powerbank",
    route: PowerBankRoutes,
  },
  {
    path: "/headphone",
    route: HeadPhoneRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
