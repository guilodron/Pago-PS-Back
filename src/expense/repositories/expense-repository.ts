import { Repository } from "typeorm";
import { Expense } from "../entities/expense-entity";
import { AppDataSource } from "../../config/db";
import { injectable } from "tsyringe";
import { EntradaCreateExpense } from "../dto/create-expense-dto";
import { EntradaUpdateExpense } from "../dto/update-expense-dto";

@injectable()
export class ExpenseRepository {
    repository: Repository<Expense>;
    
    constructor() {
        this.repository = AppDataSource.getRepository(Expense);
    }

    listAll(): Promise<Expense[]> {
        return this.repository.find();
    }

    create(body: EntradaCreateExpense): Promise<Expense> {
        const result = this.repository.save(body)
        return result;
    }

    async update(body: EntradaUpdateExpense) {
        console.log(body)
        const foundExpense = await this.findOneById(body.id);
        if(!foundExpense) {
            return;
        }
        return this.repository.update({id: body.id}, body);
    }

    findOneById(id) {
        return this.repository.findOneBy({id});
    }

    async delete(id: number) {
        const foundExpense = await this.findOneById(id);
        if(!foundExpense) {
            return;
        }
        this.repository.delete(id);
    }
}