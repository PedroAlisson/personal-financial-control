import { format } from "date-fns";
import { getRepository } from "typeorm";
import Bill from "../../models/Bill";

interface Request {
    user_id: string;
    name: string;
    status: string;
    value: number;
    date: Date;
    mes: string;
}

interface ListBill {
    user_id: string;
}

interface RequestDelete {
    id: string;
}

interface RequestUpdate {
    id: string;
    name: string;
    status: string;
    value: number;
    date: Date;
    mes: string;
}

class BillService {
    public async execute({
        name,
        date,
        status,
        value,
        user_id,
        mes,
    }: Request): Promise<Bill> {
        const billRepository = getRepository(Bill);

        const bill = billRepository.create({
            name,
            status,
            value,
            date,
            user_id,
            mes,
        });

        await billRepository.save(bill);

        return bill;
    }

    public async RemoveBillService({ id }: RequestDelete): Promise<void> {
        const billRepository = getRepository(Bill);

        const checkBillId = billRepository.findOne({
            where: { id },
        });

        if (!checkBillId) {
            throw new Error("Id Not Found for Bills");
        }

        await billRepository.delete(id);

        return;
    }

    public async UpdateBillService({
        id,
        name,
        date,
        status,
        value,
        mes,
    }: RequestUpdate): Promise<Bill> {
        const billRepository = getRepository(Bill);

        const checkBillId = billRepository.findOne({
            where: { id },
        });

        if (!checkBillId) {
            throw new Error("Id Not Found for Bills");
        }

        const billUpdate = billRepository.create({
            name,
            status,
            value,
            date,
            mes,
        });

        await billRepository.update(id, billUpdate);

        return billUpdate;
    }

    public async ListBillService({ user_id }: ListBill): Promise<Bill> {
        const billRepository = getRepository(Bill);

        const checkBill = await billRepository.find({
            where: { user_id, status: "Pendente" },
        });
        if (!checkBill) {
            throw new Error("Bills Not Found");
        }
        return checkBill;
    }

    public async FindBillService({ id }: RequestDelete): Promise<Bill> {
        const investRepository = getRepository(Bill);

        const checkInvest = await investRepository.find({
            where: { id },
        });
        if (!checkInvest) {
            throw new Error("Bills Not Found");
        }
        return checkInvest;
    }
}

export default BillService;
