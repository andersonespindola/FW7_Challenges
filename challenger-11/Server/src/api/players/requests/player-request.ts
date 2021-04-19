import { IsNumber, IsString } from 'class-validator'

export class PlayerRequest {
  @IsString()
  name: string

  @IsNumber()
  score: number

  @IsNumber()
  fails: number
}
