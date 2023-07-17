import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import * as models from '../models';

dotenv.config({ path: '.env' });

export const minutiaDB = new Sequelize({
	database: process.env.DB_NAME,
	dialect: 'postgres',
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	define: { timestamps: true, deletedAt: true },
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	models: [models.Role],
	logging: false,
});
