import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './docente.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class DocenteService {


  constructor(
    @InjectRepository(Docente)
    private readonly usuarioRepository: Repository<Docente>,
  ) { }


  async findAll(): Promise<Docente[]> {

    try {
      return await this.usuarioRepository.find();

    } catch (error) {

      return error;
    }
  }

  async findOne(idUsuario: number): Promise<Docente> {

     try {
       return await this.usuarioRepository.findOne(idUsuario);
       
     } catch (error) {
       return error;
     }
  }


  async createUser(usuarioNuevo: any): Promise<Docente> {

    try {
      return await this.usuarioRepository.save(usuarioNuevo);

    } catch (err) {

      return err;
    }
  }

  async updatedUser(usuarioNuevo: any) {

    // const nuevo = new Docente();
    const usuarioActualizar = await this.usuarioRepository.findOne(usuarioNuevo.id);

    usuarioActualizar.apellidos = usuarioNuevo.apellidos;
    usuarioActualizar.nombres = usuarioNuevo.nombres;
    usuarioActualizar.estado = usuarioNuevo.estado;
    usuarioActualizar.codDocente = usuarioNuevo.codDocente;

    return await this.usuarioRepository.save(usuarioActualizar);


  }


  async deleteOne(usuarioId: number) {
    try {
      return await this.usuarioRepository.delete(usuarioId);
    } catch (err) {
      return err;
    }
  }




}
