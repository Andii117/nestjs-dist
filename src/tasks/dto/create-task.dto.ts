import {
    IsNotEmpty,
    IsString,
    MinLength
} from 'class-validator'

export class CreateTaskDto {
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    title: string
    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    description: string
}