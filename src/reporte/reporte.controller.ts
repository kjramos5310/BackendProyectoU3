import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { Reporte } from './reporte.entity';

@Controller('reporte') // Cambié la ruta a plural
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  @Get()
  async findAll(): Promise<Reporte[]> {
    return await this.reporteService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Reporte> {
    return await this.reporteService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosReporte: Reporte): Promise<Reporte> {
    return await this.reporteService.create(datosReporte); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosReporte: Reporte,
  ): Promise<Reporte> { // Cambié el retorno para que devuelva el reporte actualizado
    return await this.reporteService.update(id, datosReporte); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.reporteService.remove(id); // Cambié el nombre del método a eliminar
  }
}
