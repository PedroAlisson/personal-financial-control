import { Request, Response, Router } from "express";

import CreateUserService from "../services/userServices/CreateUserService";

import UpdateUserService from "../services/userServices/UpdateUserService";
import RemoveUserService from "../services/userServices/RemoveUserService";

const routerUser = Router();

routerUser.get("/", (request: Request, response: Response) => {
  response.json({ ok: "user" });
});

routerUser.post("/", async (request: Request, response: Response) => {
  const { name, email, password } = request.body;
  const createUser = new CreateUserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });
  return response.json(user);
});

routerUser.put("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, email, password } = request.body;

  const updateUser = new UpdateUserService();

  const user = await updateUser.UpdateUserService({
    id,
    name,
    email,
    password,
  });
  return response.json(user);
});

routerUser.delete("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;

  const updateUser = new RemoveUserService();

  const user = await updateUser.RemoveUserService({
    id,
  });
  return response.send();
});

export default routerUser;
