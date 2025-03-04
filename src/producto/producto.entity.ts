import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany,CreateDateColumn,UpdateDateColumn } from 'typeorm';
import { Categoria } from '../categoria/categoria.entity';
import { Empresa } from '../empresa/empresa.entity';
import { Proveedor } from '../proveedor/proveedor.entity';
import { AlertaStock } from '../alerta-stock/alerta-stock.entity'; 
import { Detalle_Pedido } from '../Detalle_Pedido/detalle_pedido.entity';
import { MovimientoInventario } from '../movimiento_inventario/movimiento_inventario.entity';


@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo_barras?: string;

  @Column()
  nombre?: string;

  @Column()
  descripcion?: string;

  @ManyToOne(() => Categoria, categoria => categoria.id_categoria)
  id_categoria?: Categoria;

  @Column()
  precio_compra?: number;

  @Column()
  precio_venta?: number;

  @Column()
  stock_minimo?: number;

  @Column()
  stock_maximo?: number;

  @ManyToOne(() => Empresa, empresa => empresa.id_empresa)
  id_empresa?: Empresa;

  @ManyToOne(() => Proveedor, proveedor => proveedor.id_proveedor)
  id_proveedor?: Proveedor;

  @CreateDateColumn()
  fecha_creacion: Date;

  @UpdateDateColumn()
  ultima_actualizacion: Date;

  @OneToMany(() => AlertaStock, alertaStock => alertaStock.id_producto)
  alertas: AlertaStock[];

  @OneToMany(() => Detalle_Pedido, detallePedido => detallePedido.id_producto)
  detalles: Detalle_Pedido[];

  @OneToMany(()=> MovimientoInventario, movimientoInventario => movimientoInventario.id_producto)
  movimientos: MovimientoInventario[];
  
}