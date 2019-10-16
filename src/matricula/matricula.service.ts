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


  async findByCod(codigo: string): Promise<Matricula[]> {

    try {
      return await this.matriculaRepo.find({
        relations: ['codAsignatura', 'codEstudiante', 'codGrupo'],
        where: [{ codEstudiante: codigo }]
      });

    } catch (error) {
      return error;
    }
  }


  async findAll(): Promise<Matricula[]> {

    try {
      return await this.matriculaRepo.find({ relations: ['codAsignatura', 'codEstudiante', 'codGrupo'] });

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

    //const matriculaAct = new Matricula();
    console.log(matricula);

    const matriculaAct = await this.matriculaRepo.findOne(matricula.id);
    matriculaAct.parcialUno =  matricula.parcialUno;
    matriculaAct.parcialDos = matricula.parcialDos;
    matriculaAct.parcialTres = matricula.parcialTres;
    return await this.matriculaRepo.save(matriculaAct);


  }


  async deleteOne(usuarioId: number) {
    try {
      return await this.matriculaRepo.delete(usuarioId);
    } catch (err) {
      return err;
    }
  }




}
