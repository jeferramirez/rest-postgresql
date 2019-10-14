import { Entity, Column, PrimaryColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Estudiante {

  @BeforeInsert()
  updateDates() {
      this.fechaCreacion = new Date().toISOString();
  }
  @PrimaryColumn()
  codEst: string;

  @Column()
  nombres: string;

  @Column()
  telefono: string;

  @Column()
  direccion: string;

  @Column()
  apellidos: string;

  @Column()
  fechaCreacion: string;

  @Column()
  estado: boolean;
}
