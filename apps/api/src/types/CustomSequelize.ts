import { Model } from 'sequelize-typescript';

export type ConstructorSquelizeModel = new (...args: any[]) => Model;
