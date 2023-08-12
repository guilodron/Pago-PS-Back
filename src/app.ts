import "reflect-metadata";
import express from 'express';
import routes from './routes';
import cors from 'cors';
import './config/db'
import './shared/container'

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
