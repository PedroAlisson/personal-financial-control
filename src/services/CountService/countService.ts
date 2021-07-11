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

        const resultsInvestTotal = await investRepository.find({
            where: { user_id },
        });

        const SumTotalInvest = resultsInvestTotal.reduce(
            (valor, item) => valor + item.total,
            0
        );

        const resultsBillTotal = await billRepository.find({
            where: { user_id },
        });

        const SumTotalBill = resultsBillTotal.reduce(
            (value, item) => value + item.value,
            0
        );

        return { resultsInvest, resultsBill, SumTotalInvest, SumTotalBill };
    }
}

export default CountService;
