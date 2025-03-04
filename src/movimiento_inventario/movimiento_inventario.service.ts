import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoInventario } from './movimiento_inventario.entity';

@Injectable()
export class MovimientoInventarioService {
  constructor(
    @InjectRepository(MovimientoInventario)
    private readonly movimientoInventarioRepository: Repository<MovimientoInventario>,
  ) {}

  findAll(): Promise<MovimientoInventario[]> {
    return this.movimientoInventarioRepository.find();
  }

  async findOne(id: number): Promise<MovimientoInventario> {
    const movimientoInventario = await this.movimientoInventarioRepository.findOneBy({ id_movimiento: id });
    if (!movimientoInventario) {
      throw new NotFoundException(`Movimiento de Inventario con id ${id} no encontrado`);
    }
    return movimientoInventario;
  }

  create(movimientoInventario: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
    const nuevoMovimiento = this.movimientoInventarioRepository.create(movimientoInventario);
    return this.movimientoInventarioRepository.save(nuevoMovimiento);
  }

  async update(id: number, movimientoInventario: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
    await this.movimientoInventarioRepository.update(id, movimientoInventario);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const movimientoInventario = await this.findOne(id);
    await this.movimientoInventarioRepository.remove(movimientoInventario);
  }
}
