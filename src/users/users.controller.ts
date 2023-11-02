import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDataDto } from './dto/Create-User-Dto';
import { UserService } from './users.service';

@Controller('users')
export class usersController{
    constructor(private readonly userService: UserService){

    }

    @Post()
    async createUser(@Body() createUserDataDto: CreateUserDataDto){
        const createUser = await this.userService.createUser(createUserDataDto);
        return{
            message: 'Usuário criado', data: createUser};

    }
}