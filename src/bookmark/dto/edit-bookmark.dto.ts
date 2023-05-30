import { IsOptional, IsString } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  link?: string;
}
