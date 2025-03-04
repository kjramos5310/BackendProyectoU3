import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn } from 'typeorm';

@Entity('proveedor')
export class Proveedor {
  @PrimaryGeneratedColumn()
  id_proveedor: number;

  @Column()
  nombre?: string;

  @Column()
  contacto?: string;

  @Column()
  telefono?: string;

  @Column()
  email?: string;

  @Column()
  direccion?: string;

  @CreateDateColumn()
  fecha_creacion: Date;
}