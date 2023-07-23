import {
	AllowNull,
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Model,
	Table,
	Unique,
} from 'sequelize-typescript';
import { SlugGenerator, TokenGenerator, UuidGenerator } from '../../mixins';
import { MinuteAttributes, MinuteCreationAttributes } from './interfaces';
import { User } from '..';

@Table({ tableName: 'minutes' })
@SlugGenerator({ property: 'projectName' })
@UuidGenerator
@TokenGenerator
export class Minute extends Model<MinuteAttributes, MinuteCreationAttributes> {
	@Unique
	@AllowNull(false)
	@Column(DataType.STRING(50))
		projectName: string;

	@Unique
	@AllowNull(true)
	@Column(DataType.STRING(20))
		slug: string;

	@AllowNull(false)
	@Column(DataType.STRING)
		location: string;

	@AllowNull(false)
	@Column(DataType.DATE)
		meetingDateTime: Date;

	@AllowNull(false)
	@Column(DataType.TEXT)
		objective: string;

	@AllowNull(true)
	@Column(DataType.TEXT)
		notes?: string;

	@AllowNull(true)
	@Column(DataType.DATE)
		nextMeeting: Date;

	@ForeignKey(() => User)
	@Column(DataType.UUID)
		idOwner: string;

	@BelongsTo(() => User)
		owner: User;
}
