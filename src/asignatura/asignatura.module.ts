import { Module } from '@nestjs/common';
import { AsignaturaController } from './asignatura.controller';
import { AsignaturaService } from './asignatura.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignatura } from './asignatura.entity';

@Module({
  controllers: [AsignaturaController],
  providers: [AsignaturaService],
  imports: [TypeOrmModule.forFeature([Asignatura])],

})
export class AsignaturaModule {}
