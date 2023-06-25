import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../../database/entity/abstract.entity';
import { CatTypeEnum } from '../enum/cats-type.enum';

@Entity()
export class Cats extends AbstractEntity {
  @Column({ length: '50' })
  name: string;

  @Column()
  gender: boolean;

  @Column({ type: 'smallint' })
  type: CatTypeEnum;
}
