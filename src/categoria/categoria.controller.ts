

import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categoria') // Cambié la ruta a 'categorias' para ser más consistente
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return await this.categoriaService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosCategoria: Partial<Categoria>): Promise<Categoria> {
    return await this.categoriaService.create(datosCategoria); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosCategoria: Partial<Categoria>,
  ): Promise<Categoria> { // Cambié el retorno para que devuelva la categoría actualizada
    return await this.categoriaService.update(id, datosCategoria); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const categoria = await this.categoriaService.findOne(id);
    if (!categoria) {
      throw new NotFoundException(`No se encontró la categoría con ID: ${id}`);
    }
    return this.categoriaService.remove(id);
  }
  


}
