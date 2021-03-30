import { getRepository } from "typeorm";
import Invest from "../../models/Invest";

interface Request {
    user_id: string;
    name: string;
    mes: string;
    value: number;
}

interface RequestUpdate {
    id: string;
    name: string;
    mes: string;
    value: number;
    date?: Date;
}

interface RequestDelete {
    id: string;
}

class InvestService {
    public async execute({
        name,
        mes,
        value,
        user_id,
    }: Request): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const invest = investRepository.create({
            name,
            mes,
            user_id,
            value,
        });

        await investRepository.save(invest);

        return invest;
    }

    public async RemoveUserService({ id }: RequestDelete): Promise<void> {
        const investRepository = getRepository(Invest);

        const checkUserId = investRepository.findOne({
            where: { id },
        });

        if (!checkUserId) {
            throw new Error("Id Not Found for Users");
        }

        await investRepository.delete(id);

        return;
    }

    public async UpdateUserService({
        id,
        name,
        mes,
        value,
        date,
    }: RequestUpdate): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const checkUserId = investRepository.findOne({
            where: { id },
        });

        if (!checkUserId) {
            throw new Error("Id Not Found for Users");
        }

        const userUpdate = investRepository.create({
            name,
            mes,
            value,
            date,
        });

        await investRepository.update(id, userUpdate);

        return userUpdate;
    }
}

export default InvestService;
