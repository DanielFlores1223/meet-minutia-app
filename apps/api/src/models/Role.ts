import {
	Model,
	Table,
	Column,
	DataType,
	Unique,
	AllowNull,
	HasMany,
} from 'sequelize-typescript';
import { User } from './';

@Table({
	tableName: 'roles',
})
export class Role extends Model {
	@Unique
	@AllowNull(false)
	@Column(DataType.STRING(20))
		name: string;

	@HasMany(() => User)
		users: User[];
}
