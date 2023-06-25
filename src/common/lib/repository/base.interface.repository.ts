import {
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface BaseInterfaceRepository<T> {
  queryCreate(data: T): Promise<T>;
  queryCreate(data: T[]): Promise<T[]>;

  queryUpdate(
    criteria:
      | string
      | number
      | Date
      | string[]
      | number[]
      | Date[]
      | FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<UpdateResult>;

  queryRemove(
    criteria:
      | string
      | number
      | Date
      | string[]
      | number[]
      | Date[]
      | FindOptionsWhere<T>,
  ): Promise<DeleteResult>;

  queryOne(option: FindOptionsWhere<T>): Promise<T>;
  queryOne(option: FindOneOptions<T>): Promise<T>;

  queryMany(): Promise<T[]>;
  queryMany(): Promise<[entities: T[], count: number]>;
  queryMany(option: FindOptionsWhere<T>): Promise<T[]>;
  queryMany(
    option: FindOptionsWhere<T>,
  ): Promise<[entities: T[], count: number]>;
  queryMany(option: FindOneOptions<T>): Promise<T[]>;
  queryMany(option: FindOneOptions<T>): Promise<[entities: T[], count: number]>;
}
