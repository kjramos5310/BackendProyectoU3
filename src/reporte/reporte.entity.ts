import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,CreateDateColumn } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity('reporte')
export class Reporte {
  @PrimaryGeneratedColumn()
  id_reporte: number;

  @ManyToOne(() => Empresa, empresa => empresa.reportes)
  id_empresa?: Empresa;

  @Column()
  tipo?: string;

  @CreateDateColumn()
  fecha_generacion?: Date;

  @Column()
  archivo_pdf?: string;

  @ManyToOne(() => Usuario, usuario => usuario.reportes)
  id_usuario?: Usuario;
}