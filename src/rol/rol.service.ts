import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './rol.entity';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  findAll(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolRepository.findOneBy({ id_rol: id });
    if (!rol) {
      throw new NotFoundException(`Rol con id ${id} no encontrado`);
    }
    return rol;
  }

  create(rol: Partial<Rol>): Promise<Rol> {
    const nuevoRol = this.rolRepository.create(rol);
    return this.rolRepository.save(nuevoRol);
  }

  async update(id: number, rol: Partial<Rol>): Promise<Rol> {
    await this.rolRepository.update(id, rol);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const rol = await this.findOne(id);
    await this.rolRepository.remove(rol);
  }
}
