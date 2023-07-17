import express, { Express } from 'express';

export class Server {
	private app: Express;
	private port: number;
	private path: string;

	constructor() {
		this.app = express();
		this.port = Number(process.env.PORT) || 3000;
		this.path = 'minutia/api';
	}

	listen() {
		this.app.listen(this.port, () =>
			console.log(
				`Server is running: http://localhost:${this.port}/${this.path}`
			)
		);
	}
}
