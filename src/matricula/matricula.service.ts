import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matricula } from './matricula.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class MatriculaService {


  constructor(
    @InjectRepository(Matricula)
    private readonly matriculaRepo: Repository<Matricula>,
  ) { }


  async findAll(): Promise<Matricula[]> {

    try {
      return await this.matriculaRepo.find();
      
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string): Promise<Matricula> {

    try {
      return await this.matriculaRepo.findOne(id);
      
    } catch (error) {
      return error;
    }

  }


  async createOne(matricula: any): Promise<Matricula> {

    try {
      return await this.matriculaRepo.save(matricula);

    } catch (err) {

      return err;
    }
  }

  async updatedOne(matricula: any) {

    // const nuevo = new Matricula();
    const usuarioActualizar = await this.matriculaRepo.findOne(matricula.id);

    return await this.matriculaRepo.save(usuarioActualizar);


  }


  async deleteOne(usuarioId: number) {
    try {
      return await this.matriculaRepo.delete(usuarioId);
    } catch (err) {
      return err;
    }
  }




}
