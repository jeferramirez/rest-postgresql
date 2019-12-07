import { Entity, Column, PrimaryColumn, BeforeInsert, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Asignatura } from 'src/asignatura/asignatura.entity';
import { Estudiante } from 'src/estudiante/estudiante.entity';
import { DocenteGrupo } from 'src/docente_grupo/docente_grupo.entity';

@Entity()
export class Matricula {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Asignatura, asignatura => asignatura.codAsignatura, {  cascade: true })
  @JoinColumn({ name: 'cod_asignatura'})
  codAsignatura: Asignatura;

  @ManyToOne(type => Estudiante, est => est.codEst, {  cascade: true })
  @JoinColumn({ name: 'cod_estudiante'})
  codEstudiante: Estudiante;

  @ManyToOne(type => DocenteGrupo, docentGrp => docentGrp.id, {  cascade: true })
  @JoinColumn({ name: 'cod_docenteGrp'})
  codGrupo: DocenteGrupo;

  @Column({nullable: true, default: () => 0 })
  parcialUno: number;

  @Column({nullable: true, default: () => 0 })
  parcialDos: number;

  @Column({nullable: true, default: () => 0 })
  parcialTres: number;

  @Column({nullable: true, default: () => 0 })
  notasAdicionales: number;

  @Column({nullable: true, default: () => 0 })
  proyecto: number;
}
