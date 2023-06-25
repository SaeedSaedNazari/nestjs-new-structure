import { PrimaryGeneratedColumn } from 'typeorm';
import {
  CreateDateUTCColumn,
  UpdateDateUTCColumn,
} from '../../common/lib/decorator/entity.decorator';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateUTCColumn()
  createdAt: Date;

  @UpdateDateUTCColumn()
  updatedAt: Date;
}
