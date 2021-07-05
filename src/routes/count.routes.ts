import { Request, Response, Router } from "express";
import CountService from "../services/CountService/countService";
import ensureAuthenticated from "../middlewares/ensureAutenticated";

const routerCount = Router();

routerCount.use(ensureAuthenticated);

routerCount.get("/", async (request: Request, response: Response) => {
  const user_id = request.user.id;
  const count = new CountService();
  const check = await count.execute({ user_id });
  return response.json(check);
});

export default routerCount;
