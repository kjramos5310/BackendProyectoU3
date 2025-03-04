
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  async findOne(id: number): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOneBy({ id_empresa: id });
    if (!empresa) {
      throw new NotFoundException(`Empresa with id ${id} not found`);
    }
    return empresa;
  }
  async create(empresa: Partial<Empresa>): Promise<Empresa> {
    // Asegúrate de que los campos requeridos tengan valores válidos
    if (!empresa.nombre || !empresa.ruc) {
      throw new Error('Nombre y RUC son obligatorios');
    }
  
    const nuevaEmpresa = this.empresaRepository.create(empresa);
    return this.empresaRepository.save(nuevaEmpresa);
  }
  

  async update(id: number, empresa: Partial<Empresa>): Promise<Empresa> {
    await this.empresaRepository.update(id, empresa);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const empresa = await this.findOne(id);
    await this.empresaRepository.remove(empresa);
  }
}
