import {
	BeforeCreate,
	BeforeUpdate,
	Column,
	DataType,
} from 'sequelize-typescript';
import { ConstructorSquelizeModel } from '../types';
import { TokenGeneratorMixinAttributes } from '../interfaces';

export function TokenGenerator<T extends ConstructorSquelizeModel>(Base: T) {
	abstract class TokenGeneratorMixin extends Base {
		@Column({
			type: DataType.STRING(20),
			unique: true,
			allowNull: true,
		})
			token: string;

		@BeforeCreate
		@BeforeUpdate
		static generateToken(instance: TokenGeneratorMixinAttributes): void {
			console.log('instance token', instance);
			if (!instance.token) {
				instance.token = 'generated-token';
				console.log('token from mixin', instance.token);
			}
		}
	}

	return TokenGeneratorMixin;
}
