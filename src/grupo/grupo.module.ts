import { Module } from '@nestjs/common';
import {GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupo } from './grupo.entity';

@Module({
  controllers: [GrupoController],
  providers:   [GrupoService],
  imports:     [TypeOrmModule.forFeature([Grupo])],

})
export class GrupoModule {}
