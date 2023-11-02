import { IsNotEmpty } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty()
    username: String;
    
    @IsNotEmpty()
    password: String;

    @IsNotEmpty()
    email: String;

}