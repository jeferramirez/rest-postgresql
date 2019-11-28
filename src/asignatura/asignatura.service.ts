import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asignatura } from './asignatura.entity';

@Injectable()
export class AsignaturaService {
  constructor(
    @InjectRepository(Asignatura)
    private readonly asignRepository: Repository<Asignatura>,
  ) { }


  async findAll(): Promise<Asignatura[]> {
    return await this.asignRepository.find();
  }

  async findOne(codAsignatura: string): Promise<Asignatura> {

    return await this.asignRepository.findOne(codAsignatura);
  }


  async findByCod(codAsignatura: string) {

    try {
      return await this.asignRepository.find({ codAsignatura });
    } catch (err) {
      return err;
    }
  }

  async createAsignatura(asignatura: any): Promise<Asignatura> {

    try {

      return await this.asignRepository.save(asignatura);

    } catch (error) {

      return error;
    }

  }

  async updatedAsign(asignatura: any) {

    try {
      const asigActualizar = await this.asignRepository.findOne(asignatura.codAsignatura);
      asigActualizar.nombre = asignatura.nombre;
      asigActualizar.numeroCreditos = asignatura.numeroCreditos;
      asigActualizar.estado = asignatura.estado;
      return await this.asignRepository.save(asigActualizar);
    } catch (error) {
      return error;
    }
  }


  async deleteOne(codAsignatura: string) {
    try {
      return await this.asignRepository.delete(codAsignatura);
    } catch (err) {
      return err;
    }
  }

}
