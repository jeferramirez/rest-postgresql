import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocenteGrupo } from './docente_grupo.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class DocenteGrupoService {


  constructor(
    @InjectRepository(DocenteGrupo)
    private readonly grpRepo: Repository<DocenteGrupo>) { }


  async findAll(): Promise<DocenteGrupo[]> {
    try {
      return await this.grpRepo.find({ relations: ['cod', 'codGrupo'] });

    } catch (error) {
      return error;
    }
  }

  async findOne(cod: string): Promise<DocenteGrupo> {

    try {
      return await this.grpRepo.findOne(cod);

    } catch (error) {

      return error;
    }

  }


  async create(docGrp: any): Promise<DocenteGrupo> {

    try {

      return await this.grpRepo.save(docGrp);

    } catch (err) {

      return err;
    }
  }

  async update(docGrp: any) {

    try {
      const grpAct = await this.grpRepo.findOne(docGrp.id);
      grpAct.periodo = docGrp.periodo;
      grpAct.estado = docGrp.estado;
      return await this.grpRepo.save(grpAct);

    } catch (error) {
      return error;
    }



  }


  async deleteOne(cod: string) {
    try {
      return await this.grpRepo.delete(cod);
    } catch (err) {
      return err;
    }
  }




}
