import {
	AllowNull,
	Column,
	DataType,
	Default,
	PrimaryKey,
	Unique,
} from 'sequelize-typescript';
import { ConstructorSquelizeModel } from '../types';

export function UuidGenerator<T extends ConstructorSquelizeModel>(Base: T) {
	abstract class UuidGeneratorMixin extends Base {
		@PrimaryKey
		@Unique
		@AllowNull(false)
		@Default(DataType.UUIDV4)
		@Column(DataType.UUID)
			id: string;
	}

	return UuidGeneratorMixin;
}
