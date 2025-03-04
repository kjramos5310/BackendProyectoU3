import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';

@Controller('proveedor') // Cambié la ruta a plural
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Get()
  async findAll(): Promise<Proveedor[]> {
    return await this.proveedorService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Proveedor> {
    return await this.proveedorService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosProveedor: Proveedor): Promise<Proveedor> {
    return await this.proveedorService.create(datosProveedor); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosProveedor: Proveedor,
  ): Promise<Proveedor> { // Cambié el retorno para que devuelva el proveedor actualizado
    return await this.proveedorService.update(id, datosProveedor); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.proveedorService.remove(id); // Cambié el nombre del método a eliminar
  }
}
