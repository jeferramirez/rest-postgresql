import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private matriculaService: AuthService) { }

  @Post()
  async create(@Body() matricula: any, @Res() resp) {



  }


}
