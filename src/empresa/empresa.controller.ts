

import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresa') // Cambié la ruta a 'empresas' para ser más consistente
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  async findAll(): Promise<Empresa[]> {
    return await this.empresaService.findAll(); // Cambié el nombre del método a obtenerTodas
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Empresa> {
    return await this.empresaService.findOne(id); // Cambié el nombre del método a obtenerUna
  }

  @Post()
  async create(@Body() datosEmpresa: Partial<Empresa>): Promise<Empresa> {
    return await this.empresaService.create(datosEmpresa); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosEmpresa: Partial<Empresa>,
  ): Promise<Empresa> { // Cambié el retorno para que devuelva la empresa actualizada
    return await this.empresaService.update(id, datosEmpresa); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.empresaService.remove(id); // Cambié el nombre del método a eliminar
  }

}

