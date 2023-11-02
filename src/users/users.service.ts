import { Injectable } from "@nestjs/common";
import { User } from "./schemas/user.shema";
import { CreateUserDataDto } from "./dto/Create-User-Dto";

@Injectable()
export class UserService{
    private readonly users: User[] = [];
    
    async createUser(createUserDto: CreateUserDataDto): Promise<User>{
        const newUser: User = {
            id: Date.now().toString(),
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser
    }
    findAll(): User[]{
        return this.users;
    }
    findOne(id: string): User{
        return this.users.find(user => user.id === id);
    }
}