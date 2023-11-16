import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Express + Typescript!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});




