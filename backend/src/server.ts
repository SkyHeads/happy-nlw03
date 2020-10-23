import express from 'express';
import './database/connection';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => {
  console.log('Server on PORT 3333');
});