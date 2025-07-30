import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class LoginDto{
    @ApiProperty({example: '+998941111177'})
    @IsPhoneNumber()
    @IsNotEmpty()
    phone: string

    @ApiProperty({example: 'cRcD+2WQNGu('})
    @IsString()
    @IsNotEmpty()
    password: string
}