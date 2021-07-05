import { getRepository } from "typeorm";
import Bills from "../../models/Bill";
import Invests from "../../models/Invest";

interface user {
    user_id: string;
}

class CountService {
    public async execute({ user_id }: user) {
        const investRepository = getRepository(Invests);
        const billRepository = getRepository(Bills);

        const resultsInvest = await investRepository.count({
            where: { user_id },
        });

        const resultsBill = await billRepository.count({
            where: { user_id },
        });

        return { resultsInvest, resultsBill };
    }
}

export default CountService;
