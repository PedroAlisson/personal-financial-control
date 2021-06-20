import { Request, Response, Router } from "express";
import BillService from "../services/BillService/BillsService";
import ensureAuthenticated from "../middlewares/ensureAutenticated";

const routerBill = Router();

routerBill.use(ensureAuthenticated);

routerBill.get("/", async (request: Request, response: Response) => {
  const user_id = request.user.id;
  const listBillService = new BillService();

  const check = await listBillService.ListBillService({
    user_id,
  });
  return response.json(check);
});

routerBill.post("/", async (request: Request, response: Response) => {
  const user_id = request.user.id;
  const { name, status, value, date, mes } = request.body;

  const billService = new BillService();

  const bill = await billService.execute({
    name,
    status,
    value,
    date,
    user_id,
    mes,
  });

  return response.json(bill);
});

routerBill.put("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, status, value, date, mes } = request.body;

  const updateBill = new BillService();

  const bill = await updateBill.UpdateBillService({
    id,
    name,
    status,
    value,
    date,
    mes,
  });
  return response.json(bill);
});

routerBill.delete("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  const deleteBill = new BillService();

  const bill = await deleteBill.RemoveBillService({
    id,
  });
  return response.send();
});

export default routerBill;
