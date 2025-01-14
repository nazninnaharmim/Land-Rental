import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Manager } from 'src/Manager/module/managerpersonal.entity';
import { Seller } from 'src/Seller/module/sellerpersonal.entity';
// import { Manager } from './managerpersonal.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  name: string;

  @ManyToOne(() => Manager, (manager) => manager.prodcuts)
  manager: Manager;
  @ManyToOne(() => Seller, (seller) => seller.prodcuts)
  seller: Seller;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable({ name: 'ProductCategory' }) // Specify the name of the join table
  categories: Category[];
}
