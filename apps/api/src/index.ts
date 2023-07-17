import { Server } from './classes';
import dotenv from 'dotenv';

dotenv.config();
const server = new Server();
server.listen();
