import { Router } from "express";
import { EventItemRoutes } from "../modules/EventItem/eventItem.route";
import { serviceRoutes } from "../modules/services/services.route";
import { ClientRoutes } from "../modules/Client/client.route";
import { UserRoutes } from "../user/user.route";
import { productRoutes } from "../modules/product/product.route";
import { brandRoutes } from "../modules/brand/brand.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { orderRoutes } from "../modules/Order/order.route";
import { earphoneRoutes } from "../modules/earphoneProduct/earphone.route";

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
    route: UserRoutes,
  },
  {
    path: "/orders",
    route: orderRoutes,
  },
  {
    path: "/earphones",
    route: earphoneRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
