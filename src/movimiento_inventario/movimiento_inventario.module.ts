import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoInventario } from './movimiento_inventario.entity';
import { MovimientoInventarioService } from './movimiento_inventario.service';
import { MovimientoInventarioController } from './movimiento_inventario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoInventario])],
  providers: [MovimientoInventarioService],
  controllers: [MovimientoInventarioController],
})
export class MovimientoInventarioModule {}