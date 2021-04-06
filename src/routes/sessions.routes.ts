import { Request, Response, Router } from "express";
import AutenticateUserService from "../services/UserSessions/AutenticateUserService";

const routerSessions = Router();

routerSessions.post("/", async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const authenticateUser = new AutenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default routerSessions;
