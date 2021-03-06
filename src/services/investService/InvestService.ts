import { getRepository } from "typeorm";
import Invest from "../../models/Invest";

interface Request {
    user_id: string;
    name: string;
    mes: string;
    value: number;
    date: Date;
    amount: number;
}

interface ListInv {
    user_id: string;
}

interface RequestUpdate {
    id: string;
    name: string;
    mes: string;
    value: number;
    date?: Date;
    amount: number;
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
        date,
        amount,
    }: Request): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const total = amount * value;

        const invest = investRepository.create({
            name,
            mes,
            user_id,
            value,
            date,
            amount,
            total,
        });

        await investRepository.save(invest);

        return invest;
    }

    public async RemoveInvestService({ id }: RequestDelete): Promise<void> {
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

    public async UpdateInvestService({
        id,
        name,
        mes,
        value,
        date,
        amount,
    }: RequestUpdate): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const checkUserId = investRepository.findOne({
            where: { id },
        });

        if (!checkUserId) {
            throw new Error("Id Not Found for Users");
        }

        const total = amount * value;

        const userUpdate = investRepository.create({
            name,
            mes,
            value,
            date,
            amount,
            total,
        });

        await investRepository.update(id, userUpdate);

        return userUpdate;
    }

    public async ListInvestService({ user_id }: ListInv): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const checkInvest = await investRepository.find({
            where: { user_id },
        });
        if (!checkInvest) {
            throw new Error("Invest Not Found");
        }
        return checkInvest;
    }
}

export default InvestService;
