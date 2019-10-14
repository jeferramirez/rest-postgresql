import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './estudiante.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class EstudianteService {


  constructor(
    @InjectRepository(Estudiante)
    private readonly usuarioRepository: Repository<Estudiante>,
  ) { }


  async findAll(): Promise<Estudiante[]> {

    try {

      return await this.usuarioRepository.find();

    } catch (error) {
      return error;
    }
  }

  async findOne(cod: string): Promise<Estudiante> {

    try {

      return await this.usuarioRepository.findOne(cod);

    } catch (error) {

      return error;
    }
  }


  async createEstudiante(estNuevo: any): Promise<Estudiante> {

    try {
      return await this.usuarioRepository.save(estNuevo);

    } catch (err) {

      return err;
    }
  }

  async updatedEstudiante(estNuevo: any) {

    try {
      const estActualizar = await this.usuarioRepository.findOne(estNuevo.id);

      estActualizar.apellidos = estNuevo.apellidos;
      estActualizar.nombres = estNuevo.nombres;
      estActualizar.estado = estNuevo.estado;

      return await this.usuarioRepository.save(estActualizar);

    } catch (error) {
      return error;
    }


  }


  async deleteOne(cod: string) {
    try {
      return await this.usuarioRepository.delete(cod);
    } catch (err) {
      return err;
    }
  }




}
