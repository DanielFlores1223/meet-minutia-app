import {
	SlugGeneratorMixinAttributes,
	TokenGeneratorMixinAttributes,
} from '../../interfaces';
import { Minute } from './model';

export type MinuteType = Minute &
	SlugGeneratorMixinAttributes &
	TokenGeneratorMixinAttributes;
