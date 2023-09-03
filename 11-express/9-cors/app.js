import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
origin:['http://192.168.123.104:5500'],
  optionsSuccessStatus: 200,
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
