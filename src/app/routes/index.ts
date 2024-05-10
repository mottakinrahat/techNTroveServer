import { Router } from "express";
import { recentEventRoutes } from "../modules/recentEvent/recentEvent.route";
import { EventItemRoutes } from "../modules/EventItem/eventItem.route";
import { serviceRoutes } from "../modules/services/services.route";
import { ClientRoutes } from "../modules/Client/client.route";

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
    path: "/recentEvent",
    route: recentEventRoutes,
  },
  {
    path: "/client",
    route: ClientRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
