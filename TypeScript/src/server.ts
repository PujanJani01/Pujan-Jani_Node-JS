import express, { Request, Response } from 'express';
import 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Express + Typescript!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


