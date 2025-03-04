import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reporte } from './reporte.entity';

@Injectable()
export class ReporteService {
  constructor(
    @InjectRepository(Reporte)
    private readonly reporteRepository: Repository<Reporte>,
  ) {}

  findAll(): Promise<Reporte[]> {
    return this.reporteRepository.find();
  }

  async findOne(id: number): Promise<Reporte> {
    const reporte = await this.reporteRepository.findOneBy({ id_reporte: id });
    if (!reporte) {
      throw new NotFoundException(`Reporte con id ${id} no encontrado`);
    }
    return reporte;
  }

  create(reporte: Partial<Reporte>): Promise<Reporte> {
    const nuevoReporte = this.reporteRepository.create(reporte);
    return this.reporteRepository.save(nuevoReporte);
  }

  async update(id: number, reporte: Partial<Reporte>): Promise<Reporte> {
    await this.reporteRepository.update(id, reporte);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const reporte = await this.findOne(id);
    await this.reporteRepository.remove(reporte);
  }
}
