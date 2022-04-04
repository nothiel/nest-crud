import { IsOptional } from 'class-validator';

export class CreatePlayerDto {
    nickname: string;
    vocation: string;
    level: number;
  }

export class ModifyPlayerDto {
    @IsOptional()
    nickname: string;
    @IsOptional()
    vocation: string;
    @IsOptional()
    level: number;
}