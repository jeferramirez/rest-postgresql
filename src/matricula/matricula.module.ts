import { Module } from '@nestjs/common';
import { MatriculaController } from './matricula.controller';
import { MatriculaService } from './matricula.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Matricula } from './matricula.entity';

@Module({
  controllers: [MatriculaController],
  providers: [MatriculaService],
  imports: [TypeOrmModule.forFeature([Matricula])],

})
export class MatriculaModule {}
