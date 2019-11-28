import { Controller, Post, Body, Res, HttpStatus, Get, Request, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post()
  async create(@Body() matricula: any, @Res() resp) {}


  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login( @Request() req) {
    return this.authService.login(req.user);
  }

}
