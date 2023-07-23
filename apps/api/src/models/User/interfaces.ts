import { Optional } from 'sequelize';
import { Role } from '..';

export interface UserAttributes {
	id: string;
	name: string;
	lastName: string;
	email: string;
	password: string;
	google: boolean;
	idRole: number;
	role: Role;
}

export interface UserAttributesCreation
	extends Optional<UserAttributes, 'id'> {}
