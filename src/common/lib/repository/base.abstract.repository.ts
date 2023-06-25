import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { BaseInterfaceRepository } from './base.interface.repository';
import {
  DeepPartial,
  DeleteResult,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
  UpdateResult,
} from 'typeorm';

export abstract class BaseAbstractRepository<T>
  extends Repository<T>
  implements BaseInterfaceRepository<T>
{
  abstract queryCreate(entity: DeepPartial<T>): Promise<T>;
  abstract queryCreate(entity: DeepPartial<T[]>): Promise<T[]>;

  abstract queryUpdate(
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

  abstract queryRemove(
    criteria:
      | string
      | number
      | Date
      | string[]
      | number[]
      | Date[]
      | FindOptionsWhere<T>,
  ): Promise<DeleteResult>;

  abstract queryOne(option: FindOptionsWhere<T>): Promise<T>;
  abstract queryOne(option: FindOneOptions<T>): Promise<T>;

  abstract queryMany(): Promise<T[]>;
  abstract queryMany(): Promise<[entities: T[], count: number]>;
  abstract queryMany(option: FindOptionsWhere<T>): Promise<T[]>;
  abstract queryMany(
    option: FindOptionsWhere<T>,
  ): Promise<[entities: T[], count: number]>;
  abstract queryMany(option: FindOneOptions<T>): Promise<T[]>;
  abstract queryMany(
    option: FindOneOptions<T>,
  ): Promise<[entities: T[], count: number]>;
}
