
import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { Inventario } from './inventario.entity';

@Controller('inventario') // Cambié la ruta a 'inventarios' para mantener la consistencia
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Get()
  async findAll(): Promise<Inventario[]> {
    return await this.inventarioService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Inventario> {
    return await this.inventarioService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosInventario: Partial<Inventario>): Promise<Inventario> {
    return await this.inventarioService.create(datosInventario); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosInventario: Partial<Inventario>,
  ): Promise<Inventario> { // Cambié el retorno para que devuelva el inventario actualizado
    return await this.inventarioService.update(id, datosInventario); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.inventarioService.remove(id); // Cambié el nombre del método a eliminar
  }

}
