import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MovimientoInventarioService } from './movimiento_inventario.service';
import { MovimientoInventario } from './movimiento_inventario.entity';

@Controller('movimiento-inventario') // Usé un nombre plural para la ruta
export class MovimientoInventarioController {
  constructor(private readonly movimientoInventarioService: MovimientoInventarioService) {}

  @Get()
  async findAll(): Promise<MovimientoInventario[]> {
    return await this.movimientoInventarioService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<MovimientoInventario> {
    return await this.movimientoInventarioService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosMovimientoInventario: MovimientoInventario): Promise<MovimientoInventario> {
    return await this.movimientoInventarioService.create(datosMovimientoInventario); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosMovimientoInventario: MovimientoInventario,
  ): Promise<MovimientoInventario> { // Cambié el retorno para que devuelva el movimiento inventario actualizado
    return await this.movimientoInventarioService.update(id, datosMovimientoInventario); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.movimientoInventarioService.remove(id); // Cambié el nombre del método a eliminar
  }
}
