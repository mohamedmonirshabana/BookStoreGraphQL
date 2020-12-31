import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../common/jwt.constants';

@Injectable()
export class AuthGuard implements CanActivate{
    async canActivate(context: ExecutionContext){
        const ctx =await GqlExecutionContext.create(context).getContext();
        console.log('CTX ',ctx.req.headers.authorization);
        if(!ctx.req.headers.authorization){
            return false;
        }
        ctx.user = await this.validateToken(ctx.req.headers.authorization);
        return true;
    }

    async validateToken(auth: string){
        if(auth.split(' ')[0]!=='Bearer'){
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        const token = auth.split(' ')[1];
        try{
            const decod =  await jwt.verify(token, jwtConstants.scret);
            console.log("My Decode ", decod);
            return decod;
        }catch(err){
            console.log("err ", err);
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
    }
}
