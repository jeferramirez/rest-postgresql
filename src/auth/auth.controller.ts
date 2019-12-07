import { Controller, Post, Body, Res, HttpStatus, Get, Request, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }



  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req, @Res() res, @Body() usuario: any) {

    const token = await this.authService.login(req.user);

    try {
      return res.status(HttpStatus.OK).json(token);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ mensaje: 'error generando el token' });

    }

  }

}
