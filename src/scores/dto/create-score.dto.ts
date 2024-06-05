import { IsString, IsNumber } from 'class-validator'

export class CreateScoreDto {
    @IsString()
    name: string

    @IsNumber()
    score: number
}
