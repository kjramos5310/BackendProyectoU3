import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';


@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nombre?: string;

  @Column()
  descripcion?: string;

  @CreateDateColumn()
  fecha_creacion: Date;

}