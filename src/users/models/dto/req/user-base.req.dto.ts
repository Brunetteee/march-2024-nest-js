import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';
import { GenderEnum } from '../../enums/gender.enum';

export class CarBaseReqDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 50)
  producer: string;

  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 50)
  model: string;

  @ApiProperty({ example: 2021 })
  @Type(() => Number)
  @Min(1900)
  year: number;
}

export class UserBaseReqDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 50)
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(10)
  @Max(45)
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'string@test.com' })
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @ValidateIf((obj) => !obj.phone)
  @IsString()
  @IsEmail()
  email: string;

  @Transform(TransformHelper.trim)
  @ValidateIf((obj) => !obj.email)
  @IsString()
  phone: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsBoolean()
  @IsOptional()
  isStudent: boolean = false;

  @ApiProperty({ example: '12qw4qeASD' })
  @IsNotIn(['password', '123456', 'qwerty'])
  @Transform(TransformHelper.trim)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and be at least 8 characters long',
  })
  password: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CarBaseReqDto)
  cars: CarBaseReqDto[];
}
