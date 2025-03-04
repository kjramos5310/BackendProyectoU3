
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventario } from './inventario.entity';

@Injectable()
export class InventarioService {
  constructor(
    @InjectRepository(Inventario)
    private readonly inventarioRepository: Repository<Inventario>,
  ) {}

  findAll(): Promise<Inventario[]> {
    return this.inventarioRepository.find();
  }

  async findOne(id: number): Promise<Inventario> {
    const inventario = await this.inventarioRepository.findOneBy({ id_inventario: id });
    if (!inventario) {
      throw new NotFoundException(`Inventario with id ${id} not found`);
    }
    return inventario;
  }

  create(inventario: Partial<Inventario>): Promise<Inventario> {
    const nuevoInventario = this.inventarioRepository.create(inventario);
    return this.inventarioRepository.save(nuevoInventario);
  }

  async update(id: number, inventario: Partial<Inventario>): Promise<Inventario> {
    await this.inventarioRepository.update(id, inventario);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const inventario = await this.findOne(id);
    await this.inventarioRepository.remove(inventario);
  }
}
