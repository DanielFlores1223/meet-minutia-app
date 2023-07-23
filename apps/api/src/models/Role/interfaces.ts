import { Optional } from 'sequelize';
import { User } from '..';

export interface RoleAttributes {
	id: number;
	name: string;
	users: User[];
}

export interface RoleCreationAttributes
	extends Optional<RoleAttributes, 'id'> {}
