import { Entity, Column, PrimaryGeneratedColumn, OneToMany,CreateDateColumn } from 'typeorm';
import { Producto } from '../producto/producto.entity';
import { Inventario } from '../inventario/inventario.entity';
import { Pedido } from '../pedido/pedido.entity';
import { Reporte } from 'src/reporte/reporte.entity';



@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id_empresa: number;

  @Column()
  nombre?: string;

  @Column()
  ruc?: string;

  @Column()
  direccion?: string;

  @Column()
  telefono?: string;

  @Column()
  email_contacto?: string;

  @Column()
  sector?: string;

  @CreateDateColumn()
  fecha_creacion?: Date;

  @Column()
  estado?: string;

  @OneToMany(() => Producto, producto => producto.id_empresa)
  productos: Producto[];

  @OneToMany(() => Inventario, inventario => inventario.id_empresa)
  inventarios: Inventario[];

  @OneToMany(() => Pedido, pedido => pedido.id_empresa)
  pedidos: Pedido[];
  
  @OneToMany(() => Reporte, reporte => reporte.id_empresa)
  reportes: Reporte[];
}