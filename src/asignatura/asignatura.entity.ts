import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Asignatura {
  @PrimaryColumn()
  codAsignatura: string;

  @Column()
  nombre: string;

  @Column()
  numeroCreditos: number;

  @Column()
  estado: boolean;
}