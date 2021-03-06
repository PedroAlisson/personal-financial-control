import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import User from "../../models/User";

interface Request {
    name: string;
    email: string;
    password: string;
}

interface RequestUpdate {
    id: string;
    name: string;
    email: string;
    password: string;
}

interface RequestUser {
    id: string;
}

class UserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const checkUser = await usersRepository.findOne({
            where: { email },
        });

        if (checkUser) {
            throw new Error("Email address already used.");
        }

        const hashPassword = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashPassword,
        });

        await usersRepository.save(user);

        return user;
    }

    public async UpdateUserService({
        id,
        name,
        email,
        password,
    }: RequestUpdate): Promise<User> {
        const usersRepositoryUpdate = getRepository(User);

        const checkUserId = usersRepositoryUpdate.findOne({
            where: { id },
        });

        if (!checkUserId) {
            throw new Error("Id Not Found for Users");
        }

        const hashPassword = await hash(password, 8);

        const userUpdate = usersRepositoryUpdate.create({
            name,
            email,
            password: hashPassword,
        });

        await usersRepositoryUpdate.update(id, userUpdate);

        return userUpdate;
    }

    public async RemoveUserService({ id }: RequestUser): Promise<void> {
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

    public async ListUserService({ id }: RequestUser): Promise<User> {
        const usersRepositoryFind = getRepository(User);

        const checkUserId = usersRepositoryFind.findOne({
            where: { id },
        });

        if (!checkUserId) {
            throw new Error("Id Not Found for Users");
        }

        return checkUserId;
    }
}

export default UserService;
