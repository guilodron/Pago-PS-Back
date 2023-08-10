import { Router } from "express";
import { ExpenseController } from "./controllers/expense-controller";

const expenseRoutes = Router();

const expenseController = new ExpenseController();

expenseRoutes.get('/', expenseController.index);
expenseRoutes.post('/', expenseController.create);
expenseRoutes.put('/', expenseController.update);
expenseRoutes.delete('/:id', expenseController.delete);

export default expenseRoutes;