import { Check, getRepository } from "typeorm";
import User from "../../models/User";

interface Request {
  id: string;
}

class RemoveUserService {
  public async RemoveUserService({ id }: Request): Promise<void> {
    const usersRepositoryRemove = getRepository(User);

    const checkUserId = usersRepositoryRemove.findOne({
      where: { id },
    });

    if (!checkUserId) {
      throw new Error("Id Not Found for Users");
    }

    await usersRepositoryRemove.delete(id);

    return;
  }
}

export default RemoveUserService;
