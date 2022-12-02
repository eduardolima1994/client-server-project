import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Ok');
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Rodando na porta ${port}`);
});