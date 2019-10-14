import { Module } from '@nestjs/common';
import { DocenteGrupoController } from './docente_grupo.controller';
import { DocenteGrupoService } from './docente_grupo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocenteGrupo } from './docente_grupo.entity';

@Module({
  controllers: [DocenteGrupoController],
  providers: [DocenteGrupoService],
  imports: [TypeOrmModule.forFeature([DocenteGrupo])],

})
export class DocenteGrupoModule {}
