import { Request, Response } from "express";
import { injectable, inject, container } from "tsyringe";
import { ListExpenseService } from "../services/list-expense-service";
import { CreateExpenseService } from "../services/create-expense-service";
import { UpdateExpenseService } from "../services/update-expense-service";
import { DeleteExpenseService } from "../services/delete-expense-service";

@injectable()
export class ExpenseController {

    async index(req: Request, res: Response) {
        console.log('ok')
        const expenseService = container.resolve(ListExpenseService)
        const response = await expenseService.execute()
        // const response = expenseService.index()
        return res.json(response)
    }

    async create(req: Request, res: Response) {
        console.log(req.body)
        const createExpenseService = container.resolve(CreateExpenseService)
        const result  = await createExpenseService.execute(req.body);
        res.json(result)
    }
    
    update(req: Request, res: Response) {
        console.log(req.body)
        const updateExpenseService = container.resolve(UpdateExpenseService)
        const result = updateExpenseService.execute(req.body);
        res.json(result)
    }

    delete(req: Request, res: Response) {
        console.log(req.params)
        const deleteExpenseService = container.resolve(DeleteExpenseService)
        const result = deleteExpenseService.execute(parseInt(req.params.id));
        res.json(result)
    }
}