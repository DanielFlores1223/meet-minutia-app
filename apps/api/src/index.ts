import express, { Request, Response } from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: 'hello world MonoRepo :)',
	});
});

app.listen(PORT, () => {
	console.log('server started at http://localhost:' + PORT);
});
