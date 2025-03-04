import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detalle_Pedido } from './detalle_pedido.entity';

@Injectable()
@Controller('detalle-pedido')  // Aquí agregas el decorador Controller
export class Detalle_PedidoController {
  constructor(
    @InjectRepository(Detalle_Pedido)
    private readonly detallePedidoRepository: Repository<Detalle_Pedido>,
  ) {}

  @Get()  // El decorador @Get() para la ruta 'GET /detalle-pedido'
  findAll(): Promise<Detalle_Pedido[]> {
    return this.detallePedidoRepository.find({ relations: ['id_pedido', 'id_producto'] });
  }

  @Get(':id')  // El decorador @Get() para la ruta 'GET /detalle-pedido/:id'
  async findOne(@Param('id') id: number): Promise<Detalle_Pedido> {
    const detalle = await this.detallePedidoRepository.findOne({
      where: { id_detalle_pedido: id },
      relations: ['id_pedido', 'id_producto'],
    });
    if (!detalle) {
      throw new NotFoundException(`Detalle de pedido con id ${id} no encontrado`);
    }
    return detalle;
  }

  @Post()  // El decorador @Post() para la ruta 'POST /detalle-pedido'
  create(@Body() detallePedido: Partial<Detalle_Pedido>): Promise<Detalle_Pedido> {
    const nuevoDetalle = this.detallePedidoRepository.create(detallePedido);
    return this.detallePedidoRepository.save(nuevoDetalle);
  }

  @Put(':id')  // El decorador @Put() para la ruta 'PUT /detalle-pedido/:id'
  async update(@Param('id') id: number, @Body() detallePedido: Partial<Detalle_Pedido>): Promise<Detalle_Pedido> {
    await this.detallePedidoRepository.update(id, detallePedido);
    return this.findOne(id);
  }

  @Delete(':id')  // El decorador @Delete() para la ruta 'DELETE /detalle-pedido/:id'
  async remove(@Param('id') id: number): Promise<void> {
    const detalle = await this.findOne(id);
    await this.detallePedidoRepository.remove(detalle);
  }
}
