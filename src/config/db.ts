import { DataSource } from "typeorm"
import { Expense } from "../expense/entities/expense-entity"

export const AppDataSource = new DataSource({
    type: 'postgres',
    username: 'user',
    password: '123',
    port: 5432,
    database: 'pgdb',
    entities: [Expense],
    synchronize: true,
    host: 'pg'
})



AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })