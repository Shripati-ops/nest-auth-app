import { Injectable } from '@nestjs/common';
import { IUsers } from 'src/interfaces/users.interface';
import {hash, compare} from 'bcrypt'
@Injectable()
export class UserService {

     users: Array<IUsers> = [{
        username : "Shripati",
        email : "shripatia302@gmail.com",
        mobile_no : "+91 7574966406",
        password  : "$2a$09$y82Qp1bmXQduu5KMVJYMoue6d99rS5.N1zrDsyqB63GdpUc9/hx.2", // Shripati16
        friends_with : [1]
    }]

    public async validateUser(username : string, password : string){
        const user = this.users.find((user) => {
            return user.username == username
        })
        if(user){
            if (await compare(password, user.password)){
                return true
            }else{
                return false
            }
        }
    }

}
