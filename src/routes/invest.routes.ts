import { Request, Response, Router } from "express";
import InvestService from "../services/investService/InvestService";

const routerInvest = Router();
routerInvest.get("/", (request: Request, response: Response) => {
  response.json({ ok: "invest" });
});

routerInvest.post("/", async (request: Request, response: Response) => {
  const { name, mes, value, user_id } = request.body;
  const investService = new InvestService();
  const invest = await investService.execute({
    name,
    mes,
    value,
    user_id,
  });

  return response.json(invest);
});

export default routerInvest;
