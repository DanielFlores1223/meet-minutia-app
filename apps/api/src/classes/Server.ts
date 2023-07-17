import express, { Express } from 'express';
import { minutiaDB } from '../db/minutiaDB';

export class Server {
	private app: Express;
	private port: number;
	private path: string;

	constructor() {
		this.app = express();
		this.port = Number(process.env.PORT) || 3000;
		this.path = 'minutia/api';

		this.dbConnection();
	}

	async dbConnection() {
		await minutiaDB.authenticate();
		await minutiaDB.sync({ force: true });
		console.log('DB connected successfully');
	}

	listen() {
		this.app.listen(this.port, () =>
			console.log(
				`Server is running: http://localhost:${this.port}/${this.path}`
			)
		);
	}
}
