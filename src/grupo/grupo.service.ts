import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupo } from './grupo.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class GrupoService {


  constructor(
    @InjectRepository(Grupo)
    private readonly grupoRepo: Repository<Grupo>,
  ) { }


  async findAll(): Promise<Grupo[]> {
    try {
      return await this.grupoRepo.find();

    } catch (error) {

      return error;
    }
  }

  async findOne(id: string): Promise<Grupo> {

    try {
      return await this.grupoRepo.findOne(id);

    } catch (error) {

      return error;
    }
  }


  async createGrupo(grupoNuevo: any): Promise<Grupo> {

    try {
      return await this.grupoRepo.save(grupoNuevo);

    } catch (err) {

      return err;
    }
  }

  async updateGrupo(grupoNuevo: any) {

    try {
      const grupoAct = await this.grupoRepo.findOne(grupoNuevo.id);
      grupoAct.jornada = grupoNuevo.jornada;
      grupoAct.estado = grupoNuevo.estado;
      grupoAct.nombre = grupoNuevo.nombre;
      grupoAct.sede = grupoNuevo.sede;

      return await this.grupoRepo.save(grupoAct);

    } catch (error) {
      return error;
    }


  }


  async deleteOne(usuarioId: number) {
    try {
      return await this.grupoRepo.delete(usuarioId);
    } catch (err) {
      return err;
    }
  }




}
