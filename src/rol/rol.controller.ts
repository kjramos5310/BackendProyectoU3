import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol } from './rol.entity';

@Controller('rol') // Cambié la ruta a plural
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  async findAll(): Promise<Rol[]> {
    return await this.rolService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Rol> {
    return await this.rolService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosRol: Rol): Promise<Rol> {
    return await this.rolService.create(datosRol); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosRol: Rol,
  ): Promise<Rol> { // Cambié el retorno para que devuelva el rol actualizado
    return await this.rolService.update(id, datosRol); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.rolService.remove(id); // Cambié el nombre del método a eliminar
  }
}
