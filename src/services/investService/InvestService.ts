import { format, getDate } from "date-fns";
import { getRepository } from "typeorm";
import Invest from "../../models/Invest";

interface Request {
    user_id: string;
    name: string;
    mes: string;
    value: number;
    date: Date;
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
    }: Request): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const invest = investRepository.create({
            name,
            mes,
            user_id,
            value,
            date,
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

    public async ListInvestService({ user_id }: ListInv): Promise<Invest> {
        const investRepository = getRepository(Invest);

        const checkInvest = await investRepository.find({
            where: { user_id },
        });
        if (!checkInvest) {
            throw new Error("Invest Not Found");
        }
        /* const [Invests] = checkInvest;
        const date = Invests.date;
        const novadate = format(new Date(date), "MM/dd/yyy");
        Invests.date = novadate;
        */
        return checkInvest;
    }
}

export default InvestService;
