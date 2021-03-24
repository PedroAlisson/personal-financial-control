import { Request, Response, Router } from "express";

const routerInvest = Router();
routerInvest.get("/", (request: Request, response: Response) => {
  response.json({ ok: "invest" });
});

routerInvest.post("/", (request: Request, response: Response) => {
  const { name, mes, value, date } = request.body;
  response.json({ ok: "invest" });
});

export default routerInvest;
