import { Entity, Column, PrimaryGeneratedColumn, Index, PrimaryColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Docente {

  @BeforeInsert()
  updateDates() {
      this.fechaCreacion = new Date().toISOString();
  }
  @PrimaryColumn()
  codDocente: string;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  fechaCreacion: string;

  @Column()
  estado: boolean;
}
