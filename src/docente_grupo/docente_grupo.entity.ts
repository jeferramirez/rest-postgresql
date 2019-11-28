import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Docente } from '../docente/docente.entity';
import { Grupo } from '../grupo/grupo.entity';
@Entity()
@Index(['cod', 'codGrupo'], { unique: true })
export class DocenteGrupo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Docente, docente => docente.codDocente, {  cascade: true })
  @JoinColumn({ name: 'cod_docente'})
  cod: Docente;

  @ManyToOne(type => Grupo, grupo => grupo.cod, {  cascade: true })
  @JoinColumn({ name: 'cod_grupo'})
  codGrupo: Grupo;

  @Column()
  periodo: string;

  @Column()
  estado: boolean;
}
