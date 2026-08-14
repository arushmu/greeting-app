import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.post('/greeting', (req: Request, res: Response) => {
  const { name } = req.body as { name?: unknown };
  if (typeof name !== 'string') {
    return res.status(400).json({ error: 'Request body must include a string "name" field' });
  }

  return res.json({ greeting: `Hello, ${name}!` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`greeting-app listening on port ${port}`);
});
