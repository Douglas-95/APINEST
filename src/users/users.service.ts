import { ConflictException, Injectable } from "@nestjs/common";
import { User, UserDocument } from "./schemas/user.shema";
import { CreateUserDto } from "./dto/Create-User-Dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}
     
    async createUser(createUserDto: CreateUserDto): Promise<User>{
        const emailexists = await this.userModel.findOne({ email: createUserDto});

        if(emailexists){
            throw new ConflictException('Email informado já existe!');
        }
        const newUser = new this.userModel({
            ...createUserDto
        })
        return await newUser.save()
    }
    
    async findAll(): Promise<User []>{
        return await this.userModel.find().exec()
    }
}