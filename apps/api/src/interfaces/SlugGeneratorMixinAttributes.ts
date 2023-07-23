import { Model } from 'sequelize-typescript';

export interface SlugGeneratorMixinAttributes extends Model {
	slug: string;
}

export interface SlugGeneratorOptions {
	property: string;
}
