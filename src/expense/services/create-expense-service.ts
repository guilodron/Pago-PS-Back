import { inject, injectable } from "tsyringe";
import { Expense } from "../entities/expense-entity";
import { EntradaCreateExpense } from "../dto/create-expense-dto";

@injectable()
export class CreateExpenseService {   

    constructor(
        @inject('ExpenseRepository') private expenseRepository
    ) {}

    async execute(body: EntradaCreateExpense): Promise<Expense[]> {
        const res = await this.expenseRepository.create(body)
        console.log('registro criado')
        console.log(res)
        return res
    }
}
