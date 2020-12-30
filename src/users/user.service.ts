import { Injectable , UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User_TABLE_NAME } from '../common/contents';
import { userInterface , usertoken } from './interface/user.interface';
import { userInput } from './input/user.input';
import { loginInput } from './input/login.input';
import { JwtService } from '@nestjs/jwt';
import { PasswordHasherService } from '../Auth/password-hasher/password-hasher.service';
import { threadId } from 'worker_threads';

@Injectable()
export class userService{
    constructor( 
        @InjectModel(User_TABLE_NAME) 
        private readonly userModel: Model<userInterface>,
        private hasherService: PasswordHasherService ,
        private jwtService: JwtService
        ){}

        async adduser(userinput: userInput):Promise<userInterface>{
            console.log("Start in Add");
            const userExist =this.userModel.find({email:userinput.email });
            if(!userExist) throw new UnauthorizedException('user email is Exist ');
            const myPasswordEnc=  await this.hasherService.hashPassword(userinput.password);

            const userdata =  new this.userModel({
                fullname: userinput.fullname,
                email: userinput.email,
                password: myPasswordEnc,
                Role: 'user'
            });
            await userdata.save();
            return userdata;
        }

        async login(login: loginInput): Promise<usertoken>{
            const user = await this.userModel.findOne({email: login.email});
            if(!user) throw new UnauthorizedException('Email  not Correct ');

            const MachPassword = await this.hasherService.comparePassword(login.password, user.password);
            if(!MachPassword){
                throw new UnauthorizedException('Password not Correct');
            }
            const token = await this.jwtService.signAsync({
                email: user.email,
                id: user._id,
                role: user.Role
            },{
                expiresIn:'1d'
            });
            return {token};
        }
}