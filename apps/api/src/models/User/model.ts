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
	HasMany,
} from 'sequelize-typescript';
import { UuidGenerator } from '../../mixins';
import { UserAttributes, UserAttributesCreation } from './interfaces';
import { Minute, Role } from '..';

@Table({ tableName: 'users' })
@UuidGenerator
export class User extends Model<UserAttributes, UserAttributesCreation> {
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

	@HasMany(() => Minute)
		users: Minute[];
}
