import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../common/jwt.constants';

@Injectable()
export class AdminGuard implements CanActivate{
    async canActivate(context: ExecutionContext){
        const ctx = GqlExecutionContext.create(context).getContext();
        if(!ctx.headers.authorization){
            return false;
        }
        ctx.user = await this.validateToken(ctx.headers.authorization);
        return true;
    }

    async validateToken(auth: string){
        if(auth.split(' ')[0] !=='Bearer'){
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        const token = auth.split(' ')[1];

        try{
            const tok = await jwt.verify(token, jwtConstants.scret);
            // const dec = await jwt.decode
        }catch(err){
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
    }
}
