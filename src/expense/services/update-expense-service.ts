import { inject, injectable } from "tsyringe";
import { Expense } from "../entities/expense-entity";
import { EntradaCreateExpense } from "../dto/create-expense-dto";
import { EntradaUpdateExpense } from "../dto/update-expense-dto";

@injectable()
export class UpdateExpenseService {   

    constructor(
        @inject('ExpenseRepository') private expenseRepository
    ) {}

    async execute(body: EntradaUpdateExpense): Promise<Expense[]> {
        const res = await this.expenseRepository.update(body)
        console.log(res)
        return res
    }
}
