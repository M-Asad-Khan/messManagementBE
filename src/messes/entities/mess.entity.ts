import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Mess {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public menuDetail: string;

  @Column()
  public price: string;

  @Column()
  public date: Date;

  // @ManyToMany(() => User, (user) => user.mess)
  // userId: User;
}
