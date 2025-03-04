import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,CreateDateColumn } from 'typeorm';
import { Producto } from '../producto/producto.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity('movimiento_inventario')
export class MovimientoInventario {
  @PrimaryGeneratedColumn()
  id_movimiento: number;

  @ManyToOne(() => Producto, producto => producto.movimientos)
  id_producto?: Producto;

  @Column()
  tipo_movimiento?: string;

  @Column()
  cantidad?: number;

  @CreateDateColumn()
  fecha_movimiento: Date;

  @Column()
  motivo?: string;

  @ManyToOne(() => Usuario, usuario => usuario.movimientos)
  id_usuario?: Usuario;

  @Column()
  costo_unitario?: number;

  @Column()
  ubicacion?: string;
}