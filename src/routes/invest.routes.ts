import { Request, Response, Router } from "express";
import InvestService from "../services/investService/InvestService";
import ensureAuthenticated from "../middlewares/ensureAutenticated";

const routerInvest = Router();

routerInvest.use(ensureAuthenticated);

routerInvest.get("/", async (request: Request, response: Response) => {
  const user_id = request.user.id;
  const listInvestService = new InvestService();

  const check = await listInvestService.ListInvestService({
    user_id,
  });
  return response.json(check);
});

routerInvest.post("/", async (request: Request, response: Response) => {
  const { name, mes, value, user_id, date, amount } = request.body;
  const investService = new InvestService();
  const invest = await investService.execute({
    name,
    mes,
    value,
    user_id,
    date,
    amount,
  });

  return response.json(invest);
});

routerInvest.put("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, mes, value, date } = request.body;

  const updateInvest = new InvestService();

  const invest = await updateInvest.UpdateInvestService({
    name,
    mes,
    value,
    date,
    id,
  });
  return response.json(invest);
});

routerInvest.delete("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  const deleteInvest = new InvestService();

  const invest = await deleteInvest.RemoveInvestService({
    id,
  });
  return response.send();
});

export default routerInvest;
