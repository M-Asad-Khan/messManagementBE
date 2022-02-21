import { IsDate, IsEmail, IsNumber, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  readonly Fname: string;
  @IsString()
  readonly Lname: string;
  @IsString()
  readonly gender: string;
  @IsString()
  readonly isAdmin: string;
  @IsEmail()
  readonly username: string;
  @IsString()
  readonly password: string;
  @IsNumber()
  readonly Balance: number;
  @IsDate()
  readonly date: Date;
  @IsNumber()
  readonly carryForward: number;
  @IsNumber()
  readonly IndividualDeposit: number;
  @IsNumber()
  readonly devboxDeposit: number;
  @IsNumber()
  readonly totalDeposit: number;
  @IsNumber()
  readonly Expanses: number;
  @IsNumber()
  readonly cashInHand: number;
  // @IsNumber()
  // readonly perDayCharge: number;
  // @IsString()
  // readonly menuName: string;
  // @IsDate()
  // readonly messDate: Date;
}
