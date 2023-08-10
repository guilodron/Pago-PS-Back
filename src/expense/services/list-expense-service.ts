import { inject, injectable } from "tsyringe";
import { Expense } from "../entities/expense-entity";

@injectable()
export class ListExpenseService {   

    constructor(
        @inject('ExpenseRepository') private expenseRepository
    ) {
    }

    async execute(): Promise<Expense[]> {
        const res = await this.expenseRepository.listAll()
        console.log(res)
        return res
    }
}
