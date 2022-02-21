import { IsDate, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateMessDto {
  @IsString()
  menuDetail: string;

  @IsString()
  price: string;

  @IsDate()
  date: Date;
}

export class CreateWeeklyMessDto {
  @IsString()
  menuName: string;
  @IsDate()
  date: Date;
}
