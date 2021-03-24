import express from "express";
import "./database";

import router from "./routes/routes";
import routesUsers from "./routes/user.routes";
import routesInvest from "./routes/invest.routes";

const app = express();
app.use(express.json());
app.use(router);
app.use("/users", routesUsers);
app.use("/invest", routesInvest);

app.listen(3333, () => console.log("Server start on Port 3333"));
