import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocenteModule } from './docente/docente.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { GrupoModule } from './grupo/grupo.module';
import { DocenteGrupoModule } from './docente_grupo/docente_grupo.module';
import { MatriculaModule } from './matricula/matricula.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  DocenteModule,
      AsignaturaModule,
      EstudianteModule,
      GrupoModule,
      DocenteGrupoModule,
      MatriculaModule,
      AuthModule,
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'secret',
      database: 'desarrollo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
