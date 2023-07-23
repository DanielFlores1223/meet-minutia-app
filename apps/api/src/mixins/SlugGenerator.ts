import { BeforeCreate } from 'sequelize-typescript';
import { ConstructorSquelizeModel } from '../types';
import {
	SlugGeneratorMixinAttributes,
	SlugGeneratorOptions,
} from '../interfaces';

export function SlugGenerator(options: SlugGeneratorOptions) {
	return function <T extends ConstructorSquelizeModel>(Base: T) {
		abstract class SlugGeneratorMixin extends Base {
			@BeforeCreate
			static slug_generator(instance: SlugGeneratorMixinAttributes) {
				if (options.property !== undefined)
					instance.slug = instance.getDataValue(options.property);
				else throw new Error('property is required on mixin SlugGenerator');
			}
		}

		return SlugGeneratorMixin;
	};
}
