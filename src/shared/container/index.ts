import { container } from "tsyringe";
import { ExpenseRepository } from "../../expense/repositories/expense-repository";

container.registerSingleton(
    'ExpenseRepository',
    ExpenseRepository
)