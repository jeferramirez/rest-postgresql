import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm/repository/Repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

  private saltRounds = 10;


  constructor(
    @InjectRepository(Usuario)
    private readonly userRepo: Repository<Usuario>,
  ) { }


  async findByCod(codigo: string): Promise<Usuario[]> {

    try {
      return await this.userRepo.find({
        relations: ['codAsignatura', 'codEstudiante', 'codGrupo'],
        where: [{ codEstudiante: codigo }]
      });

    } catch (error) {
      return error;
    }
  }


  async findAll(): Promise<Usuario[]> {

    try {
      return await this.userRepo.find({ relations: ['codAsignatura', 'codEstudiante', 'codGrupo'] });

    } catch (error) {
      return error;
    }
  }

  // modificar a unico el email y que busque por el
  async findOne(email: string): Promise<any> {

    try {
      return await this.userRepo.findOne({
        where: [{ email }],
      });

    } catch (error) {
      return error;
    }

  }


  async createOne(user: any): Promise<Usuario> {

    try {

      user.passwordHash = await this.getHash(user.password);
      // no almacenar el password
      user.password = undefined;
      return await this.userRepo.save(user);

    } catch (err) {

      return err;
    }
  }

  async updatedOne(user: any) {

    const userAct = await this.userRepo.findOne(user.id);
    userAct.email = user.email;
    userAct.username = user.username;
    return await this.userRepo.save(userAct);


  }


  async deleteOne(usuarioId: number) {
    try {
      return await this.userRepo.delete(usuarioId);
    } catch (err) {
      return err;
    }
  }



  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

   async compareHash(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }

}
