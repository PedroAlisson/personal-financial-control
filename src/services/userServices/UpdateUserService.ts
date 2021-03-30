import { Check, getRepository } from "typeorm";
import User from "../../models/User";

interface Request {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  public async UpdateUserService({
    id,
    name,
    email,
    password,
  }: Request): Promise<User> {
    const usersRepositoryUpdate = getRepository(User);

    const checkUserId = usersRepositoryUpdate.findOne({
      where: { id },
    });

    if (!checkUserId) {
      throw new Error("Id Not Found for Users");
    }

    const userUpdate = usersRepositoryUpdate.create({
      name,
      email,
      password,
    });

    await usersRepositoryUpdate.update(id, userUpdate);

    return userUpdate;
  }
}

export default UpdateUserService;
