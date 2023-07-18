import {
	Model,
	Table,
	Column,
	ForeignKey,
	BelongsTo,
	DataType,
	AllowNull,
	IsEmail,
	Default,
	PrimaryKey,
	Unique,
} from 'sequelize-typescript';
import { Role } from './';

@Table({
	tableName: 'users',
})
export class User extends Model {
	@PrimaryKey
	@Unique
	@AllowNull(false)
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
		id: string;

	@AllowNull(false)
	@Column(DataType.STRING(50))
		name: string;

	@AllowNull(true)
	@Column(DataType.STRING(100))
		lastName: string;

	@IsEmail
	@AllowNull(false)
	@Column(DataType.STRING(200))
		email: string;

	@AllowNull(false)
	@Column(DataType.STRING(200))
		password: string;

	@AllowNull(false)
	@Default(false)
	@Column(DataType.BOOLEAN)
		google: boolean;

	@ForeignKey(() => Role)
	@Column(DataType.INTEGER)
		idRole: number;

	@BelongsTo(() => Role)
		role: Role;
}
