import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
	tableName: 'roles',
})
export class Role extends Model {
	@Column({
		type: DataType.STRING(20),
		unique: true,
	})
		name: string;
}
