import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,
  ) {}

  findAll(): Promise<Proveedor[]> {
    return this.proveedorRepository.find();
  }

  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepository.findOneBy({ id_proveedor: id });
    if (!proveedor) {
      throw new NotFoundException(`Proveedor with id ${id} not found`);
    }
    return proveedor;
  }

  create(proveedor: Partial<Proveedor>): Promise<Proveedor> {
    const nuevoProveedor = this.proveedorRepository.create(proveedor);
    return this.proveedorRepository.save(nuevoProveedor);
  }

  async update(id: number, proveedor: Partial<Proveedor>): Promise<Proveedor> {
    await this.proveedorRepository.update(id, proveedor);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const proveedor = await this.findOne(id);
    await this.proveedorRepository.remove(proveedor);
  }
}
