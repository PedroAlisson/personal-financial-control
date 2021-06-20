import { Router } from "express";

const router = Router();

import routesUsers from "./user.routes";
import routesInvest from "./invest.routes";
import routesSessions from "./sessions.routes";
import routesBills from "./bill.routes";

router.use("/users", routesUsers);
router.use("/invest", routesInvest);
router.use("/sessions", routesSessions);
router.use("/bills", routesBills);

export default router;
