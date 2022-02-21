import { Mess } from 'src/messes/entities/mess.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public Fname: string;
  @Column()
  public Lname: string;
  @Column()
  public gender: string;
  @Column({ default: false })
  public isAdmin: string;
  @Column({ unique: true })
  public username: string;
  @Column()
  public password: string;
  @Column({ default: 0 })
  public Balance: number;
  @Column()
  public date: Date;
  @Column({ default: 0 })
  public carryForward: number;
  @Column({ default: 0 })
  public IndividualDeposit: number;
  @Column({ default: 0 })
  public devboxDeposit: number;
  @Column({ default: 0 })
  public totalDeposit: number;
  @Column({ default: 0 })
  public Expanses: number;
  @Column({ default: 0 })
  public cashInHand: number;
  // @Column({ default: 0 })
  // public perDayCharge: number;
  // @Column({ default: 0 })
  // public menuName: string;
  // @Column()
  // public messDate: Date;
  // @ManyToMany(() => Mess, (mess) => mess.userId, { onDelete: 'SET NULL' })
  // @JoinTable()
  // mess: Mess[];
}
