import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ManagerProfile } from './managerProfile.entity';
import { Product } from './product.entity';
import { AddLand } from './addLand.entity';

@Entity('manager')
export class Manager {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => AddLand, (addland) => addland.manager)
  addlands: AddLand[];

  @OneToMany(() => Product, (product) => product.manager, { cascade: true })
  prodcuts: Product[];

  @OneToOne(() => ManagerProfile, (managerProfile) => managerProfile.manager, {
    cascade: true,
  })
  @JoinColumn()
  managerProfile: ManagerProfile;
  static managerProfile: typeof ManagerProfile;
}
