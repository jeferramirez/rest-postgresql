import { Module } from '@nestjs/common';
import {DocenteController } from './docente.controller';
import { DocenteService } from './docente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './docente.entity';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService],
  imports: [TypeOrmModule.forFeature([Docente])],

})
export class DocenteModule {}
