import "reflect-metadata";
import express from 'express';
import routes from './routes';
import './config/db'
import './shared/container'

const app = express();
const port = 3000;

app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
