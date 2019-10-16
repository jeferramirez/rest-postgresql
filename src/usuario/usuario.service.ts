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
    private readonly matriculaRepo: Repository<Usuario>,
  ) { }


  async findByCod(codigo: string): Promise<Usuario[]> {

    try {
      return await this.matriculaRepo.find({
        relations: ['codAsignatura', 'codEstudiante', 'codGrupo'],
        where: [{ codEstudiante: codigo }]
      });

    } catch (error) {
      return error;
    }
  }


  async findAll(): Promise<Usuario[]> {

    try {
      return await this.matriculaRepo.find({ relations: ['codAsignatura', 'codEstudiante', 'codGrupo'] });

    } catch (error) {
      return error;
    }
  }
  async findOne(id: string): Promise<Usuario> {

    try {
      return await this.matriculaRepo.findOne(id);

    } catch (error) {
      return error;
    }

  }


  async createOne(user: any): Promise<Usuario> {

    try {

      user.passwordHash = await this.getHash(user.password);
      // no almacenar el password
      user.password = undefined;
      return await this.matriculaRepo.save(user);

    } catch (err) {

      return err;
    }
  }

  async updatedOne(user: any) {

    const userAct = await this.matriculaRepo.findOne(user.id);
    userAct.email = user.email;
    userAct.username = user.username;
    return await this.matriculaRepo.save(userAct);


  }


  async deleteOne(usuarioId: number) {
    try {
      return await this.matriculaRepo.delete(usuarioId);
    } catch (err) {
      return err;
    }
  }



  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }


}
