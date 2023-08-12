import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import jwt from 'jsonwebtoken';
@Injectable()
export class AuthService {
    constructor(private userService : UserService){}
    async validateUser(username:string, password:string) {
        this.userService.validateUser(username,password)
    }

    async login(){
        const {sign} = jwt

    }
}
