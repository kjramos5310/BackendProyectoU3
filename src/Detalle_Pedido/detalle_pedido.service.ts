import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detalle_Pedido } from './detalle_pedido.entity';

@Injectable()
export class Detalle_PedidoService {
  constructor(
    @InjectRepository(Detalle_Pedido)
    private readonly detallePedidoRepository: Repository<Detalle_Pedido>,
  ) {}

  findAll(): Promise<Detalle_Pedido[]> {
    return this.detallePedidoRepository.find();
  }

  async findOne(id: number): Promise<Detalle_Pedido> {
    const detallePedido = await this.detallePedidoRepository.findOne({ where: { id_detalle_pedido: id } });
    if (!detallePedido) {
      throw new Error(`Detalle_Pedido with id ${id} not found`);
    }
    return detallePedido;
  }

  create(detallePedido: Detalle_Pedido): Promise<Detalle_Pedido> {
    return this.detallePedidoRepository.save(detallePedido);
  }

  async update(id: number, detallePedido: Detalle_Pedido): Promise<void> {
    await this.detallePedidoRepository.update(id, detallePedido);
  }

  async remove(id: number): Promise<void> {
    await this.detallePedidoRepository.delete(id);
  }
}