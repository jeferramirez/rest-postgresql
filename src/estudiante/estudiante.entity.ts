import { Entity, Column, PrimaryColumn } from 'typeorm';
const infoDefault = { estado: false, fechaModificacion: '' };
const observacionDefault = [];

@Entity()
export class Estudiante {


  @PrimaryColumn()
  codEst: string;

  @Column()
  nombres: string;

  @Column()
  celular: string;


  @Column()
  email: string;

  @Column()
  telefono: string;

  @Column()
  sexo: string;

  @Column()
  direccion: string;

  @Column()
  apellidos: string;

  @Column()
  programa: string;

  @Column()
  facultad: string;


  // campos de si o no
  @Column({ type: 'json', nullable: true, default: infoDefault})
   formulario: string;

  @Column({ type: 'json', nullable: true, default: infoDefault})
  formularioEntregado: string;

  @Column({ type: 'json', nullable: true, default: infoDefault})
  asiste: string;

  @Column({ type: 'json', nullable: true, default: infoDefault})
  desistio: string;


  @Column( {type: 'json', nullable: true, default: infoDefault})
  llamado: string;
  
  // string json
  @Column( {type: 'json', nullable: true, default: observacionDefault })
  observaciones: string;


   @Column({ nullable: true, default:  new Date().toISOString() })
   fechaCreacion: string;

    @Column( { nullable: true, default: true })
    estado: boolean;
}
