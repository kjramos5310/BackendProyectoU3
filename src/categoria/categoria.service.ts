
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id_categoria: id });
    if (!categoria) {
      throw new NotFoundException(`Categoria with id ${id} not found`);
    }
    return categoria;
  }

  create(categoria: Partial<Categoria>): Promise<Categoria> {
    const nuevaCategoria = this.categoriaRepository.create(categoria);
    return this.categoriaRepository.save(nuevaCategoria);
  }

  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
    await this.categoriaRepository.update(id, categoria);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const categoria = await this.categoriaRepository.findOneBy({ id_categoria: id });
    if (!categoria) {
      throw new NotFoundException(`No se encontró la categoría con ID: ${id}`);
    }
    await this.categoriaRepository.remove(categoria);
  }
  
}
