import { Router } from "express";
import expenseRoutes from "../expense/expenseRoutes";

const routes = Router();

routes.use('/expense', expenseRoutes)

export default routes;