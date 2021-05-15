import "reflect-metadata";
import express from "express";
import cors from "cors";
import "./database";

import router from "./routes/routes";
import routesUsers from "./routes/user.routes";
import routesInvest from "./routes/invest.routes";
import routesSessions from "./routes/sessions.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/users", routesUsers);
app.use("/invest", routesInvest);
app.use("/sessions", routesSessions);

app.listen(3333, () => console.log("Server start on Port 3333"));
