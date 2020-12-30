import {Injectable} from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class PasswordHasherService{
    async hashPassword(password: string){
        return await bcryptjs.hash(password, 10);
    }

    async comparePassword(plaintext, encryptPassword): Promise<boolean>{
        return await bcryptjs.compare(plaintext, encryptPassword);
    }
}