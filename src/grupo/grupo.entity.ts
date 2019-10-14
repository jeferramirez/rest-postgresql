import { Entity, Column, PrimaryColumn  } from 'typeorm';

@Entity()
export class Grupo {

  @PrimaryColumn()
  cod: string;

  @Column()
  nombre: string;

  @Column()
  jornada: string;

  @Column()
  sede: string;

  @Column()
  estado: boolean;
}
