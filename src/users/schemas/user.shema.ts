import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document{
    @Prop()
    username: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);