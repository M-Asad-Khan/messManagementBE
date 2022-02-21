import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAttendance {
  @PrimaryGeneratedColumn()
  public user_id: number;
  @Column()
  public id: number;
  @Column()
  public perDayCharge: number;
  @Column()
  public menuName: string;
  @Column()
  public messDate: Date;
  @Column()
  public name: string;
}
