import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  private saltRounds = 10;


  constructor() { }


  async findByCod(codigo: string) {



  }
}