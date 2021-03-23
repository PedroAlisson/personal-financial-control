import { Request, Response, Router } from "express";

const routerUser = Router();
routerUser.get("/", (request: Request, response: Response) => {
  response.json({ ok: "user" });
});

routerUser.post("/", (request: Request, response: Response) => {
  const { email, password } = request.body;
  response.json({ ok: "user" });
});

export default routerUser;
