import { Request, Response, Router } from "express";

import UserService from "../services/userServices/UserService";

const routerUser = Router();

routerUser.get("/", (request: Request, response: Response) => {
  response.json({ ok: "user" });
});

routerUser.post("/", async (request: Request, response: Response) => {
  const { name, email, password } = request.body;
  const createUser = new UserService();

  const user = await createUser.execute({
    name,
    email,
    password,
  });
  delete user.password;
  return response.json(user);
});

routerUser.put("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  const { name, email, password } = request.body;

  const updateUser = new UserService();

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

  const updateUser = new UserService();

  const user = await updateUser.RemoveUserService({
    id,
  });
  return response.send();
});

export default routerUser;
