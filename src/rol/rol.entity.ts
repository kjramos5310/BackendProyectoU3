import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column()
  nombre?: string;

  @Column()
  descripcion?: string;
}