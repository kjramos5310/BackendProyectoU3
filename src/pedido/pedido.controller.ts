import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedido') // Cambié la ruta a plural
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  async findAll(): Promise<Pedido[]> {
    return await this.pedidoService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Pedido> {
    return await this.pedidoService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosPedido: Pedido): Promise<Pedido> {
    return await this.pedidoService.create(datosPedido); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosPedido: Pedido,
  ): Promise<Pedido> { // Cambié el retorno para que devuelva el pedido actualizado
    return await this.pedidoService.update(id, datosPedido); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.pedidoService.remove(id); // Cambié el nombre del método a eliminar
  }
}
