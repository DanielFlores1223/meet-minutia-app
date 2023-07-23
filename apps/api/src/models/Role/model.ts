import {
	Model,
	Table,
	Column,
	DataType,
	Unique,
	AllowNull,
	HasMany,
} from 'sequelize-typescript';
import { User } from '..';
import { RoleAttributes, RoleCreationAttributes } from './interfaces';

@Table({
	tableName: 'roles',
})
export class Role extends Model<RoleAttributes, RoleCreationAttributes> {
	@Unique
	@AllowNull(false)
	@Column(DataType.STRING(20))
		name: string;

	@HasMany(() => User)
		users: User[];
}
