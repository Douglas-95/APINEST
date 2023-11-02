import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from './dto/Create-User-Dto';
import { UserService } from './users.service';

@Controller('users')
export class usersController{
    constructor(private readonly userService: UserService){

    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        const newUser = await this.userService.createUser(createUserDto);
        return newUser;

    }
}