import { IsDate, IsNumber, IsString } from 'class-validator';
export class CreateUserAttendanceDto {
  @IsNumber()
  readonly id: number;
  @IsNumber()
  readonly perDayCharge: number;
  @IsString()
  readonly menuName: string;
  @IsDate()
  readonly messDate: Date;
  @IsString()
  readonly name: string;
}
