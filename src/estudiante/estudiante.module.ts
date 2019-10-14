import { Module } from '@nestjs/common';
import {EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './estudiante.entity';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([Estudiante])],

})
export class EstudianteModule {}
