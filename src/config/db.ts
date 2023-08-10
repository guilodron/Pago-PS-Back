import { DataSource } from "typeorm"
import { Expense } from "../expense/entities/expense-entity"

export const AppDataSource = new DataSource({
    type: 'mysql',
    username: 'user',
    password: '123',
    port: 3306,
    database: 'testdb',
    entities: [Expense],
    synchronize: true,
    host: 'mysql-server'
})



AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })