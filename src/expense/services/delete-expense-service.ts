import { inject, injectable } from "tsyringe";
import { Expense } from "../entities/expense-entity";
import { EntradaCreateExpense } from "../dto/create-expense-dto";
import { EntradaUpdateExpense } from "../dto/update-expense-dto";

@injectable()
export class DeleteExpenseService {   

    constructor(
        @inject('ExpenseRepository') private expenseRepository
    ) {}

    async execute(id: number): Promise<Expense[]> {
        const res = await this.expenseRepository.delete(id)
        console.log(res)
        return res
    }
}
