import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(private userService: UsuarioService,  private readonly jwtService: JwtService      ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);

    if (user &&  await this.userService.compareHash( pass, user.passwordHash)) {
      return user;
    }
    return null;
  }



   async login(user: any) {
     const payload = { username: user.email, sub: user.id };
     return {
       access_token: this.jwtService.sign(payload),
     };
   }

}
